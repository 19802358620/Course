// const tools = require('../utils/tools')
module.exports = class user_mod extends require('./model'){
    /**
     * 用户登录
     * @param name
     * @param password
     * @returns {Promise<unknown>}
     */
    static loginUser(name,password,){
        return new Promise((resolve,reject)=>{
            console.log(name,password)
            let sql='select * from `user` where name = '+'"'+name+'"'+' and password = '+'"'+password+'"'+'';
            console.log(sql)
            this.query(sql).then(res=>{
                resolve(res)
            }).catch(()=>{
                reject("登录失败")
            })
        })
    }

    /**
     * 业主发布需求
     * @returns {Promise<unknown>}
     */
    static addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,ltitme,dotime,remarks,content,claim,userid,user,communityname,province,city,adder){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `demand` (title,titme,status,contract,type,space,statusquo,area,structure,style,budget,ltitme,dotime,remarks,content,claim,userid,user,communityname,province,city,adder) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            this.query(sql,this.formatParams(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,ltitme,dotime,remarks,content,claim,userid,user,communityname,province,city,adder)).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject("由于网络原因，你的招标需求没有发出")
            })
        })
    }

    /**
     * 业主注册
     * @param name
     * @param password
     * @returns {Promise<unknown>}
     */
    static userReg(name,password){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `user` (name,password) values (?,?)"
            this.query(sql,this.formatParams(name,password)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主完善自己的个人信息
     * @param phone
     * @param sex
     * @param adder
     * @param communityname
     * @param wei
     * @param email
     * @param userid
     * @returns {Promise<unknown>}
     */
    static perfectInfo(phone,sex,communityname,wei,email,province,city,area,userid){
        return new Promise((resolve,reject)=>{
            let sql = "update  `user` set `phone` = "+"'"+phone+"'"+",`sex`="+"'"+sex+"'"+",`communityname`="+"'"+communityname+"'"+",`wei`="+"'"+wei+"'"+",`email`="+"'"+email+"'"+",`province`="+"'"+province+"'"+",`city`="+"'"+city+"'"+",`area`="+"'"+area+"'"+" where `id` = "+"'"+userid+"'"+"";
            console.log(sql)
            this.query(sql,).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }
    /**
     * 获取该用户所有招标信息接口
     * @param {*} uesrid 
     * @returns 
     */
    static management(uesrid){
        return new Promise((resolve,reject)=>{
            // let sql ="select * from demand where userid = "+"'"+uesrid+"'"+"";
           let sql =  this.Geshi('select','demand','*',{userid:uesrid})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    /**
     * 用户上传头像
     * @param imgUrl
     * @param userid
     * @returns {Promise<unknown>}
     */
    static img(imgUrl,userid){
      return new Promise((resolve,reject)=>{
          let sql = "update  `user` set `userpic` = "+"'"+imgUrl+"'"+" where `id` = "+"'"+userid+"'"+"";
          console.log(sql)
          this.query(sql).then((result)=>{
              resolve({
                  code:200,
                  msg:'上传成功',
                  url:imgUrl
              })
          }).catch(err=>{
              reject(err)
          })
      })
    }

    /**
     * 业主删除招标记录
     * @param id
     * @returns {Promise<unknown>}
     */
    static  demand(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('delete','demand','*',{id:id})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主修改密码
     * @param pwd
     * @returns {Promise<unknown>}
     */
    static  updatauserpwd(pwd,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `user` set `password` = "+"'"+pwd+"'"+" where `id` = "+"'"+id+"'"+"";
            // let sql = this.Geshi('update','user','*',{password:pwd,id:id})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('fasle')
            })
        })
    }

    /**
     * 业主修改自己的招标需求
     * @param title
     * @param titme
     * @param status
     * @param contract
     * @param type
     * @param space
     * @param statusquo
     * @param area
     * @param structure
     * @param style
     * @param budget
     * @param suoarea
     * @param ltitme
     * @param dotime
     * @param remarks
     * @param content
     * @param claim
     * @param userid
     * @param communityid
     * @returns {Promise<unknown>}
     */
    static modifydemand(title,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,communityid,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `demand` set `title` = "+"'"+title+"'"+", `contract`="+"'"+contract+"'"+",`type`="+"'"+type+"'"+",`space`="+"'"+space+"'"+",`statusquo`="+"'"+statusquo+"'"+",`area`="+"'"+area+"'"+",`structure`="+"'"+structure+"'"+",`style`="+"'"+style+"'"+",`budget`="+"'"+budget+"'"+",`suoarea`="+"'"+suoarea+"'"+",`ltitme`="+"'"+ltitme+"'"+",`dotime`="+"'"+dotime+"'"+",`remarks`="+"'"+remarks+"'"+",`content`="+"'"+content+"'"+",`claim`="+"'"+claim+"'"+",`communityid`="+"'"+communityid+"'"+" where `id` = "+"'"+id+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })

    }

    /**
     * 获取工长投标信息
     * @param id
     * @returns {Promise<unknown>}
     */
    static stenderlist(id,demandid){
        return new Promise((resolve,reject)=>{
            let sql= 'select foreman.*,foreman.id foremanid,pmstender.*,pmstender.id pmstenderid FROM pmstender LEFT JOIN foreman ON pmstender.foremanid = foreman.id where pmstender.userid = '+'"'+id+'" and demandid ='+'"'+demandid+'" ';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('查询失败')
            })
        })
    }

    /**
     * 业主生成订单
     * @param userid
     * @param foremanid
     * @param demandid
     * @param time
     * @returns {Promise<unknown>}
     */
    static orderlist(userid,foremanid,demandid,restime,isres,adder,deark,status){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `order` (userid,foremanid,demandid,restime,isres,adder,deark,status) values (?,?,?,?,?,?,?,?)";
            console.log(sql)
            this.query(sql,this.formatParams(userid,foremanid,demandid,restime,isres,adder,deark,status)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 修改工长投标状态
     * @param status
     * @param id
     * @returns {Promise<unknown>}
     */
    static statuschang(status,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `pmstender` set `stutas` = "+"'"+status+"'"+" where `id` = "+"'"+id+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('fasle')
            })
        })
    }

    /**
     * 获取工长提交的设计图
     * @param id
     * @returns {Promise<unknown>}
     */
    static disnig(id,foremanid){
        return new  Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{demandid:id,isdesign:1,foremanid:foremanid});
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('fasle')
            })
        })
    }

    /**
     * 用户获取自己的预约记录
     * @param id
     * @returns {Promise<unknown>}
     */
    static reslist(id,demandid){
        return new Promise((resolve,reject)=>{
            let sql= 'SELECT foreman.*, `order`.* ,`order`.id orderid FROM `order` LEFT JOIN foreman ON foreman.id = order.foremanid WHERE `order`.userid = '+'"'+id+'" and demandid = '+'"'+demandid+'"'
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('fasle')
            })
        })
    }

    /**
     * 业主获取所有的预约信息
     * @param id
     */
    static resforemanlist(id){
        return new Promise((resolve,reject)=>{
            let sql= 'SELECT foreman.*, `order`.* ,`order`.id orderid FROM `order` LEFT JOIN foreman ON foreman.id = order.foremanid WHERE `order`.userid = '+'"'+id+'"'
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('fasle')
            })
        })
    }

    /**
     * 业主取消预约
     * @param orderid
     * @param cancel
     * @param cantime
     * @param status
     * @returns {Promise<unknown>}
     */
    static clres(orderid,cancel,cantime,status){
        return new Promise((resolve,reject)=>{
            let sql = "update  `order` set `cancel` = "+"'"+cancel+"'"+",`cantime` = "+"'"+cantime+"'"+",`status` = "+"'"+status+"'"+" where `id` = "+"'"+orderid+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('fasle')
            })

        })
    }

    /**
     * 业主上传与工长线下预约的图片
     * @param userid
     * @param resimg
     * @param foremanid
     * @param demandid
     */
    static moreimglist(sql,sqlArr){
        return new Promise((resolve,reject)=>{
            this.query(sql,sqlArr).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 获取业主上传的预约记录图片
     * @param id
     */
    static resimg(id,demandid){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,resimg:1,demandid:demandid});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })

    }

    /**
     * 获取拆改图片
     * @param id
     * @returns {Promise<unknown>}
     */
    static dismanimg(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,dismanimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 获取水电图片
     * @param id
     */
    static hydimg(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,hydimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })

    }

    /**
     * 获取木工图片
     * @param id
     */
    static woodimg(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,woodimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 获取漆工图片
     * @param id
     */
    static paintimg(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,paintimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 获取验收图片
     * @param id
     */
    static  acceptimg(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{userid:id,acceptimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 投标时获户型图片
     * @param demandid
     */
    static huximglist(demandid){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{demandid:demandid,huximg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 获取工长投标设计图片
     * @param id
     */
    static gethuximglist(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','imglist','*',{demandid:id,designimg:1});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主生成订单
     * @param orderid
     * @param stageprice
     */
    static userorder(foremanid,stageprice,dismantleprice,hydprice,woodprice,painprice,acceptprice){
        return new Promise((resolve,reject)=>{
            let sql = "update  `order` set `stageprice` = "+"'"+stageprice+"'"+",`isres` = "+"'"+2+"'"+",`dismantleprice` = "+"'"+dismantleprice+"'"+",`hydprice` = "+"'"+hydprice+"'"+",`woodprice` = "+"'"+woodprice+"'"+",`painprice` = "+"'"+painprice+"'"+",`acceptprice` = "+"'"+acceptprice+"'"+" where `foremanid` = "+"'"+foremanid+"'"+"";
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主获取订单记录
     * @param id
     */
   static orderlistmsg(id,demandid){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `order`.*, foreman.*  FROM  `order`  LEFT JOIN foreman ON foreman.id = `order`.foremanid WHERE `order`.isres = 2 and `order`.userid ='+'"'+id+'" and demandid ='+'"'+demandid+'" ';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主评价项目工长
     * @param userid
     * @param foremanid
     * @param time
     * @param grade
     * @param impression
     * @param content
     */
    static foremaneval(userid,foremanid,time,grade,impression,content,username){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `evaluation` (userid,foremanid,time,grade,impression,content,username) values (?,?,?,?,?,?,?)";
            console.log(sql)
            this.query(sql,this.formatParams(userid,foremanid,time,grade,impression,content,username)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主获取自己的评价内容
     * @param userid
     * @param foremanid
     */
    static usereval(userid,foremanid){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('select','evaluation','*',{userid:userid,foremanid:foremanid});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 业主获取所有评列表
     * @param userid
     */
    static allusereval(userid){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `evaluation`.*, foreman.* FROM  `evaluation` LEFT JOIN foreman ON foreman.id = `evaluation`.foremanid WHERE `evaluation`.userid ='+'"'+userid+'" '
            // let sql = this.Geshi('select','evaluation','*',{userid:userid});
            console.log(sql)
            this.query(sql).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 改变游览量
     * @param id
     */
    static setviewlist(id,view){
        let sql = "update  `demand` set `view` = "+"'"+view+"'"+" where `id` = "+"'"+id+"'"+"";
        console.log(sql)
        this.query(sql).then((reult)=>{
            resolve(reult)
        }).catch(err=>{
            reject('false')
        })
    }
}