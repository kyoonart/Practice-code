const express = require('express');
const db = require('./db/connect');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const FoodRouter = require('./router/foodRouter');
const UserRouter = require('./router/userRouter');
// 指定静态资源目录 当访问1000端口时就定位到了静态资源目录
// 可以自己写一个目录 这样就不会和路由冲突了
app.use('/public', express.static(path.join(__dirname, './static')))
const Mail = require('./utils/mail')
console.log(Mail);
// 保存验证码以及邮箱  用内存来保存
let codes = {}
app.use('/user', UserRouter);
app.use('/food', FoodRouter);
app.post('/getMailCode', (req, res) => {
    let { mail } = req.body;
    let code = parseInt(Math.random() * 100000)
    Mail.send(mail, code).then(() => {
        codes[mail] = code;
        console.log(codes);
        res.send({ code: 200, msg: '验证码发送成功' })
    }).catch((err) => {
        res.send({ code: 400, msg: '验证码发送失败' })
    })
})
app.listen(3000, () => {
    console.log('server is runing at http://localhost:3000');
})