var express = require('express');
var router = express.Router();
const foreman = require('../dao/foremain_dao')
const multer = require('multer')
let upload = multer({dest:'public/images/foremainfo/'}).single('file')
let caseimg = multer({dest:'public/images/caseimg/'}).single('file')
let caseimgs = multer({dest:'public/images/caseimgs/'}).array('file',5)
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
//工长上传案例图片
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

module.exports = router;