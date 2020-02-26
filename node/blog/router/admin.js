const express = require('express');
const admin = express.Router();
admin.get('/login', (req, res) => {
    res.render('admin/login')
});
admin.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email.trim().length === 0 || password.trim().length === 0)
        return res.status(400).render('admin/error', { msg: "输入错误" })
});
admin.get('/user', (req, res) => {
    res.render('admin/user')
});
module.exports = admin;