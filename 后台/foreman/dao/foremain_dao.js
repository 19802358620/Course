let fs = require('fs')
module.exports = class foreman_dao extends require('../model/foremain_mode'){
    /**
     * 工长注册接口
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
        let name = req.body.name
        let phone = req.body.phone;
        let sex = req.body.sex;
        let wei = req.body.wei;
        let email = req.body.email;
        let experience = req.body.experience;
        let servicearea = req.body.servicearea;
        let style = req.body.style;
        let Introduction = req.body.Introduction;
        let province = req.body.province;
        let city = req.body.city;
        let area = req.body.area;
        let age = req.body.age
        let foremanid= req.body.id
        let result = await this.foremanInfo(phone,sex,email,experience,servicearea,style,Introduction,wei,province,city,area,age,name,foremanid)
        res.send(result)
    }

    /**
     * 工长投标接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async tender(req,res){
        let foremanid = req.body.foremanid;
        let userid = req.body.userid;
        let ltime = req.body.ltime;
        let price = req.body.price;
        let content = req.body.content;
        let demandid = req.body.demandid
        let result = await  this.foremantender(foremanid,userid,ltime,price,content,demandid)
        res.send(result)
    }

    /**
     * 工长上传头像接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async foremanimg(req,res){
        let foremanid = req.body.foremanid
        console.log(foremanid)
        if(req.file.size===0){
            res.send('error',{message:"上传文件不能为空"})
        }else{
            let file = req.file;
            console.log(file)
            fs.renameSync('public/images/foremainfo/'+file.filename,'public/images/foremainfo/'+file.originalname);
            res.set({
                'content-type':'application/JSON; charset=utf-8'
            })
            let imgUrl = 'http://localhost:3000/public/images/foremainfo/'+file.originalname;
            let result = await this.upimg(imgUrl,foremanid)
            res.send(result)
        }
    }
}