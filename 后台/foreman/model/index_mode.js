module.exports = class user_mod extends require('./model'){
    /**
     * 根据地区获得该地区的招标信息
     * @param area
     * @returns {Promise<unknown>}
     */
    static biding(area){
    return new Promise((resolve,reject)=>{
        let sql='select * from `demand` where city = '+'"'+area+'"'+'';
        console.log(sql)
        this.query(sql).then((result)=>{
        resolve(result)
        }).catch(err=>{
            reject('该地区暂无招标信息')
        })
    })
    }

    /**
     * 根据id获取户型图
     * @param id
     * @returns {Promise<unknown>}
     */
    static imglist(id){
        return  new Promise((resolve,reject)=>{
            let sql =  this.Geshi('select','imglist','*',{demandid:id,isdem:1})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('该地区暂无招标信息')
            })
        })
    }

    /**
     * 根据类型获取效果图
     * @param type
     */
    static effict(type){
        return  new Promise((resolve,reject)=>{
            let sql =  this.Geshi('select','effect','*',{type:type})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('该地区暂无招标信息')
            })
        })
    }

    /**
     * 获取子图片
     * @param id
     */
    static typeimglidt(id){
        return  new Promise((resolve,reject)=>{
            let sql =  this.Geshi('select','effimg','*',{effid:id})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('该地区暂无招标信息')
            })
        })
    }

    /**
     * 根据地区获取小区列表
     * @param area
     */
    static communitylist(area){
        return  new Promise((resolve,reject)=>{
            let sql =  this.Geshi('select','community','*',{area:area})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('该地区暂无招标信息')
            })
        })
    }

    /**
     * 首页根据地区获取工长信息
     * @param city
     */
    static getforemanlist(city){
        return  new Promise((resolve,reject)=>{
            let sql =  this.Geshi('select','foreman','*',{city:city})
            console.log(sql)
            this.query(sql).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject('该地区暂无招标信息')
            })
        })
    }
}