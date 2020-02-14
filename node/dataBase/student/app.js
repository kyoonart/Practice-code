const http = require('http');
// 引入连接数据库模板
require('./model/connet');
// 引入创建学生表
const Student = require('./model/user')
    // 引入路由模板
const getrouter = require('router')
    // 引入模板引擎
const template = require('art-template')
    // 引入静态资源访问模块
const serverStatic = require('serve-static')
    // path
const path = require('path')
    // 获取路由对象
const router = getrouter()
const dateformat = require('dateformat')
    // querysrting
const querystring = require('querystring')
    // 配置模板根目录
template.defaults.root = path.join(__dirname, 'views')
template.defaults.imports.dateformat = dateformat
    // 实现静态资源访问服务
const server = serverStatic(path.join(__dirname, 'public'))

// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html)
});
//呈现学生信息页面
router.get('/list', async(req, res) => {
    let students = await Student.find();
    let list = template('list.art', {
        students: students
    });
    res.end(list);

});
router.post('/add', (req, res) => {
    // 接受post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param
    })
    req.on('end', async() => {
        await Student.create(querystring.parse(formData))
    });
    res.writeHead(301, { "Location": '/list' });
    res.end()
})
const app = http.createServer();

app.on('request', (req, res) => {
    router(req, res, () => {
        console.log('success');

    });
    server(req, res, () => {
        console.log('success');

    })
});
app.listen(80);
console.log('服务器启动成功');