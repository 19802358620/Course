<template>
  <div class="m border">
       <div class="warp">
          <p class="title">诚信工长装修流程</p>
          <div class="sp_t">
              好工长互联网装修仅需6小步，轻松装修省时省力又省心 
          </div>
      </div>
      <div class="list">
          <ul class="left">
              <li class="li">
                  <p style="color: #fff;font-size: 36px;margin-bottom: 6px;">1080</p>
                  <span style="color: #fff;font-size: 14px;">今日报名装修业主</span>
              </li>
              <li class="li">
                  <p style="color: #fff;font-size: 36px;margin-bottom: 6px;">1080</p>
                  <span style="color: #fff;font-size: 14px;">工长入驻人数</span>
              </li>
              <li class="li">
                  <p style="color: #fff;font-size: 36px;margin-bottom: 6px;">1080</p>
                  <span style="color: #fff;font-size: 14px;">发布招标信息</span>
              </li>
          </ul>
          <ul class="time">
              <li>Lorem, ipsum dolor.</li>
              <li>Soluta, maiores ab?</li>
              <li>Quis, quasi ea.</li>
              <li>Nam, nihil consequuntur!</li>
          </ul>
          <a  class="yuyue" @click="setforeman">立即预约工长</a>
      </div>
      <div style="margin-bottom: -20px;">
          <img src="../../assets/imgs/流程01.gif" alt="" style="width: 1220px;height: 245px;">
      </div>
      <div class="foter"></div>
  </div>
</template>
0


<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        //预约工长
        setforeman(){
            this.$router.push('foremin')
        },
        //循环滚动列表
         doscroll(){
             let ul = document.getElementById('#time');
             let first = ul.find('li:first');
             let height = first.height();
         first.animate({
         height: 0 //或者改成： marginTop: -height + 'px'
         }, 500, function() {// 动画结束后，把它插到最后，形成无缝
         first.css('height', height).appendTo(ul);
         // $first.css('marginTop', 0).appendTo($parent);
         });
         },
        //  setInterval(function(){doscroll()}, 3000);
    },
    created(){
        setInterval(this.doscroll(),3000)
    }

}
</script>

<style scoped>
.time{
    float: left;
    margin-top: 22px;
    font-size: 14px;
    line-height: 14px;
    margin-left: 60px;
}
.yuyue{
    display: block;
    width: 243px;
    height: 48px;
    float: right;
    background: #fff600;
    font-size: 18px;
    color: #009353;
    line-height: 48px;
    box-shadow: 5px 5px 0 rgba(0,131,74,.45);
    margin-top: 26px;
    margin-right: 37px;
}
.border{
    border: none;
}
.list .left .li{
    height: 51px;
    float: left;
    color: #fff;
    border-right: 1px solid #00ab61;
    padding: 0 50px;
    line-height: 27px
}
.list .left{
    float: left;
    padding: 24px 0;
}
.list{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    background: #1ac078;
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