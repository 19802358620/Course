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
    static addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,user,communityid){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `demand` (title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,user,communityid) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            this.query(sql,this.formatParams(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,user,communityid)).then((result)=>{
                resolve('true')
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
    static stenderlist(id){
        return new Promise((resolve,reject)=>{
            let sql= 'select foreman.*,foreman.id foremanid,pmstender.*,pmstender.id pmstenderid FROM pmstender LEFT JOIN foreman ON pmstender.foremanid = foreman.id where pmstender.userid = '+'"'+id+'"';
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('查询失败')
            })
        })
    }
}