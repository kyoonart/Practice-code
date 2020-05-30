const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/admin', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('ok');

});
// 创建Schema对象

// 数据库的增删改查
const Schema = mongoose.Schema;
const userSchema = new Schema({
    us: { type: String, require: true },
    ps: { type: String, require: true },
    age: Number,
    sex: { type: Number, defaule: 0 }
});
const User = mongoose.model('users', userSchema);
User.insertMany({ us: 'zhangsan', ps: '233', age: 18, sex: 2 }).then((data) => {
    console.log(data);
    console.log('插入数据成功');
}).catch((err) => {
    console.log(err);
    console.log('插入数据失败');

});
// 查找
// User.find({ age: 12 }).then((data) => {
//     if (data.length) {
//         console.log(data);
//         console.log('查询成功');
//     } else {
//         console.log('数据不存在');
//     }

// }).catch((err) => {
//     console.log(err);
//     console.log('查询失败');

// });
// 删除
// User.remove().then((data) => {
//     console.log(data);
//     console.log('删除成功');

// }).catch((err) => {
//     console.log(err);
// })
// 更新
User.update({ us: 'Tobi' }).then((err, raw) => {
    if (err) {
        console.log(err);

    }
    console.log('The raw response from Mongo was ', raw);
});