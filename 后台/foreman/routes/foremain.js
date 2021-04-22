var express = require('express');
var router = express.Router();
const foremain = require('../dao/foremain_dao')
//工长注册接口
router.post('/foremanReg',function (req,res){
    foremain.foreman(req,res)
})
//工长登录接口
router.post('/foremanlogin',function (req,res){
    foremain.foremanlogin(req,res)
})

module.exports = router;