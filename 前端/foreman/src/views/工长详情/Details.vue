<template>
  <div>
      <left></left>
      <div class="right">
       <div class="name-title">
           <strong>STAR</strong>
           <h1 class="h1">明星工长</h1>
           <h1 class="hh">张三三</h1>
       </div>
       <div class="content">
          <p>各位业主大家好，我是好工长网认证的高级工长何本涛，大家可以叫我何工。
   本人从事装修行业12年，自己有长期稳定专业的施工团队！精通室内设计施工各个环节，本人诚实守信，为客户节约成本。设计施工一条龙服务。先做人后做事，用良心做工程。
   免费上门量房，出基础方案，做装修预算，解答装修常识。自觉做到重合同，守信用！
   您放心把房交给我，回报您一个温馨、时尚、经济、适用的家，您的满意是我最大的愿望！</p>
      </div>
   </div>
  </div>
</template>

<script>
import left from '../工长详情/fromleft'
export default {
    name:'Details',
    components:{
        left,
    }

}
</script>

<style scoped>
.right{
    width: 900px;
    float: right;
    border: 1px solid #d6d6d6;
    padding: 0 14px;
    height: 538px;
}
.right .name-title{
    padding-left: 20px;
    height: 84px;
    border-bottom: 1px solid #bbbbbb;
    position: relative;
}
strong{
    width: 100%;
    color: #c9c9c9;
    font-family: Arial;
    font-size: 18px;
    display: inline-block;
    line-height: 26px;
    margin-top: 8px;
    font-weight: bold;
    margin-top: -14px;
    position: absolute;
    left: 10px;
    text-align: left;
    top: 20px;
}
.right .content{
    padding-top: 30px;
    font-size: 14px;
    line-height: 22px;
}
.hh{
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    color: #ffffff;
    background: #01af63;
    display: block;
    font-size: 18px;
    float: left;
    margin-top: 40px;
    font-weight: bold;
}
.h1{
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    color: #ffffff;
    background: #000000;
    display: block;
    font-size: 18px;
    font-weight: bold;
    float: left;
    margin-top: 40px;
    margin-left: -12px;
}
</style>