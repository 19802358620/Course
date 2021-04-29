module.exports = class foreman_dao extends require('../model/index_mode'){
    /**
     * 首页根据地区获得该地区的招标信息
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async bidlist(req,res){
        let area = req.query.area
        let result = await this.biding(area)
        res.send(result)
    }

    /**
     * 根据招标id获取户型图
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static  async imgs(req,res){
        let id = req.query.id;
        let result = await  this.imglist(id)
        res.send(result)
    }

}
