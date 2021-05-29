<template>
  <div style="height:530px">
      <!-- <el-row type="flex" justify='start' class="p">
          <el-col :span="8">
              <div class="h2">装修 · <em>效果</em></div>
          </el-col>
            <el-col :span="16">
              <a href="#" class="a">更多>></a>
          </el-col>
     </el-row> -->
      <div class="warp">
          <p class="title">工长装修效果图</p>
          <div class="sp_t">
              户型风格自由搭配90%业主都在选 
          </div>
      </div>
          <el-row type="flex" justify='start' >
              <el-col :span='8' >
                    <div class="item" >
                        <el-carousel height="412px" style="width:320px;" indicator-position='none'>
                            <el-carousel-item v-for="(item,i) in imglist" :key="i">
                              <img :src="item.src"  alt="" style="width:100%;height:100%">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
              </el-col>
              <el-col :span='16'>
                  <div class="b">
                      <a class="i" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201802/hVen7A2smG8D9.jpg!xgt.middle" alt="">
                          <span>客厅</span>
                      </a>
                      <a class="i" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201801/4GLeaKfqF4YDP.jpg!xgt.middle  " alt="">
                          <span>背景墙</span>
                      </a>
                      <a class="i" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201801/U2tNnLqEX9BvV.jpg!xgt.middle" alt="">
                          <span>简约</span>
                      </a>
                      <a class="i act" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201801/j79WEGrp48zld.jpg!xgt.middle  " alt="">
                          <span>一室</span>
                      </a>
                      <a class="i" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201801/fuVQzkVInruV5.jpg!xgt.middle" alt="">
                          <span>客厅</span>
                      </a>
                      <a class="i" @click="getimginfo">
                          <img src="http://image.haogongzhang.com/case/201801/OBEX9dQX3Fbcg.jpg!xgt.middle" alt="">
                          <span>查看跟多</span>
                      </a>
                  </div>
              </el-col>
      </el-row>
      <div class="foter"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imglist:[
                {src:'http://image.haogongzhang.com/case/201801/m0bZaxtoMVKfm.jpg!xgt.middle'},
                {src:'http://image.haogongzhang.com/case/201801/UldctmVa7yMFe.jpg!xgt.middle'},
                {src:'http://image.haogongzhang.com/case/201801/glTZZCF4ZAtb2.jpg!xgt.middle'},
                {src:'http://image.haogongzhang.com/case/201712/eoAN7MgJBUPqL.jpg!xgt.middle'},
                {src:'http://image.haogongzhang.com/case/201712/gfVF9rTraLC8E.jpg!xgt.middle'}
            ],
        }
    },
    methods:{
        //查看装修效果图详情
        getimginfo(){
            this.$router.push('effect')
        }
    }

}
</script>

<style scoped>
.a{
    position: absolute;
    top: -56px;
    right: 16px;
    color: #aaa;
    text-decoration: none;
    font-size: 14px;
}
.a:hover{
    color: red;
}
.p{
    position: relative;
}

.act{
    width: 335px;
}
.i:hover span{
    display: block;
}
.i{
    height: 202px;
    width:275px;
    position: relative;
}
.i span{
    text-align: center;
    font-size: 18px;
    transition: 0.2s;
    padding: 10px 25px;
    line-height: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
    background: rgba(34,34,37,0.51);
    display: none;
}
.b .i img{
 display: block;
 width: 100%;
 height: 100%;
}

.c .tit{
    padding-left: 20px;
    font-size: 18px;
    color: #242424;
    position: relative;
}
.c .sp{
    display: block;
    position: absolute;
    left: 0;
    top: 10%;
    margin-top: -9px;
    width: 4px;
    height: 18px;
    background-color: #ff3406;
    border-radius: 10px;
}
.c{
    width: 360px;
    overflow: hidden;
    float: right;
    border: 1px solid;
    margin-top: 20px;
    height: 412px;
    text-align: left;
}
.er a{
    font-size: 18px;
    color: #222;
    font-weight: bold;
}
.liur a:hover{
    text-decoration: underline;
    color: #ff7031 ;
}
.liur{
    margin: 0;
    position: relative;
    line-height: 36px;
    height: 36px;
    color: #444;
    margin-bottom: 2px;
    font-size: 16px;
}
.liur span{
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    background: #d6d6d6;
    border-radius: 50%;
    margin: -2px 6px 0 6px;
}
.liur a{
    display: block;
    margin: 0;
    font-size: 16px;
}
.b{
   width: 845px;
   overflow: hidden;
   float: left;
   border: 1px solid #f5f5f5;
   height: 412px;
   margin-top: 20px;
   margin-left: -60px;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
}

.item{
    width: 320px;
    height: 412px;
    padding-top: 20px;
}
.warp{
    text-align: center;
    font-family: "微软雅黑", Tahoma, Arial;
    width: 100%;
    margin-top: -40px;
}
.warp .title{
    font-size: 32px;
    margin-bottom: 10px;
    color: black;
}
.warp .sp_t{
    font-size: 14px;
    color: #717171;
    margin-top: -70px;
}
</style>