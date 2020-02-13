// 向数据库添加数据
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
    // 创建集合规则
const courseSchema = new mongoose.Schema({
        name: String,
        auther: String,
        isPublished: Boolean
    })
    // 使用规则创建集合
const Course = mongoose.model('Course', courseSchema)
    // 插入数据
Course.create({
    name: 'javaScript',
    auther: 'C.zakes',
    isPublished: true
}, (err, doc) => {
    console.log(err);
    console.log(doc);

})

// course.save()