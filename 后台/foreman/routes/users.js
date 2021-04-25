var express = require('express');
var router = express.Router();
const user = require('../dao/user_dao')
const multer = require('multer')
let upload = multer({dest:'public/images/userinfo/'}).single('file')
let fs = require('fs')


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
//业主完善个人信息接口
router.post('/perfectInfo',function (req,res){
  user.perfect(req,res)
})
//业主招标管理接口
router.get('/meang',function (req,res){
  user.meang(req,res)
})
//用户头像上传接口
router.post('/img',upload,function (req,res){
  user.upimg(req,res)
})
//业主删除需求接口
router.delete('/deledemand',function (req,res){
  user.deledemand(req,res)
})
//业主修改密码接口
router.post('/updatapwd',function (req,res){
  user.updatapwd(req,res)
})
//用户修改招标需求接口
router.post('/modifyde',function (req,res){
  user.modifyde(req,res)
})
//获取用户头像接口
router.get('/getImg',function (req,res){
  let img = req.query.img
  let path = `public/images/userinfo/${img}`
  const data = fs.readFile(path,function (err,data){
    if(err){
      res.send('读取错误')
    }else{
      res.send(data)
    }
  })
})
//获取投标信息接口
router.get('/getstenderlist',function (req,res){
  user.getstenderlist(req,res)
})
module.exports = router;
