const express = require('express');
const app = express();
// 引入body-parser模块 用来处理post请求参数
const bodyParser = require('body-parser');
// 引入路由模块
const path = require('path');
// 数据库连接
require('./model/connect');
//创建用户
// require('./model/user');
// 处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
// 告诉expres框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉expres框架模模板的默认后缀是什么
app.set('view engine', 'art')
    // 渲染为art后缀的文件使用的模板
app.engine('art', require('express-art-template'))

// 导入路由模板
const home = require('./router/home');
const admin = require('./router/admin');
// 為路由匹配请求规则
app.use('/home', home);
app.use('/admin', admin);
app.listen(3000)
console.log('服务器启动成功!!');