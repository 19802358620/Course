<template>
  <div class="m">
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
              <div class="li">
                  <button class="btn">查看方案</button>
              </div>
               <div class="li">
                 <span>开发商：</span>
                 北京东方蓝海置业有限责任公司 
              </div>
              <div class="li01">
                 <span>相关标签：</span>
                 <a href="">小区详情</a> 
                 <a href="">户型图</a>
                 <a href="">实景图</a>
                 <a href="">样板图</a>
              </div>
               <div class="li02">
                 <span>游览量：</span>
                 <em>123</em>
                 人查看了该楼盘
              </div>
          </div>
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
              <div class="li">
                  <button class="btn">查看方案</button>
              </div>
               <div class="li">
                 <span>开发商：</span>
                 北京东方蓝海置业有限责任公司 
              </div>
              <div class="li01">
                 <span>相关标签：</span>
                 <a href="">小区详情</a> 
                 <a href="">户型图</a>
                 <a href="">实景图</a>
                 <a href="">样板图</a>
              </div>
               <div class="li02">
                 <span>游览量：</span>
                 <em>123</em>
                 人查看了该楼盘
              </div>
          </div>
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
              <div class="li">
                  <button class="btn">查看方案</button>
              </div>
               <div class="li">
                 <span>开发商：</span>
                 北京东方蓝海置业有限责任公司 
              </div>
              <div class="li01">
                 <span>相关标签：</span>
                 <a href="">小区详情</a> 
                 <a href="">户型图</a>
                 <a href="">实景图</a>
                 <a href="">样板图</a>
              </div>
               <div class="li02">
                 <span>游览量：</span>
                 <em>123</em>
                 人查看了该楼盘
              </div>
          </div>
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
              <div class="li">
                  <button class="btn">查看方案</button>
              </div>
               <div class="li">
                 <span>开发商：</span>
                 北京东方蓝海置业有限责任公司 
              </div>
              <div class="li01">
                 <span>相关标签：</span>
                 <a href="">小区详情</a> 
                 <a href="">户型图</a>
                 <a href="">实景图</a>
                 <a href="">样板图</a>
              </div>
               <div class="li02">
                 <span>游览量：</span>
                 <em>123</em>
                 人查看了该楼盘
              </div>
          </div>
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
              <div class="li">
                  <button class="btn">查看方案</button>
              </div>
               <div class="li">
                 <span>开发商：</span>
                 北京东方蓝海置业有限责任公司 
              </div>
              <div class="li01">
                 <span>相关标签：</span>
                 <a href="">小区详情</a> 
                 <a href="">户型图</a>
                 <a href="">实景图</a>
                 <a href="">样板图</a>
              </div>
               <div class="li02">
                 <span>游览量：</span>
                 <em>123</em>
                 人查看了该楼盘
              </div>
          </div>
      </div>
      <div class="list_pager">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
      </el-pagination>
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
.list_pager{
    margin: 25px 0px 0 0px;
    padding-bottom: 25px;
    border-bottom: 1px dotted #EAEAEA;
    width: 100%;
    overflow: hidden;
    float: left;
    height: 40px;
}
em{
    font-style: normal;
    color: #F76D4E;
    margin: 0px 5px;
    font-size: 14px;
}
span{
    font-size: 12px;
}
.right .li{
    font-size: 12px;
    position: absolute;
    top: -29px;
}
.right .li01{
    font-size: 12px;
    position: absolute;
    top: -3px;
}
.right .li02{
    font-size: 12px;
    position: absolute;
    top: 23px;
}
.right .li01 a{
    margin-left: 10px;
    color: inherit;
}
.li .btn{
    position: relative;
    display: block;
    margin-top: 6px;
    line-height: 30px;
    float: right;
    margin-right: 0px;
    cursor: pointer;
    width: 120px;
    background-color: #F76D4E;
    color: #ffffff;
    padding: 8px 16px;
    border: 0px;
    letter-spacing: 1px;
    border-radius: 4px;
    top: 60px;
    left: 600px;
}
.right .right_tilte{
    height: 30px;
    font-size: 14px;
    font-weight: bold;
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
    height: 120px;
    float: right;
    position: relative;
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
    height: 100%;
    overflow: hidden;
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