// 连数据库

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库创建成功');

    })
    .catch(err => {
        console.log('数据库连接失败');

    })