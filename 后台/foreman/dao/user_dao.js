const  jwtUtil = require('../utils/jwtUtils');
let fs = require('fs')

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
        let user = req.body.user
        let communityname = req.body.communityname;
        console.log(req.body)
        let result = await this.addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,user,communityname)
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

    /**
     * 完善个人信息接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async perfect(req,res){
        console.log(req.body)
        let phone = req.body.phone;
        let sex = req.body.sex
        let communityname = req.body.communityname;
        let wei = req.body.wei;
        let email = req.body.email;
        let province=req.body.province;
        let city = req.body.city;
        let area = req.body.area;
        let userid = req.body.userid;
        let result = await this.perfectInfo(phone,sex,communityname,wei,email,province,city,area,userid)
        res.send(result)
    }

    /**
     *获取该用户所有招标信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async meang(req,res){
        console.log(req.query)
        let userid = req.query.userid;
        let result = await this.management(userid)
        res.send(result)
    }

    /**
     * 用户上传头像接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async upimg(req,res){
        let userid = req.body.userid
       console.log(userid)
        if(req.file.size===0){
            res.send('error',{message:"上传文件不能为空"})
        }else{
            let file = req.file;
            console.log(file)
            fs.renameSync('public/images/userinfo/'+file.filename,'public/images/userinfo/'+file.originalname);
            res.set({
                'content-type':'application/JSON; charset=utf-8'
            })
            let imgUrl = 'http://localhost:3000/public/images/userinfo/'+file.originalname;
            let result = await this.img(imgUrl,userid)
            res.send(result)
        }
    }
    /**
     * 业主删除招标记录
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async deledemand(req,res){
         let id = req.body.id;
        console.log(req.body.id)
        let result = await  this.demand(id)
        res.send(result)
    }

    /**
     * 业主修改密码
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async updatapwd(req,res){
        let pwd = req.body.password
        let id= req.body.id
        let result = await this.updatauserpwd(pwd,id)
        res.send(result)
    }

    /**
     * 业主修改自己的招标需求接口
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async modifyde(req,res){
        let title = req.body.title;;
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
        let communityid = req.body.communityid;
        let id= req.body.id
        let result = await this.modifydemand(title,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,communityid,id)
        res.send(result)
    }

    /**
     * 获取工长投标信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getstenderlist(req,res){
        let userid = req.query.userid;
        console.log(userid)
        let result = await this.stenderlist(userid)
        res.send(result)
    }

    /**
     * 业主生成订单
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async setorder(req,res){
        let userid = req.body.userid;
        let foremanid = req.body.foremanid;
        let demandid = req.body.demandid;
        let restime = req.body.restime;
        let isres = req.body.isres
        let adder = req.body.adder
        let deark = req.body.deark
        let status = req.body.status
        let result = await this.orderlist(userid,foremanid,demandid,restime,isres,adder,deark,status)
        res.send(result)
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async editstatus(req,res){
        let id = req.query.id;
        let status = req.query.status
        let result = await this.statuschang(status,id)
        res.send(result)
    }

    /**
     * 获取工长提交的设计图
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getdesing(req,res){
        let demandid= req.query.id
        let foremanid = req.query.foremanid
        let result = await this.disnig(demandid,foremanid);
        res.send(result)

    }

    /**
     * 获取预约记录
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getreslist(req,res){
        let userid  = req.query.userid;
        let result = await this.reslist(userid)
        res.send(result)
    }
    /**
     * 业主取消预约
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async calclres(req,res){
        let orderid = req.body.orderid;
        let cancel = req.body.cancel;
        let cantime = req.body.cantime;
        let status = req.body.status
        let result = await this.clres(orderid,cancel,cantime,status)
        res.send(result)
    }

}