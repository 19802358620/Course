const Token = require('../utils/token');
const exportObj={
    verifyToken
};
module.exports = exportObj;
//验证token中间件
function verifyToken(req,res,next){
    if(req.path ==='/login')return next();
    let token = req.headers.token;
    let tokenVerifyObj = Token.decrypt(token);
    if(tokenVerifyObj.token){
        next()
    }else{
        console.log(1111)
    }
}