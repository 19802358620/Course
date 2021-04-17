var express = require('express');
var router = express.Router();
const user = require('../dao/user_dao')

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.Login(req,res)
});
//用户登录接口
router.post('/login',function (req,res){
  // res.send(req.body)
  user.Login(req,res)
})
//用户发布装修需求接口
router.post('/bidd',function (req,res){
  user.insterbid(req,res)
})
//用户注册接口
router.post('/reg',function (req,res){
  user.userreg(req,res)
})


module.exports = router;
