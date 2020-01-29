const http = require('http')
const app = http.createServer()
app.on('request', (req, res) => {
    res.end('ok')
})
app.listen(3000)