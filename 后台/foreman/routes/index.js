var express = require('express');
var router = express.Router();
const index= require('../dao/index_dao')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bidlist',function (req,res){
  index.bidlist(req,res)
})

module.exports = router;
