<template>
  <div>
      <div class="left">
          <div class="my_siteMap">
              <h6 class="h">东方蓝海中心小区信息</h6>
          </div>
          <div class="item">
              <div class="content">
                  <div class="img">
                      <img src="../../assets/imgs/我的小区/方案.jpg" alt="">
                  </div>
                  <div class="titl">
                      <li><font>楼盘地址：</font>未来科技城南区内科技城路与南区一路交界处</li>
                      <li><font>开发商：</font>北京东方蓝海置业有限责任公司</li>
                      <li class="er"><font>开盘时间：</font>2017-09-27</li>
                      <li class="er"><font>入住时间：</font>2019-12-01</li>
                      <li class="er"><font>物业类别：</font>住宅</li>
                      <li class="er"><font>产权时间：</font>普通住宅:70年</li>
                      <li class="er"><font>建筑类别：</font>板楼,小高层,高层</li>
                      <li class="er"><font>装修状况：</font>毛坯</li>
                      <li class="er"><font>楼盘均价：</font>57000元/m2</li>
                      <li class="er"><font>物业费：</font>4.55元/平方米·月</li>
                      <li class="er"><font>绿化率：</font>30%</li>
                      <li class="er"><font>容积率：</font>3.5%</li>
                  </div>
              </div>
          </div>
          <div class="my_siteMap" style="margin-top:270px">
              <h6 class="h">东方蓝海中心最新方案</h6>
          </div>
          <div class="xin">
            <div class="lidt">
                <div class="pinc">
                    <a href=""><img src="../../assets/imgs/我的小区/小区新方案.jpg" alt=""></a>
                </div>
                <div class="pnc_main">
                    <li>
                        <span><em>123456</em>人浏览过此方案</span>
                    </li>
                     <li class="err"><font>小区名称：</font>金源购物中心纸老虎图</li>
                     <li class="err d"><font>方案提供者：</font>蒙太奇装饰</li>
                     <li class="err"><font> 装修面积：</font>500.0平米 </li>
                     <li class="err c" ><font> 装修造价：</font> 80.0万 </li>

                </div>
            </div>
            <div class="lidt">
                <div class="pinc">
                    <a href=""><img src="../../assets/imgs/我的小区/02.jpg" alt=""></a>
                </div>
                 <div class="pnc_main">
                    <li>
                        <span><em>123456</em>人浏览过此方案</span>
                    </li>
                     <li class="err"><font>小区名称：</font>金源购物中心纸老虎图</li>
                     <li class="err d"><font>方案提供者：</font>蒙太奇装饰</li>
                     <li class="err"><font> 装修面积：</font>500.0平米 </li>
                     <li class="err c" ><font> 装修造价：</font> 80.0万 </li>

                </div>
            </div>
            <div class="lidt">
                <div class="pinc">
                    <a href=""><img src="../../assets/imgs/我的小区/02.jpg" alt=""></a>
                </div>
                 <div class="pnc_main">
                    <li>
                        <span><em>123456</em>人浏览过此方案</span>
                    </li>
                     <li class="err"><font>小区名称：</font>金源购物中心纸老虎图</li>
                     <li class="err d"><font>方案提供者：</font>蒙太奇装饰</li>
                     <li class="err"><font> 装修面积：</font>500.0平米 </li>
                     <li class="err c" ><font> 装修造价：</font> 80.0万 </li>

                </div>
            </div>
            <div class="lidt">
                <div class="pinc">
                    <a href=""><img src="../../assets/imgs/我的小区/02.jpg" alt=""></a>
                </div>
                 <div class="pnc_main">
                    <li>
                        <span><em>123456</em>人浏览过此方案</span>
                    </li>
                     <li class="err"><font>小区名称：</font>金源购物中心纸老虎图</li>
                     <li class="err d"><font>方案提供者：</font>蒙太奇装饰</li>
                     <li class="err"><font> 装修面积：</font>500.0平米 </li>
                     <li class="err c" ><font> 装修造价：</font> 80.0万 </li>

                </div>
            </div>
          </div>
      </div>
      <div class="right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.d{
    text-align: right;
}
.c{
    padding-left: 58px;
}
.err{
    width: 190px;
}
em{
    color: #F76D4E;
    font-style: normal;
}
.pinc{
    width: 100%;
    height: 260px;
}
.xin{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.er{
    width: 190px;
}
.lidt{
    width: 440px;
    height: 350px;
    margin: 10px 0;

}
.lidt .pnc_main{
    width: 100%;
    height: 90px;
    box-sizing: border-box;
}
li{
    float: left;
    width: 400px;
    white-space: nowrap;
    display: block;
   line-height: 32px;
   max-height: 100px;
   list-style: none;
   font-style: normal;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 12px;
   text-align: left;
}
font{
    color: #888888;
}
img{
    width: 100%;
    height: 100%;
}
.item .content .img{
    float: left;
    width: 440px;
    height: 230px;
}
.item .content .titl{
    float: right;
    width: 440px;
    height: 230px;
    border: 1px solid #EAEAEA;
}
.item{
    margin: 20px auto 25px auto;
}
h2{
    margin: 0;
    padding: 0;
}
.left .my_siteMap{
    margin: 0 auto 25px auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #EAEAEA;
    width: 100%;
    height: 40px;
    position: relative;
}
.left .my_siteMap .h{
    font-weight: normal;
    font-size: 18px;
    color: #333;
    position: absolute;
    top: -52px;
}

.left{
    float: left;
    width: 900px;
    height: auto;
    border: 1px solid gold;
    position: relative;
}
.right{
    float: right;
    width: 280px;
    height: 600px;
    border: 1px solid red;
}
</style>