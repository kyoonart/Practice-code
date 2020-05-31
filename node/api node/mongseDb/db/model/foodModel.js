const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    desc: { type: String, require: true },
    type: { type: String, require: true },
    typeId: { type: Number, require: true },
    imgUrl: { type: String, require: true }
});
const Food = mongoose.model('foods', foodSchema);
module.exports = Food