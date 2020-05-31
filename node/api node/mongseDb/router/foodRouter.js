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
router.post('/add', (req, res) => {
    let { name, price, desc, type, typeId, imgUrl } = req.body;
    Food.insertMany({ name, price, desc, type, typeId, imgUrl }).then((data) => {
        res.send({ code: 200, msg: "添加成功" })
    }).catch(() => {
        res.send({ code: 400, msg: "添加失败" })
    })
})

module.exports = router ;  