<template>
  <div class="fotter">
      <div style="width:1200px;height:40px;"></div>
      <div class="part">
          <!-- <div class="left">
              待设计
          </div>
          <div class="left">
              待设计
          </div>
          <div class="left">
              待设计
          </div> -->
          <div class="it">
            <div class="items"></div>
            <div class="item">
                <p class="title">
                    <i class="icons" style="background-position: -282px -56px;"></i>
                    全国免费咨询热线
                </p>
                <p class="ph">4000-123-169</p>
            </div>
          </div>
          <div class="botm">
              <div class="item">
                  <span class="icon"></span>
                  <span style="color:#bbb;font-size: 12px;display: block;margin-top: 5px;text-align: center;line-height: 16px;">工商网监<br>电子标识</span>
              </div>
              <div class="item">
                  <span class="icon1"></span>
                  <span style="color:#bbb;font-size: 12px;display: block;margin-top: 5px;text-align: center;line-height: 16px;">工商网监<br>电子标识</span>
              </div>
              <div class="item">
                  <span class="icon2"></span>
                  <span style="color:#bbb;font-size: 12px;display: block;margin-top: 5px;text-align: center;line-height: 16px;">网络警察<br>举报平台</span>
              </div>
              <div class="item">
                   <span class="icon3"></span>
                  <span style="color:#bbb;font-size: 12px;display: block;margin-top: 5px;text-align: center;line-height: 16px;">中国互联网<br>举报中心</span>
              </div>
              <div class="item">
                  <span class="icon4"></span>
                  <span style="color:#bbb;font-size: 12px;display: block;margin-top: 14px;text-align: center;line-height: 16px;">信用中国</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.part .it .item .ph{
    font-size: 28px;
    color: #ff4e1e;
    font-style: oblique;
    padding: 20px 0;
    display: block;
    margin: 0 auto;
    margin-left: 30px;
}
.part .it .item .title .icons{
    background-position: -282px -56px;
    width: 26px;
    height: 26px;
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 865px 186px;
    margin-right: 6px;
    vertical-align: middle;
    display: inline-block;
}
.part .it .item .title{
    font-size: 18px;
    color: #f6f6f6;
    display: block;
    margin: 0 auto;
    margin-top: 23px;
    margin-left: 30px;
}
.part .it .item{
    width: 400px;
    height: 135px;
}
.part .it .items{
    width: 800px;
    height: 135px;
}
.part .it{
    width: 100%;
    height: 135px;
    border: 1px solid red;
    display: flex;
    justify-self: end;
}
.part .botm{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 150px;
    display: flex;
    justify-content: space-around;
}
.part .botm .item{
    width: 110px;
    height: 50px;
}
.part .botm .item .icon{
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 826px 191px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    display: block;
    float: left;
    background-position-y: -139px;
}
.part .botm .item .icon1{
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 917px 191px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    display: block;
    float: left;
    background-position-y: -139px;
    background-position: -60px -139px;
}
.part .botm .item .icon2{
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 884px 191px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    display: block;
    float: left;
    background-position-y: -139px;
    background-position: -113px -139px;
}
.part .botm .item .icon3{
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 884px 191px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    display: block;
    float: left;
    background-position-y: -139px;
    background-position: -168px -139px;
}
.part .botm .item .icon4{
    background: url('../assets/imgs/页脚.png') no-repeat;
    background-size: 884px 191px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    display: block;
    float: left;
    background-position-y: -139px;
    background-position: -229px -139px;
}
.Noprint {
     DISPLAY: none
 }
.fotter{
    background: #303030;
    width: 100%;
    height: 240px;
}
.fotter .part{
    width: 1200px;
    margin: 0 auto;
    height: 200px;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-top: -20px;
}
.fotter .part .left{
    width: 395px;
    height: 200px;
    margin: 0 5px;
    border: 1px solid red;
    color: #fff;
}
ul li{
    color: #fff;
    line-height: 24px;
    font-size: 14px;
    color: #aaa;
}

</style>>

