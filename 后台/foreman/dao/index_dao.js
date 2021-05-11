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

    /**
     * 首页根据类型获取效果图
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async geteffimg(req,res){
        let type= req.query.type;
        let result = await this.effict(type)
        res.send(result)
    }

    /**
     * 根据封面图片获取该图片下的所有子图片
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    static async gettypeimglist(req,res){
        let id= req.query.id;
        console.log(id)
        let result = await this.typeimglidt(id);
        res.send(result)
    }

}
