let fs = require('fs')
let jwt = require('jsonwebtoken')


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
        console.log(loginData)
        if(loginData.length!=0){
            let jwt_token = jwt.sign({
                name:loginData[0].name
            },'123456',{
                expiresIn: '7d'
            })
            res.send({loginData,jwt_token})
        }else{
            res.status(500).send('用户名或者账号输入错误')
        }
    }
    /**
     * 获取用户信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async userlist(req,res){
        let body = req.body;
        let loginData = await this.loginUser(body.name,body.password)
        res.send(loginData)
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
        let ltitme = req.body.ltitme;
        let dotime = req.body.dotime;
        let remarks = req.body.remarks;
        let content = req.body.content;
        let claim = req.body.claim;
        let userid = req.body.userid;
        let user = req.body.user
        let communityname = req.body.communityname;
        let province = req.body.province;
        let city = req.body.city
        let adder = req.body.adder;

        console.log(req.body)
        let result = await this.addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,ltitme,dotime,remarks,content,claim,userid,user,communityname,province,city,adder)
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
        let password = req.body.pass;
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
        let demandid = req.query.demandid;
        console.log(userid)
        let result = await this.stenderlist(userid,demandid)
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
     *修改投标状态
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
     *在项目中获取预约记录
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getreslist(req,res){
        let userid  = req.query.userid;
        let demandid = req.query.demandid
        let result = await this.reslist(userid,demandid)
        res.send(result)
    }

    /**
     * 业主获取所有的预约信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async resforeman(req,res){
        let userid  = req.query.userid;
        let result = await this.resforemanlist(userid)
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

    /**
     * 业主上传预约图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async setresimg(req,res){
        let userid = req.body.userid;
        let foremanid = req.body.foremanid;
        let demandid = req.body.demandid
        let resimg = req.body.resimg;
        let dismanimg = req.body.dismanimg;
        let hydimg = req.body.hydimg;
        let woodimg = req.body.woodimg;
        let paintimg = req.body.paintimg;
        let acceptimg = req.body.acceptimg;
        let huximg = req.body.huximg
        let designimg = req.body.designimg
        let title = req.body.title
        if(req.files.length===0){
            res.send('error',{message:'上传文件不能为空'})
        }else{
            let sql = `insert into imglist (userid,foremanid,demandid,resimg,dismanimg,hydimg,woodimg,paintimg,acceptimg,huximg,designimg,url) values `;
            let sqlArr = [];
            for(let i in req.files){
                res.set({
                    'content-type':'application/json; charset=utf8'
                });
                let file = req.files[i];
                fs.renameSync(`public/images/${title}/`+file.filename,`public/images/${title}/`+file.originalname);
                let url = `http://localhost:3000/public/images/${title}/`+file.originalname;
                if(req.files.length-1==i){
                    sql+=`(${userid},${foremanid},${demandid},${resimg},${dismanimg},${hydimg},${woodimg},${paintimg},${acceptimg},${huximg},${designimg},?)`
                }else{
                    sql+=`(${userid},${foremanid},${demandid},${resimg},${dismanimg},${hydimg},${woodimg},${paintimg},${acceptimg},${huximg},${designimg},?)`
                }
                console.log(sql)
                sqlArr.push([url])
                console.log(sqlArr)
                let result = await  this.moreimglist( sql,sqlArr)
                res.send(result)
            }
        }


    }

    /**
     * 获取业主上传的预约记录图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getresimg(req,res) {
        let userid = req.query.userid;
        let typeimg = req.query.typeimg;
        let demandid = req.query.demandid
        console.log(typeimg)
        if(typeimg==1){//预约
            let result1 = await this.resimg(userid,demandid);
            res.send(result1)
        }else if(typeimg==2){//拆改
            let result2 = await this.dismanimg(userid,demandid)
            res.send(result2)
        }else if(typeimg==3){//水电
            let result3 = await this.hydimg(userid,demandid)
            res.send(result3)
        }else if(typeimg==4){//木工
            let result4 = await this.woodimg(userid,demandid)
            res.send(result4)
        }else if(typeimg==5){//漆工
            let result5 = await this.paintimg(userid,demandid)
            res.send(result5)
        }else if(typeimg==6){//验收
            let result6 = await this.acceptimg(userid,demandid)
            res.send(result6)
        }else if(typeimg==7){//首页招标详细信息户型图
            let result7 = await this.huximglist(demandid)
            res.send(result7)
        }else if(typeimg==8){
            let result8 = await this.gethuximglist(demandid)
            res.send(result8)
        }

    }

    /**
     * 生成订单
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async setuserorder(req,res){
        let foremanid = req.query.foremanid;
        let stageprice = req.query.stageprice;
        let dismantleprice = req.query.dismantleprice;
        let hydprice = req.query.hydprice;
        let woodprice = req.query.woodprice;
        let painprice = req.query.painprice;
        let acceptprice = req.query.acceptprice;
        console.log(hydprice)
        let result = await this.userorder(foremanid,stageprice,dismantleprice,hydprice,woodprice,painprice,acceptprice)
        res.send(result)
    }

    /**
     * 业主获取订单记录
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async userorderlist(req,res){
        let userid = req.query.userid;
        let demandid = req.query.demandid
        let result = await this.orderlistmsg(userid,demandid);
        res.send(result)
    }

    /**
     * 业主评价工长
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async seteval(req,res){
        let userid = req.body.userid;
        let foremanid = req.body.foremanid;
        let time = req.body.time;
        let grade = req.body.grade;
        let impression = req.body.impression;
        let username = req.body.username;
        let content = req.body.content;
        let demandid = req.body.demandid
        let result = await this.foremaneval(userid,foremanid,time,grade,impression,content,username,demandid);
        res.send(result)
    }

    /**
     * 业主获取评价
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getusereval(req,res){
        let userid = req.query.userid;
        let foremanid = req.query.foremanid;
        console.log(userid)
        console.log(foremanid)
        let result = await this.usereval(userid,foremanid);
        res.send(result)
    }

    /**
     * 业主获取自己所有的评价
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getallusereval(req,res){
        let userid = req.query.userid;
        let result = await this.allusereval(userid);
        res.send(result)
    }

    /**
     * 改变招标信息游览量
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async setview(req,res){
        let id= req.query.id;
        let view = req.query.view
        let result = await this.setviewlist(id,view);
        res.send(result)
    }

    /**
     * 业主删除评价
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async deletereal(req,res){
        let id= req.query.id;
        let result = await this.deletere(id);
        res.send(result)
    }

    /**
     * 项目中获取评价内容
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async eval(req,res){
        let id = req.query.id;
        let result = await this.foremanelval(id);
        res.send(result)
    }

    /**
     *
     * @returns {Promise<void>}
     */
    static async updatestatus(req,res){
        let id = req.query.id;
        let result = await  this.updatestat(id);
        res.send(result)
    }



}