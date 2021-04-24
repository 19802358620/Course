var express = require('express');
var router = express.Router();
const foreman = require('../dao/foremain_dao')
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
module.exports = router;