module.exports = class foreman_dao extends require('../model/foremain_mode'){
    /**
     * 工会注册接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async foreman(req,res){
        let name = req.body.name;
        let pwd = req.body.pass;
        let createtime = req.body.createtime
        console.log(req.body)
        let result = await this.foremanReg(name,pwd,createtime)
        res.send(result)
    }

    /**
     * 工会登录接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async foremanlogin(req,res){
        let name = req.body.name;
        let pwd = req.body.password;

        let result = await this.foremanLogin(name,pwd)
        res.send(result)
    }

    /**
     * 工长完善信息接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async foremaninfo(req,res){
        let phone = req.body.phone;
        let sex = req.body.sex;
        let adder = req.body.adder;
        let wei = req.body.wei;
        let email = req.body.email;
        let experience = req.body.experience;
        let servicearea = req.body.servicearea;
        let style = req.body.style;
        let Introduction = req.body.Introduction;
        let foremanid= req.body.id
        let result = await this.foremanInfo(phone,sex,adder,email,experience,servicearea,style,Introduction,wei,foremanid)
        res.send(result)
    }
}