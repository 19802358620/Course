var express = require('express');
var router = express.Router();
const foreman = require('../dao/foremain_dao')
const multer = require('multer')
let upload = multer({dest:'public/images/foremainfo/'}).single('file')
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

module.exports = router;