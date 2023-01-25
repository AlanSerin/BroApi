const router = require('express').Router();
const Dieting = require('../model/dieting');

router.get('/:id', async (req, res) => {
    const dieting = await Dieting.find({username: req.params.id})
    let x = JSON.stringify(dieting)
    res.status(200).send(x)
})

module.exports = router;