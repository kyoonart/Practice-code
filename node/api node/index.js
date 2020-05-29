const express = require('express');
const app = express();
// express实例化
// 最简单的api接口
app.get('/user/login', (req, res) => {
    // console.log('hello');
    // res.send('注册ok');
    // console.log(23);
    res.send({ code: 200, msg: 'everything is ok', data: 'okoko' });
    console.log(req.query);


})
app.listen(3000, () => {
    console.log('sever is runing');
})