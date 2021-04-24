module.exports = class user_mod extends require('./model'){
    /**
     * 根据地区获得该地区的招标信息
     * @param area
     * @returns {Promise<unknown>}
     */
    static biding(area){
    return new Promise((resolve,reject)=>{
        let sql='select * from `demand` where suoarea = '+'"'+area+'"'+'';
        console.log(sql)
        this.query(sql).then((result)=>{
        resolve(result)
        }).catch(err=>{
            reject('该地区暂无招标信息')
        })
    })

    }

}