const http = require('http');
const url = require('url')
const app = http.createServer();
app.on('request', (req, res) => {
    // console.log(req.method); 请求方式
    res.writeHead(200, {
        'content-type': 'text/html;chartset=utf8'
    })
    const { query, pathname } = url.parse(req.url, true)
    console.log(query.name);
    console.log(query.age);
    if (pathname == '/index' || pathname == '/') {
        res.end('<p2></p2>Welcome to  IndexPage</p2>')
    } else if (pathname == '/list') {
        res.end('Welcome to  ListPage')
    } else {
        res.end("not Found")
    }
});
app.listen('3000');
console.log('网站服务器启动成功')