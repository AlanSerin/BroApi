const router = require('express').Router();
const User = require('../model/user');

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    let x = JSON.stringify(user)
    res.status(200).send(x)
})

module.exports = router;