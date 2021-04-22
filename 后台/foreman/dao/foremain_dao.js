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
        console.log(req.body)
        let result = await this.foremanReg(name,pwd)
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
}