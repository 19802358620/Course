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
    static foremanInfo(phone,sex,adder,email,experience,servicearea,style,Introduction,wei,id){
        return new Promise((resolve,reject)=>{
            let sql = "update  `foreman` set `phone` = "+"'"+phone+"'"+", `sex`="+"'"+sex+"'"+",`adder`="+"'"+adder+"'"+",`email`="+"'"+email+"'"+",`experience`="+"'"+experience+"'"+",`servicearea`="+"'"+servicearea+"'"+",`style`="+"'"+style+"'"+",`Introduction`="+"'"+Introduction+"'"+",`wei`="+"'"+wei+"'"+"  where `id` = "+"'"+id+"'"+"";
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
    static foremantender(foremanid,userid,ltime,price,content,demandid){
        return new Promise((resolve,reject)=>{
            let sql ="insert into `pmstender` (foremanid,userid,ltime,price,content,demandid) values (?,?,?,?,?,?)"
            console.log(sql)
            this.query(sql,this.formatParams(foremanid,userid,ltime,price,content,demandid)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject('false')
            })
        })

    }
}