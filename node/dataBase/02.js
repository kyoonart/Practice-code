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
const course = new Course({
    name: 'zhangsan',
    auther: '黑马讲师',
    isPublished: true
});
course.save()