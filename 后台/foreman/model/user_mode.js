// const tools = require('../utils/tools')
module.exports = class user_mod extends require('./model'){
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
}