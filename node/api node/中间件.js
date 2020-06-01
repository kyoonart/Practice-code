const express = require('express');
var bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 
// parse application/json
// app.use(bodyParser.json())
// express实例化
// 最简单的api接口
// 全局中间件 
app.use('/', (req, res, next) => {
    let { token } = req.query
    if (token) {
        next()
    } else {
        res.send('缺少token')
    }
})

app.get('/test1', (req, res) => {
    // console.log('hello');
    // res.send('注册ok');
    // console.log(23);
    res.send({ code: 200, msg: 'everything is ok', data: 'okoko' });
    // console.log(req.query);


})
app.get('/test2', (req, res) => {
    // console.log(req.body);
    // let { us, ps } = req.body;
    res.send({ code: 200, msg: 'everything' })
        // if (us === "zhangsan" && ps === 233) {
        //     res.send({ code: 200, msg: 'ok' })
        // } else {
        //     res.send({ code: 400, msg: 'error' })
        // }
});
// 局部中间件
// app.get('/pathname', func1, func2......) 这个其实可以写很多个局部中间件 只要有next就能往下执行
app.get('/test3', (req, res, next) => {
    console.log('fun1');
    next();

}, (req, res) => {
    console.log('fun2');
    res.send({ code: 200, msg: 'okk' })

})
app.listen(4000, () => {
    console.log('sever is runing');
})