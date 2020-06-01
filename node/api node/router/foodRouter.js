const express = require('express');
let router = express.Router();
router.get('/apple', (req, res) => {
    res.send({ code: 200, msg: 'apple' })
})
router.get('/balala', (req, res) => {
    res.send({ code: 200, msg: 'balala' })
})
module.exports = router