var express = require('express');
var router = express.Router();
const user = require('../dao/user_dao')

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.Login(req,res)
});
router.post('/login',function (req,res){
  // res.send(req.body)
  user.Login(req,res)
})


module.exports = router;
