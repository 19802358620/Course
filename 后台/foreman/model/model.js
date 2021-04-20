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

    static MySubString(str) {
        return str.substring(0, str.length - 1);
    }
    static Geshi(type, tablename, params, where) {
        let sql = "";
        if (type == "select") {
            sql += "select ";
            if (params == "*") {
                sql += " * ";
            }
            else {
                for (let key in params) {
                    sql += key + ",";
                }
            }

            sql = this.MySubString(sql);
            sql += " from " + "`" + tablename + "`" + " ";
            let count = 0;
            for (let key in where) {
                count += 1;
                if (count == 1) {
                    sql += " where " + "`" + key + "` =" + "'" + where[key] + "'";
                }
                else {
                    sql += " and " + "`" + key + "` =" + "'" + where[key] + "'";
                }
            }
        }
        if (type == "insert") {
            sql += "insert into " + "`" + tablename + "` (";
            for (let key in params) {
                sql += "" + key + "" + ",";
            }
            sql = this.MySubString(sql);
            sql += ") values(";
            let values = "";
            for (let key in params) {
                values += "'" + params[key] + "'" + ","
            }
            values = MySubString(values);
            sql += values + ")";
        }
        if (type == "update") {
            sql += "update " + "`" + tablename + "`" + " set ";
            for (let key in params) {
                sql += "`" + key + "` =" + "'" + params[key] + "'" + ",";
            }
            sql = this.MySubString(sql);
            let count = 0;
            for (let key in where) {
                count += 1;
                if (count == 1) {
                    sql += " where " + "`" + key + "` =" + "'" + where[key] + "'";
                }
                else {
                    sql += " and " + "`" + key + "` =" + "'" + where[key] + "'";
                }
            }
        }
        if (type == "delete") {
            sql += "delete from " + "`" + tablename + "`";
            let count = 0;
            for (let key in where) {
                count += 1;
                if (count == 1) {
                    sql += " where " + "`" + key + "` =" + "'" + where[key] + "'";
                }
                else {
                    sql += " and " + "`" + key + "` =" + "'" + where[key] + "'";
                }
            }
        }
        return sql;
    }

}

