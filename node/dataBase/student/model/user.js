const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
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
        sex: String,
        email: String,
        hobbies: [String],
        collage: String,
        enterDate: {
            type: Date,
            default: Date.now
        }
    })
    // 创建学生信息集合

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;