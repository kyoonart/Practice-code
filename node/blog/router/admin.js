const express = require('express');
const admin = express.Router();
// 导入user集合 查询邮箱
const { User } = require('../model.user')
admin.get('/login', (req, res) => {
    res.render('admin/login')
});
admin.post('/login', async(req, res) => {
    const { email, password } = req.body;
    if (email.trim().length === 0 || password.trim().length === 0)
        return res.status(400).render('admin/error', { msg: "输入错误" });
    //   根据邮箱查询用户
    let user = await User.findOne({ email })
    if (user) {
        if (password === user.password) {
            res.send('登陆成功')
        } else {
            return res.status(400).render('admin/error', { msg: "错误了" })
        }
    } else {
        return res.status(400).render('admin/error', { msg: "错误了" })
    }

});
admin.get('/user', (req, res) => {
    res.render('admin/user')
});
module.exports = admin;