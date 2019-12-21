const http = require('http');
const app = http.createServer();
app.on('request', (req, res) => {
    res.end('<h1>hello user</h1>')
});
app.listen('3000');
console.log('网站服务器启动成功');