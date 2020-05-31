const express = require('express');
var bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse application/json
// app.use(bodyParser.json())
// express实例化
// 最简单的api接口
app.get('/user/login', (req, res) => {
    // console.log('hello');
    // res.send('注册ok');
    // console.log(23);
    res.send({ code: 200, msg: 'everything is ok', data: 'okoko' });
    console.log(req.query);


})
app.post('/user/form', (req, res) => {
    console.log(req.body);
    let { us, ps } = req.body;
    res.send({ code: 200 })
        // if (us === "zhangsan" && ps === 233) {
        //     res.send({ code: 200, msg: 'ok' })
        // } else {
        //     res.send({ code: 400, msg: 'error' })
        // }
})
app.listen(3000, () => {
    console.log('sever is runing');
})