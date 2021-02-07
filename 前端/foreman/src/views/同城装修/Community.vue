<template>
  <div class="m" :style="{height:`${height}px`}">
      <div class="tilte">
          <div class="ared">
              <a href="" class="a"><h1>重庆小区</h1></a>
              <p class="p">></p>
              <div class="ri">
                  找到符合条件
                  <b style="color: red;">123456篇</b>
              </div>
          </div>
          <div class="ar">
              <span class="sp">区域</span>
              <div class="item">
                  <a href="#" class="ita">全部</a>
                  <a href="#" class="ita">东城区</a>
                  <a href="#" class="ita">西城区</a>
                  <a href="#" class="ita">崇文区</a>
                  <a href="#" class="ita">宣武区</a>
                  <a href="#" class="ita">朝阳区</a>
              </div>
          </div>
      </div>
      <div class="ti">
          为您找到
          <span class="an">123456</span>
          个适合装修的方案
      </div>
      <div class="list">
          <div class="left">
              <a href="">
                  <img src="../../assets/imgs/我的小区/我的小区.jpg" alt="">
              </a>
          </div>
          <div class="right">
              <div class="right_tilte">
                  <a href="#">东方蓝海中心</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
        }
    },
}
</script>
<style scoped>
.right .right_tilte{
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid;
    position: relative;
}
.right_tilte a{
    color: black;
    position: absolute;
    top: -63px;
    left: 0;
}
.list .right{
    width: 963px;
    border: solid 1px pink;
    height: 120px;
    float: right;
}
img{
    width: 100%;
}
.list{
    margin: 25px 0px 0 0px;
    padding-bottom: 25px;
    border-bottom: 1px dotted #EAEAEA;
    width: 100%;
    overflow: hidden;
    float: left;
    border: 1px solid blue;
}
.list .left{
    float: left;
    margin: 0 25px 0 10px;
    width: 200px;
    height: 120px;
}
.ti{
    margin: 11px 0 0 0;
    height: 40px;
    border: 1px solid #EAEAEA;
    line-height: 40px;
    padding: 0px 15px;
    background-color: #F8F8F8;
    font-size: 12px;
    text-align: left;
}
.ti .an{
    color: #F76D4E;
    margin: 0px 3px;
    font-weight: 800;
    font-size: 12px;
}
.ar .item{
    display: flex;
    justify-content: start;
    border: 1px solid red;
    width: 1105px;
    float: right;
    box-sizing: border-box;

}
.item .ita{
    line-height: 34px;
    padding: 5px;
    margin: 2px;
    text-decoration: none;
    white-space: nowrap;
    font-size: 12px;
    border-radius: 2px;
    color: black;
    
}
.item .ita:hover{
    background: #F76D4E;
    color: white;
    text-decoration: none;
}
.ared .ri{
    font-size: 12px;
    line-height: 24px;
    float: left;
    margin-left: 5px;
    color: #666666;
    position: absolute;
    top: 0;
    left: 100px;
}
.ared .p{
    padding: 0;
    margin: 0 10px;
    display: block;
    font-size: 14px;
    float: left;
    line-height: 24px;
    color: #999;
    position: absolute;
    top: 0;
    left: 80px;
}
.ared .a{
    position: absolute;
    top: 0;
    left: 0;
}
.ar{
    font-size: 12px;
    line-height: 50px;
    cursor: default;
    width: 100%;
    border: 1px solid;
    height: 50px;
    position: relative;
}
.ar .sp{
    display: block;
    float: left;
    background-color: #f8f8f8;
    font-weight: bold;
    margin-right: 15px;
    padding: 0 30px 0 30px;
    position: absolute;
    top: 0;
}
.m{
    width: 1200px;
    margin: 10px auto;
    border: 1px solid red;
}
.tilte{
    width: 100%;
    padding: 0px;
    border: 1px solid #DADADA;
    height: 80px;
}
.tilte .ared{
    font-size: 14px;
    padding: 14px 0px;
    border-bottom: 1px solid #DADADA;
    position: relative;
}
.tilte .ared h1{
    display: block;
    padding-left: 15px;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    float: left;
    color: #333333;
}
</style>