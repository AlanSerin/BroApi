const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req,res) => {
   // validate before register
   const error = registerValidation(req.body)
   if(error) return res.status(400).send(error.details)

   // check if email exists
   const existsEmail = await User.findOne({email: req.body.email})
   if(existsEmail) return res.status(400).send('Username or email already exists')

   // check if username exists
   const existsUser = await User.findOne({username: req.body.username})
   if(existsUser) return res.status(400).send('Username or email already exists')

   // hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt)

   // create user
   const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
   });
   try {
      const savedUser = await user.save();
      res.status(200).send({user: user._id});
   } catch (err) {
      res.status(400).send(err);
   }
});

router.post('/login', async (req,res) => {
   // validate before register
   const error = loginValidation(req.body);
   if(error) return res.status(400).send(error.details);

   // fetch user by username
   const user = await User.findOne({email: req.body.email});

   // check if username exists
   if(!user) return res.status(400).send('Username or password is wrong');

   //check if password is correct
   const validPass = await bcrypt.compare(req.body.password, user.password);
   if(!validPass) return res.status(400).send('Username or password is wrong');

   res.status(200).send({user: user._id})
})

module.exports = router;