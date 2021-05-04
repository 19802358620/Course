var express = require('express');
var router = express.Router();
const foreman = require('../dao/foremain_dao')
const multer = require('multer')
let upload = multer({dest:'public/images/foremainfo/'}).single('file')
let caseimg = multer({dest:'public/images/caseimg/'}).single('file')
let caseimgs = multer({dest:'public/images/caseimgs/'}).array('file',5)
let huxing = multer({dest:'public/images/huxing/'}).array('file',5)
let design = multer({dest:'public/images/designimg/'}).array('file',5)
let demand = multer({dest:'public/images/demandimg/'}).array('file',5)
let fs = require('fs')
//工长注册接口
router.post('/foremanReg',function (req,res){
    foreman.foreman(req,res)
})
//工长登录接口
router.post('/foremanlogin',function (req,res){
    foreman.foremanlogin(req,res)
})
//工长完善资料接口
router.post('/foremaninfo',function (req,res){
    foreman.foremaninfo(req,res)
})
//工长投标接口
router.post('/tender',function (req,res) {
    foreman.tender(req,res)
})
//工长上传头像
router.post('/foremanimg',upload,function (req,res){
    foreman.foremanimg(req,res)
})
//获取头像接口
router.get('/getforamnimg',function (req,res){
    let img = req.query.img
    let path = `public/images/foremainfo/${img}`
    const data = fs.readFile(path,function (err,data){
        if(err){
            res.send('读取错误')
        }else{
            res.send(data)
        }
    })
})
//工长上传案例封面图片
router.post('/caseimg',caseimg,function (req,res){
    foreman.upcaseimg(req,res)
})
//批量上传图片
router.post('/caseimgs',caseimgs,function (req,res){
    foreman.upcaseimgs(req,res)
})
//新增案例
router.post('/setcase',function (req,res){
    foreman.setcase(req,res)
})
//获取工长的案例列表
router.get('/getcaselist',function (req,res){
    foreman.getcaselist(req,res)
})
//工长删除案例
router.delete('/deletecase',function (req,res){
    foreman.deletecase(req,res)
})
//工长获取投标记录
router.get('/stenderinfo',function (req,res){
    foreman.stenderinfo(req,res)
})
//工长投标上传设计方案图片
router.post('/updesign',design,function (req,res){
    foreman.updesignimgs(req,res)
})
//发布招标需求时上传户型图
router.post('/adddemandimg',demand,function (req,res){
    foreman.adddemandimg(req,res)
})
//工长获取自己的预约信息
router.get('/getreserlist',function (req,res){
    foreman.getreserlist(req,res)
})
//工长同意预约
router.post('/setresinfo',function (req,res){
    foreman.setresinfo(req,res)
})
//工长获取订单信息
router.get('/getforemanorder',function (req,res){
    foreman.getforemanorder(req,res)
})
//工长进入阶段
router.post('/foremanstage',function (req,res){
    foreman.foremanstage(req,res)
})
//工长获拆改阶段的图片
// router.get('/getdismanimg',function (req,res){
//
// })






module.exports = router;