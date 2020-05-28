const express = require('express');
const app = express();
// express实例化
// 最简单的api接口
app.get('/user/login', (req, res) => {
    console.log('hello');
    res.send('注册ok');
})
app.listen(3000, () => {
    console.log('sever is runing');
})