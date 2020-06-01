const express = require('express')
const router = express.Router()
const Foodmodel = require('../db/model/foodModel');
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
    Foodmodel.insertMany({ name, price, desc, type, typeId, imgUrl }).then((data) => {
        res.send({ code: 200, msg: "添加成功" })
    }).catch(() => {
        res.send({ code: 400, msg: "添加失败" })
    })
});
/**
 * @api {get} /food/getInfoByType 分类查询
 * @apiName getInfoByType
 * @apiGroup Food
 *
 * @apiParam {Number} typeid 类型id
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByType', (req, res) => {
    let { typeId } = req.body;
    Foodmodel.find({ typeId }).then((data) => {
        // console.log(data)
        res.send({ code: 200, msg: "查询成功", data });
    }).catch(() => {
        res.send({ code: 400, msg: "查询失败" })
    })
});
/**
 * @api {get} /food/getInfoByKw 关键字查询
 * @apiName getInfoByKw
 * @apiGroup Food
 *
 * @apiParam {String} Kw 关键字
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 关键字查询
router.post('/getInfoByKw', (req, res) => {
    let { kw } = req.body;
    let reg = new RegExp(kw);
    Foodmodel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] }).then((data) => {
        res.send({ code: 200, msg: "查询成功", data });
    }).catch((err) => {
        res.send({ code: 400, msg: "查询失败" });
    })
});
/**
 * @api {get} /food/delete 根据id删除商品
 * @apiName delete
 * @apiGroup Food
 *
 * @apiParam {String} _id  商品id
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 删除操作
router.post('/delete', (req, res) => {
    let { _id } = req.body;
    Foodmodel.remove({ _id }).then(() => {
        res.send({ code: 200, msg: "删除成功" })
    }).catch(() => {
        res.send({ code: 400, msg: "删除失败" })
    })
});
/**
 * @api {get} /food/update 更新商品信息
 * @apiName update
 * @apiGroup Food
 *
 * @apiParam {String} name 用户名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} type 类型
 * @apiParam {String} typeId 类型id
 * @apiParam {String} img  图片地址
 * @apiParam {String} _id  商品id
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 修改操作
router.post('/update', (req, res) => {
    let { _id, name, price, desc, type, typeId, imgUrl } = req.body;
    Foodmodel.update({ _id }, { name, price, desc, type, typeId, imgUrl }).then(() => {
        res.send({ code: 200, msg: "修改成功" })
    }).catch(() => {
        res.send({ code: 400, msg: "修改失败" })
    })
});
/**
 * @api {get} /food/getInfoBypage 分页查询
 * @apiName getInfoBypage
 * @apiGroup Food
 *
 * @apiParam {Number} pageSize 每页的条数
 * @apiParam {Number} page  当前页
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 分页查询
router.post('/getInfoBypage', (req, res) => {
    let pageSize = req.body.pageSize || 5; // 默认值
    let page = req.body.page || 1;
    Foodmodel.find().limit(Number(pageSize)).skip(Number((page - 1) * pageSize))
        .then((data) => {
            res.send({ code: 200, msg: '查询成功', data, total: data.length })
        }).catch(() => {
            res.send({ code: 400, msg: "查询失败" })
        })

})
module.exports = router ;  