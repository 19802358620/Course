<template>
  <div class="back">
      <div class="title">为什么选择诚信工长</div>
      <div class="item">
          <div class="left">
          600
          <b>个</b>
          <br>
          <span>全国已开通分站城市</span>
           </div>
           <div class="left">
          30000
          <b>家</b>
          <br>
          <span>入驻商家会员超</span>
           </div>
           <div class="left">
          500
          <b>万个</b>
          <br>
          <span>已服务业主数超</span>
           </div>
           <div class="left">
          25
          <b>亿</b>
          <br>
          <span>2019年平台交易额超</span>
           </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back{
    background: url('../assets/imgs/背景.png') no-repeat;
    width: 100%;
    height: 240px;
    margin: 20px 0;
    background-position: 150px;
    position: relative;
}
.back .title{
    position: absolute;
    left: 50%;
    top: -30px;
    font-size: 26px;
    text-align: center;
    width: 300px;
    margin: 0 0 0 -150px;
}
.back .left{
    font-size: 40px;
    color: #ff4b28;
    float: left;
    width: 25%;
    text-align: center;
    line-height: 26px;
    margin-top: 30px;
}
span{
    font-size: 14px;
    color: #888;
}
b{
    font-size: 16px;
    display: inline-block;
    margin-left: 6px;
    font-weight: 100;
}
.item{
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
}

</style>