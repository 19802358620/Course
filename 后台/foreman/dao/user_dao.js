// const  jwtUtil = require('../utils/jwtUtils');
// const redisUtils = require('../utils/redisUtils');
module.exports = class user_dao extends require('../model/user_mode'){
    static async Login(req,res){
        let body = req.body;
        console.log(req.body.name)
        let loginData = await this.loginUser(body.name,body.password)
        res.send(loginData)
    }
}