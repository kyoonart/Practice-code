const express = require('express')
const bodyParser = require('body-parser')
const app = express()
    // extended: false 方法内部使用querystring模块处理请求参数的格式
    // extended: 投入true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/add', (req, res) => {
    res.send(req.body)
})
app.listen(80);
console.log('网站服务器启动成功');