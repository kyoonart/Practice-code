const express = require('express')
const router = express.Router()
const Food = require('../db/model/foodModel');
/**
 * @api {get} /food/add 添加商品
 * @apiName addFood
 * @apiGroup Food
 *
 * @apiParam {String} name 用户名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} type 类型
 * @apiParam {String} typeId 类型id
 * @apiParam {String} img  图片地址
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// const foodSchema = new Schema({
//     name: { type: String, require: true },
//     price: { type: String, require: true },
//     desc: { type: String, require: true },
//     type: { type: String, require: true },
//     typeId: { type: Number, require: true }
//     imgUrl: { type: String, require: true }
// });
router.post('/add', (req, res) => {

})

module.exports = router ;  