var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foremanRouter = require('./routes/foremain');

var app = express();
/**
 * 全系统允许跨域处理 这段配置要再new出express实例的时候就要设置了，放在所有的api前面，不然没有效果
 */
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "*");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// const jwtUtil=require('./utils/jwtUtils')
global.globalKey="123456";
// app.use(async function (req,res,next){
//   let path = req.path;
//   let token = "";
//   if(req.body.token){
//     token = req.body.token
//   }else{
//     token = req.query.token
//   }
//   console.log("------------------------")
//   if(path.startsWith('/users')){
//     if(path.startsWith("/users/login")){
//       next()
//       return
//     }
//     console.log('拦截users')
//     let result = await jwtUtil.verifysync(token,globalKey)
//     if(result.err){
//
//     }
//
//   }
//
// })
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foreman',foremanRouter);
app.get('/getimg',function (req,res){
  let img = req.query.img
  let name = req.query.name
  let path = `public/images/${name}/${img}`
  const data = fs.readFile(path,function (err,data){
    if(err){
      res.send('读取错误')
    }else{
      res.send(data)
    }
  })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
