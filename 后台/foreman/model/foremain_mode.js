module.exports = class user_mod extends require('./model'){
    /**
     * 工长注册
     * @param name
     * @param pwd
     */
    static foremanReg(name,pwd){
        return new Promise((resolve,reject)=>{
            let sql = "insert into `foreman` (name,password) values (?,?)"
            console.log(sql)
            this.query(sql,this.formatParams(name,pwd)).then((result)=>{
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
}