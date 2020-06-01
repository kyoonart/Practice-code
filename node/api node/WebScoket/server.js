const WebScoket = require('ws');
const ws = new WebScoket.Server({ port: 8000 }, () => {
    console.log('socket start');
})
ws.on('connection', (client) => {
    client.send('Welcome to  here');
    client.on('message', (msg) => {
        console.log('来自前端的数据:' + msg);
    });
    client.on('close', (msg) => {
        console.log('前端断开连接');
    });

})