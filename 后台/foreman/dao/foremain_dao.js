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
        let price = req.body.price;
        let content = req.body.content;
        let demandid = req.body.demandid;
        let stutas = req.body.stutas
        let time = req.body.time
        let result = await  this.foremantender(foremanid,userid,price,content,demandid,stutas,time)
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
    /**
     * 上传案例封面图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async upcaseimg(req,res){
        if(req.file.size===0){
            res.send('error',{message:"上传文件不能为空"})
        }else{
            let file = req.file;
            console.log(file)
            fs.renameSync('public/images/caseimg/'+file.filename,'public/images/caseimg/'+file.originalname);
            res.set({
                'content-type':'application/JSON; charset=utf-8'
            })
            let imgUrl = 'http://localhost:3000/public/images/caseimg/'+file.originalname;
            let result = await this.caseimg(imgUrl)
            res.send(result)
        }
    }

    /**
     * 批量上传案例图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async setcaseimgs(req,res){
        let caseid = req.body.caseid;
        let foremanid = req.body.foremanid
        console.log(caseid)
        let effid = 0;
        if(req.files.length===0){
            res.send('error',{message:'上传文件不能为空'})
        }else{
            let sql = `insert into effimg (caseid,foremanid,effid,src) values `;
            let sqlArr = [];
            for(let i in req.files){
                res.set({
                    'content-type':'application/json; charset=utf8'
                });
                let file = req.files[i];
                console.log(file)
                fs.renameSync('public/images/caseimgs/'+file.filename,'public/images/caseimgs/'+file.originalname);
                let url = 'http://localhost:3000/public/images/caseimgs/'+file.originalname;
                if(req.files.length-1==i){
                    sql+=`(${caseid},${foremanid},${effid},?)`
                }else{
                    sql+=`(${caseid},${foremanid},${effid},?)`
                }
                console.log(sql)
                sqlArr.push([url])
                console.log(sqlArr)
                let result = await  this.morecaselist( sql,sqlArr)
                res.send(result)
            }
        }
    }

    /**
     * 批量上传设计方案图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async updesignimgs(req,res){
        let demandid = req.body.demandid;
        let pmstenderid = req.body.pmstenderid;
        let isdesign = req.body.isdesign;
        let foremanid = req.body.foremanid;
        if(req.files.length===0){
            res.send('error',{message:'上传文件不能为空'})
        }else{
            let sql = `insert into imglist (demandid,pmstenderid,isdesign,foremanid,url) values `;
            let sqlArr = [];
            for(let i in req.files){
                res.set({
                    'content-type':'application/json; charset=utf8'
                });
                let file = req.files[i];
                console.log(file)
                fs.renameSync('public/images/designimg/'+file.filename,'public/images/designimg/'+file.originalname);
                let url = 'http://localhost:3000/public/images/designimg/'+file.originalname;
                if(req.files.length-1==i){
                    sql+=`(${demandid},${pmstenderid},${isdesign},${foremanid},?)`
                }else{
                    sql+=`(${demandid},${pmstenderid},${isdesign},${foremanid},?)`
                }
                console.log(sql)
                sqlArr.push([url])
                console.log(sqlArr)
                let result = await  this.morecaselist( sql,sqlArr)
                res.send(result)
            }
        }
    }

    /**
     * 发布招标需求时的户型图
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async adddemandimg(req,res){
        let demandid = req.body.demandid;
        let userid = req.body.userid;
        let isdem = req.body.isdem
        console.log(req.body)
        if(req.files.length===0){
            res.send('error',{message:'上传文件不能为空'})
        }else{
            let sql = `insert into imglist (demandid,userid,isdem,url) values `;
            let sqlArr = [];
            for(let i in req.files){
                res.set({
                    'content-type':'application/json; charset=utf8'
                });
                let file = req.files[i];
                fs.renameSync('public/images/demandimg/'+file.filename,'public/images/demandimg/'+file.originalname);
                let url = 'http://localhost:3000/public/images/demandimg/'+file.originalname;
                if(req.files.length-1==i){
                    sql+=`(${demandid},${userid},${isdem},?)`
                }else{
                    sql+=`(${demandid},${userid},${isdem},?)`
                }
                console.log(sql)
                sqlArr.push([url])
                console.log(sqlArr)
                let result = await  this.morecaselist( sql,sqlArr)
                res.send(result)
            }
        }
    }

    /**
     * 增加工长案例
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async setcase(req,res){
        let id = req.body.id;
        let name = req.body.name;
        let time = req.body.time;
        let casetype = req.body.casetype;
        let stage = req.body.stage;
        let price = req.body.price;
        let status = req.body.status;
        let foremanid = req.body.foremanid
        let result = await this.setcases(name,time,casetype,stage,price,status,foremanid,id)
        res.send(result)
    }

    /**\
     * 获取工长案例列表
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getcaselist(req,res){
        let foremanid = req.query.foremanid;
        let result = await this.caselist(foremanid)
        res.send(result)
    }

    /**
     * 工长删除案例
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async deletecase(req,res){
        let caseid = req.body.id;
        let result = await  this.delecase(caseid)
        res.send(result)
    }

    /**
     * 工长获取投标记录
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async stenderinfo(req,res){
        let foremanid = req.query.id;
        console.log(foremanid)
        let result = await this.getstenderinfo(foremanid);
        res.send(result)
    }

    /**
     * 工长获取预约信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getreserlist(req,res){
        let foremanid = req.query.foremanid;
        let result = await  this.reserlist(foremanid)
        res.send(result)
    }

    /**
     * 工长同意预约
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async setresinfo(req,res){
        let foremanid = req.body.id;
        let status = req.body.status
        let result = await this.resinfo(foremanid,status);
        res.send(result)
    }

    /**
     * 工长获取订单信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getforemanorder(req,res){
        let foremanid = req.query.foremanid;
        console.log(foremanid)
        let result = await this.foremanorder(foremanid);
        res.send(result)

    }

    /**
     * 工长选择进入阶段
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async foremanstage(req,res){
        let dismantle = req.body.dismantle;
        let hyd = req.body.hyd;
        let wood = req.body.wood;
        let painting = req.body.painting;
        let accept  = req.body.accept;
        let foremanid = req.body.foremanid
        let result = await this.changstage(dismantle,hyd,wood,painting,accept,foremanid);
        res.send(result)
    }

    /**
     * 工长获取案例封面图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getforemancase(req,res){
        let id = req.query.id;
        let foremanid = req.query.foremanid;
        let result = await this.formancaseimg(id,foremanid);
        res.send(result)
    }

    /**
     * 首页获取案例图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async getcaseimg(req,res){
        let foremanid = req.query.foremanid;
        let caseid = req.query.caseid;
        let result = await this.caseimgs(foremanid,caseid);
        res.send(result)
    }

    /**
     * 案例游览量
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async casevisit(req,res){
        let id= req.query.id;
        let visits = req.query.visits;
        let result = await this.updatevisits(id,visits);
        res.send(result)

    }

}