const  jwtUtil = require('../utils/jwtUtils');
 // const redisUtils = require('../utils/redisUtils');
module.exports = class user_dao extends require('../model/user_mode'){
    /**
     * 业主登录接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     * @constructor
     */
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

    /**
     * 业主发布装修需求接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async insterbid(req,res){
        let title = req.body.title;
        let titme = req.body.titme;
        let status = req.body.status;
        let contract = req.body.contract;
        let type = req.body.type;
        let space = req.body.space;
        let statusquo = req.body.statusquo;
        let area = req.body.area;
        let structure= req.body.structure;
        let style = req.body.style;
        let budget = req.body.budget;
        let suoarea = req.body.suoarea;
        let ltitme = req.body.ltitme;
        let dotime = req.body.dotime;
        let remarks = req.body.remarks;
        let content = req.body.content;
        let claim = req.body.claim;
        let userid = req.body.userid;
        let communityid = req.body.communityid;
        let result = await this.addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,communityid)
        res.send(result)
    }

    /**
     * 业主注册接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async userreg(req,res){
        console.log(req)
        let name = req.body.name;
        let password = req.body.password;
        let result = await this.userReg(name,password);
        res.send(result)
    }
}