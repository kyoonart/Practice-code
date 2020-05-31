const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
router.post('/reg', (req, res) => {
    let { us, ps, code } = req.body;
    if (!us || !ps || !code) {
        res.send({ code: 400, msg: '参数错误' })
    } else {
        if (codes[us] != code) {
            return res.send({ code: 200, msg: "验证码错误" })
        }
        User.find({ us }).then((data) => {
                if (data.length === 0) {
                    return User.insertMany({ us, ps })
                } else {
                    res.send({ code: 400, msg: '用户名已存在' })
                }
            })
            .then(() => {
                res.send({ code: 200, msg: '注册成功' })
            }).catch((err) => {
                res.send({ code: 400, msg: '注册失败' })
                console.log(err);

            });
        // User.remove()
        // User.remove().then((data) => {
        //         console.log(data);
        //         console.log('删除成功');
        //     }).catch((err) => {
        //         console.log(err);
        //     })
        // res.send({ code: 200, msg: 'ok' })
    }
});
router.post('/login', (req, res) => {
    let { us, ps, code } = req.body;
    if (!us || !ps) {
        res.send({ code: 400, msg: '参数错误' })
    } else {
        User.find({ us, ps }).then((data) => {
            if (data.length) {
                res.send({ code: 200, msg: "登陆成功" })
            } else {
                res.send({ code: 400, msg: "登陆失败：用户名或密码不正确" })
            }
        })
    }

})
module.exports = router ;  