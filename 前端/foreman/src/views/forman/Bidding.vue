<template>
  <div class="m" :style="{height:`${height}px`}">
      <div class="left">
          <table class="tab">
              <tbody>
                  <tr>
                      <td colspan="5"><h1>重庆市</h1></td>
                  </tr>
                  <tr>
                      <td>投标编号：123456</td>
                      <td>发布时间：2021-2-3</td>
                      <td>订单状态：<span>招标中</span></td>
                      <td>承包方式：</td>
                  </tr>
                  <tr>
                      <td>房屋类别：家装</td>
                      <td>房屋空间：住宅公寓</td>
                      <td>房屋现状：毛坯房</td>
                      <td>装修面积：30（平米）</td>
                  </tr>
                  <tr>
                      <td>户型结构：其他结构</td>
                      <td>装修风格：现代轻奢</td>
                      <td>房屋用途：出租</td>
                      <td> 	装修预算：面议</td>
                  </tr>
                  <tr>
                      <td colspan="2">所在地区：云龙区</td>
                      <td colspan="2">街道/小区：万达</td>
                  </tr>
                  <tr>
                      <td colspan="2">量房时间：请工长提前电话联系业主沟通，本周周五，或下周二，三可以约量房。</td>
                      <td colspan="2">动工时间：2021-02-20</td>
                  </tr>
                  <tr>
                      <td colspan="4">
                          业主要求：公寓，毛坯房，已经交房了，装修风格喜欢现代，轻奢，装修用于对外出租，做民宿<br>
                          全屋整装，要求拎包入住<br>
                          如果有合适的工长，计划尽快动工装修<br>
                          请工长提前电话联系业主沟通，（手机号也是微信号）本周周五，或下周二，三可以约量房。<br>
                          工长联系业主时请说明是诚信工长网站推荐的<br>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4">备注：百度搜索无异常,微信搜索无异常,已告知保险服务</td>
                  </tr>
                  <tr>
                      <td colspan="4">
                          投标公司要求：<br>
                          <font style="color: #F15517;font-weight: bold">
                              1、经工商注册的正规本地公司<br>
                              2、已通过装信通认证的无业主投诉与差评的精品装修公司
                          </font>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4" style="text-align: center;height: 50px;">
                          <span>
                              <a href="#"><el-button style="width:210px;border:1px solid red">我要投标</el-button></a>
                          </span>

                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="right">
          待设计
      </div>
      <div class="fot">
          待设计
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
        }
    }
}
</script>

<style scoped>
.fot{
    width: 100%;
    border: 1px solid gold;
    height: 2165px;
    position: absolute;
    top: 782px;
}
.right{
    width: 250px;
    height: 781px;
    border: 1px solid blue;
    float: right;
}
.el-button:hover {
    color: red;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
span{
    color: #F15517;
}
.m{
    width: 1200px;
    border: 1px solid #f5f5f5;
    margin: 20px auto;
    overflow: hidden;
    position: relative;
}
.m .left{
    width: 940px;
    float: left;
    border: 1px solid #f5f5f5;
    height: 781px;
}
.left .tab{
    margin: 0 auto;
    border-collapse: collapse;
    width: 100%;
    text-align: left;
}
.tab td{
    border: 1px solid #F0F0F0;
    line-height: 28px;
    padding: 15px 10px;
    font-size: 14px;
}
h1{
    font-size: 18px;
    font-weight: 700;
    float: left;
}
</style>