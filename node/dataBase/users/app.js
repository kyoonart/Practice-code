const http = require('http');
// 创建服务器
const mongoose = require('mongoose');
const url = require('url')
    // 连接数据库 默认端口 27017
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('连接成功');

    }).catch(() => {
        console.log('连接失败');

    })
    // 创建用户集合规则
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        age: {
            type: Number,
            min: 18,
            max: 80
        },
        password: String,
        email: String,
        hobbies: [String]
    })
    // 创建集合
const User = mongoose.model('User', userSchema)
User.insertMany([{
    "name": "王五",
    "age": "20",
    "password": "15709255483",
    "email": "1564328788@qq.com",
    "hobbies": "play games"
}, {
    "name": "lisi",
    "age": "30",
    "password": "15709755483",
    "email": "15643218788@qq.com",
    "hobbies": "play- games"
}, {
    "name": "zhangsan",
    "age": "20",
    "password": "15709255483",
    "email": "1564328788@qq.com",
    "hobbies": "play code"
}, {
    "name": "张喜讯",
    "age": "25",
    "password": "1570921155483",
    "email": "1564328788@qfq.com",
    "hobbies": "睡觉"
}, {
    "name": "李松",
    "age": "40",
    "password": "1510026262",
    "email": "1564328788@qq.com",
    "hobbies": "javascript"
}])

const app = http.createServer()
    // 添加事件
app.on('request', async(req, res) => {
        //请求方式
        const method = req.method;
        // 请求地址
        const { pathname } = url.parse(req.url);
        if (method === "GET") {
            if (pathname == '/list') {
                let users = await User.find()
                    // console.log(users);

                let list = `<!DOCTYPE html>
                                      <html lang="en">

                                  <head>
                                      <meta charset="UTF-8">
                                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                      <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
                                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

                                      <title>Document</title>
                                  </head>
                                  <div class="container">
                                      <h6>
                                          <a href="add.html" class="btn btn-primary">添加用户</a>
                                      </h6>
                                      <table class="table table-striped table-bordered">
                                      <tr>
                                      <td>用户名</td>
                                      <td>年龄</td>
                                      <td>爱好</td>
                                      <td>邮箱</td>
                                      <td>操作</td>
                                  </tr>`;
                users.forEach(item => {
                    list += ` <tr>
                                    <td>${item.name}</td>
                                    <td>${item.age}</td>
                                    <td>
                                        <span>抽烟</span>
                                        <span>喝酒</span>
                                        <span>烫头</span></td>
                                    <td>${item.email}</td>
                                    <td>
                                <a href="" class="btn btn-danger btn-xs">删除</a>
                                <a href="" class="btn btn-success btn-xs">添加 </a>
                            </td>`
                })
                list += `  
                        </tr>
                    </table>
                </div>

                <body>

                </body>

                </html>`;
                res.end(list)

            }
        } else if (method === "POST") {

        }


    })
    // 监听端口

app.listen(3000)
console.log('服务器已启动');