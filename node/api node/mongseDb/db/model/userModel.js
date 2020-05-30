const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    us: { type: String, require: true },
    ps: { type: String, require: true },
    age: Number,
    sex: { type: Number, defaule: 0 }
});
const User = mongoose.model('users', userSchema);
module.exports = User