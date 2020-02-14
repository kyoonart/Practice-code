const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("{ name: 'zhansgan', age: 18 }")
})
app.listen(80);
console.log('网站服务器启动成功');