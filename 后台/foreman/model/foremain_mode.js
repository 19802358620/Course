module.exports = class user_mod extends require('./model'){
    /**
     * 工长注册
     * @param name
     * @param pwd
     */
    static foremanReg(name,pwd,createtime){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `foreman` (name,password,createtime) values (?,?,?)"
            console.log(sql)
            this.query(sql,this.formatParams(name,pwd,createtime)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 工长登录
     * @param name
     * @param pwd
     */
    static foremanLogin(name,pwd){
        return new Promise((resolve,reject)=>{
            let sql='select * from `foreman` where name = '+'"'+name+'"'+' and password = '+'"'+pwd+'"'+'';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    /**
     * 工长完善个人信息
     * @param phone
     * @param sex
     * @param adder
     * @param wei
     * @param email
     * @param experience
     * @param servicearea
     * @param style
     * @param Introduction
     */
    static foremanInfo(phone,sex,email,experience,servicearea,style,Introduction,wei,province,city,area,age,name,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `foreman` set `phone` = "+"'"+phone+"'"+", `sex`="+"'"+sex+"'"+",`email`="+"'"+email+"'"+",`experience`="+"'"+experience+"'"+",`servicearea`="+"'"+servicearea+"'"+",`style`="+"'"+style+"'"+",`Introduction`="+"'"+Introduction+"'"+",`wei`="+"'"+wei+"'"+",`province`="+"'"+province+"'"+",`city`="+"'"+city+"'"+",`area`="+"'"+area+"'"+",`age`="+"'"+age+"'"+",`name`="+"'"+name+"'"+" where `id` = "+"'"+id+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }
    /**
     * 工长投标
     * @param foremanid
     * @param userid
     * @param ltime
     * @param price
     * @param content
     * @param demandid
     * @returns {Promise<unknown>}
     */
    static foremantender(foremanid,userid,price,content,demandid,stutas,time){
        return new Promise((resolve,reject)=>{
            let sql ="insert into `pmstender` (foremanid,userid,price,content,demandid,stutas,time) values (?,?,?,?,?,?,?)"
            console.log(sql)
            this.query(sql,this.formatParams(foremanid,userid,price,content,demandid,stutas,time)).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('false')
            })
        })

    }

    /**
     * 工长上传头像
     * @param imgUrl
     * @param foremanid
     */
    static upimg(imgUrl,foremanid){
        return new Promise((resolve,reject)=>{
            let sql = "update  `foreman` set `header` = "+"'"+imgUrl+"'"+" where `id` = "+"'"+foremanid+"'"+"";
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
     * 工长上传案例图片封面
     * @param imgUrl
     * @returns {Promise<unknown>}
     */
    static caseimg(imgUrl){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `case` (img) values (?)"
            console.log(sql);
            this.query(sql,this.formatParams(imgUrl)).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 工长批量上传案例图片
     * @param sql
     * @param sqlArr
     * @returns {Promise<unknown>}
     */
    static morecaselist(sql,sqlArr){
        return new Promise((resolve,reject)=>{
            this.query(sql,sqlArr).then((reult)=>{
                resolve(reult)
            }).catch(err=>{
                reject('false')
            })
        })
    }

    /**
     * 新增工长案例
     * @param name
     * @param time
     * @param casetype
     * @param stage
     * @param price
     * @param status
     * @param id
     * @returns {Promise<unknown>}
     */
    static setcases(name,time,casetype,stage,price,status,foremanid,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `case` set `name` = "+"'"+name+"'"+",`time`="+"'"+time+"'"+",`casetype`="+"'"+casetype+"'"+",`stage`="+"'"+stage+"'"+",`price`="+"'"+price+"'"+",`status`="+"'"+status+"'"+",`foremanid`="+"'"+foremanid+"'"+" where `id` = "+"'"+id+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }
    /**
     * 获取工长案例列表
     * @param id
     * @returns {Promise<unknown>}
     */
    static caselist(id){
        return new Promise((resolve,reject)=>{
            let sql='select * from `case` where foremanid = '+'"'+id+'"'+'';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('无案例信息')
            })
        })
    }

    /**
     * 工长删除案例
     * @param id
     */
    static delecase(id){
        return new Promise((resolve,reject)=>{
            let sql = this.Geshi('delete','case','*',{id:id})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('无案例信息')
            })
        })
    }

    /**
     * 工长获取投标记录
     * @param id
     */
    static getstenderinfo(id){
        return new Promise((resolve,reject)=>{
            let sql ='SELECT pmstender.*,pmstender.id pmsid, `user`.* FROM pmstender LEFT JOIN `user` ON `user`.id = pmstender.userid WHERE pmstender.foremanid ='+'"'+id+'"';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('无投标信息')
            })
        })
    }

    /**
     * 工长获取自己的预约记录
     * @param id
     * @returns {Promise<unknown>}
     */
    static reserlist(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `order`.id orderid,`order`.*,`user`.id userid,`user`.* FROM `order` LEFT JOIN `user` ON `user`.id = `order`.userid LEFT JOIN demand ON demand.id = `order`.demandid WHERE `order`.foremanid = '+'"'+id+'"'
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('无投标信息')
            })
        })
    }

    /**
     * 工长同意预约
     * @param id
     */
    static resinfo(id,status){
        return new Promise((resolve,reject)=>{
            let sql = "update  `order` set `status` = "+"'"+status+"'"+" where `id` = "+"'"+id+"'"+"";
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('无投标信息')
            })
        })

    }

    /**
     * 工长获取订单信息
     * @param id
     */
    static foremanorder(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT `order`.*,  `order`.id orderid,`user`.* FROM `order` LEFT JOIN `user` ON `user`.id = `order`.userid WHERE `order`.isres = 2 and `order`.foremanid = '+'"'+id+'"'
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('无投标信息')
            })
        })
    }

    /**
     * 工长进入阶段
     * @param dismantle
     * @param hyd
     * @param wood
     * @param painting
     * @param accept
     * @param foremanid
     */
    static changstage(dismantle,hyd,wood,painting,accept,foremanid){
        return new Promise((resolve,reject)=>{
            let sql = "update  `order` set `dismantle` = "+"'"+dismantle+"'"+",`hyd` = "+"'"+hyd+"'"+",`wood` = "+"'"+wood+"'"+",`painting` = "+"'"+painting+"'"+",`accept` = "+"'"+accept+"'"+" where `foremanid` = "+"'"+foremanid+"'"+"";
            console.log(sql);
            this.query(sql).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })
    }


}