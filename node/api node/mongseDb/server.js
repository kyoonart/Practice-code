const express = require('express');
const db = require('./db/connect');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const UserRouter = require('./router/userRouter');
const Mail = require('./utils/mail')
console.log(Mail);
// 保存验证码以及邮箱  用内存来保存
let codes = {}
app.use('/user', UserRouter)
app.post('/getMailCode', (req, res) => {
    let { mail } = req.body;
    let code = parseInt(Math.random() * 100000)
    Mail.send(mail, code).then(() => {
        res.send({ code: 200, msg: '验证码发送成功' })
    }).catch((err) => {
        res.send({ code: 400, msg: '验证码发送失败' })
    })
})
app.listen(3000, () => {
    console.log('server is runing at http://localhost:3000');
})