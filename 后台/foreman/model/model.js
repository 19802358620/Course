const mysql = require('mysql');
/**
 * 数据连接配置
 * @type {Pool}
 */
const  pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'foreman'
})
module.exports = class  Model{
    /**
     * 通用查询语句
     * @param sql 需要的sql语句
     * @param params 需要使用到的参数
     * @returns {Promise<unknown>}
     */
    static  query(sql,params){
        return new Promise((resolve ,reject)=>{
            pool.getConnection(function (err,connection) {
                if (err){
                    console.error(err)
                    connection.release()
                }else{
                    //query执行sql语句
                    connection.query(sql, params,(err,results)=>{
                        if (err){
                            console.error(err)
                            reject(err)
                        }else{
                            resolve(results)
                        }
                        //结束会话,释放连接
                        connection.release()
                    })
                }

            })
        })
    }

    /**
     * 数据类型转换函数
     * @returns {[]}
     */
    static formatParams(){
        let array=[]
        for (let i=0,l=arguments.length;i<l;i++){
            array.push(arguments[i]);
        }
        return array
    }
}

