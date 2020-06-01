const express = require('express');
let router = express.Router();
router.get('/add', (req, res) => {
    res.send({ code: 200, msg: 'hello' })
})
router.get('/del', (req, res) => {
    res.send({ code: 200, msg: 'del' })
})
module.exports = router