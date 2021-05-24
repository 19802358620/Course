const jwt  = require('jsonwebtoken');
const tokenKey = 'jcj123456';
const Token= {
    /**
     * token加密方法
     * @param data 需要加密的数据
     * @param time 过期时间
     */
    encrypt:function (data,time){
        return jwt.sign(data,tokenKey,{expiresIn: time})
    },
    decrypt:function (token){
        try{
            let data  = jwt.verify(token,tokenKey);
            return {
                token:true,
                data:data,
            };
        }catch (e){
            return {
                token: false,
                data:e
            }
        }
    }
}
module.exports = Token
