const express = require('express');
const path = require('path');
const app = express();
// 指定静态资源目录 当访问1000端口时就定位到了静态资源目录
app.use(express.static(path.join(__dirname, './static')))
    // 可以自己写一个目录 这样就不会和路由冲突了
app.use('/public', express.static(path.join(__dirname, './static')))

app.get('/test3', (req, res, next) => {
    console.log('fun1');
    next();

}, (req, res) => {
    console.log('fun2');
    res.send({ code: 200, msg: 'okk' })

})
app.listen(1000, () => {
    console.log('运行了');

});