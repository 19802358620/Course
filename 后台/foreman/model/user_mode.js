// const tools = require('../utils/tools')
module.exports = class user_mod extends require('./model'){
    /**
     * 用户登录
     * @param name
     * @param password
     * @returns {Promise<unknown>}
     */
    static loginUser(name,password){
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
    static addbidd(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,communityid){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `demand` (title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,communityid) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            this.query(sql,this.formatParams(title,titme,status,contract,type,space,statusquo,area,structure,style,budget,suoarea,ltitme,dotime,remarks,content,claim,userid,communityid)).then((result)=>{
                resolve('true')
            }).catch(err=>{
                reject("由于网络原因，你的招标需求没有发出")
            })
        })
    }
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
}