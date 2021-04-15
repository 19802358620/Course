const  jwtUtil = require('../utils/jwtUtils');
 // const redisUtils = require('../utils/redisUtils');
module.exports = class user_dao extends require('../model/user_mode'){
    static async Login(req,res){
        let body = req.body;
        let loginData = await this.loginUser(body.name,body.password)
        res.send(loginData)
        // if(loginData.length!=0){
        //     let jwt_token = jwtUtil.sign({
        //         id:loginData[0].id,
        //         name:loginData[0].name,
        //         password:loginData[0].password,
        //         adder:loginData[0].adder,
        //         phone:loginData[0].phone,
        //         header:loginData[0].header,
        //         token:loginData[0].token,
        //         modftime:loginData[0].modftime,
        //         email:loginData[0].email,
        //         wei:loginData[0].wei,
        //         sex:loginData[0].sex,
        //         communityid:loginData[0].communityid
        //     },global.globalkey,3600)
        //     res.send({loginData,jwt_token})
        // }else{
        //     res.status(500).send('用户名或者账号输入错误')
        // }
    }
}