var express = require('express');
var router = express.Router();
const user = require('../dao/user_dao')
const multer = require('multer')
let upload = multer({dest:'public/images/userinfo/'}).single('file');
let resimg = multer({dest:'public/images/resimg/'}).array('file',6);
let dismanimg = multer({dest:'public/images/dismanimg/'}).array('file',6);
let hydimg = multer({dest:'public/images/hydimg/'}).array('file',6);
let woodimg = multer({dest:'public/images/woodimg/'}).array('file',6);
let paintimg = multer({dest:'public/images/paintimg/'}).array('file',6);
let acceptimg = multer({dest:'public/images/acceptimg/'}).array('file',6);
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
//业主预约工长
router.post('/setorder',function (req,res){
  user.setorder(req,res)
})
//修改工长的投标状态
router.get('/editstatus',function (req,res){
  user.editstatus(req,res)
})
//获取工长提交的设计图
router.get('/getdesing',function (req,res){
  user.getdesing(req,res)
})
//获取我的预约信息
router.get('/getreslist',function (req,res){
  user.getreslist(req,res)
})
//业主取消预约接口
router.post('/calclres',function (req,res){
  user.calclres(req,res)
})
//业主上传预约图片
router.post('/setresimg',resimg,function (req,res){
  user.setresimg(req,res)
})
//获取预约记录图片
router.get('/getresimg',function (req,res){
  user.getresimg(req,res)
})
//生成订单
router.get('/setuserorder',function (req,res){
  user.setuserorder(req,res)
})
//工长上传拆改图片
router.post('/setdismaning',dismanimg,function (req,res){
  user.setresimg(req,res)
})
//业主获取订单记录
router.get('/userorderlist',function (req,res){
  user.userorderlist(req,res)
})
//工长上传水电图片
router.post('/sethydimg',hydimg,function (req,res){
  user.setresimg(req,res)
})
//工长上传木工图片
router.post('/setwoodimg',woodimg,function (req,res){
  user.setresimg(req,res)
})
//工长上传漆工图片
router.post('/setpaintimg',paintimg,function (req,res){
  user.setresimg(req,res)
})
//工长上传验收图片
router.post('/setaccrptimg',acceptimg,function (req,res){
  user.setresimg(req,res)
})
module.exports = router;
