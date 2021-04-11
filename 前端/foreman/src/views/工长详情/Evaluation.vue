<template>
  <div>
      <left></left>
      <div class="right">
          <div class="tit">
              <h2>业主评价<strong class="st">(0)</strong></h2>
          </div>
          <div class="item">
              <div class="pj">
                  <p>{{value}}<em>分</em></p>
                  <el-rate
                     v-model="value"
                     show-text>
                  </el-rate>
              </div>
              <div class="pm">
                  <div class="it">
                      <span>满意</span>
                      <div class="line"></div>
                      <span style="text-align: left;">0%</span>
                  </div>
                  <div class="it">
                      <span>一般</span>
                      <div class="line"></div>
                      <span style="text-align: left;">0%</span>
                  </div>
                  <div class="it">
                      <span>不满意</span>
                      <div class="line"></div>
                      <span style="text-align: left;">0%</span>
                  </div>
              </div>
              <div class="pz">
                  <a href="">我要对工长点评</a>
                  <p>声明：业主点评均来自每位业主真实的装修经历感受评价。</p>
              </div>
              
          </div>
          <h3 class="h3">业主印象</h3>
          <p class="cont">{{cont}}</p>
          <div class="nav">
              <a href="" class="cur">全部</a>
              <a href="" style="margin-left: 50px;">
                  好评<span>(0)</span>
              </a>
              <a href="" style="margin-left: 120px;">
                  中评<span>(0)</span>
              </a>
              <a href="" style="margin-left: 190px;">
                  差评<span>(0)</span>
              </a>
          </div>
          <div class="cont">
              <p>暂无相关评价</p>
          </div>
      </div>
  </div>
</template>

<script>
import left from '../工长详情/fromleft'
export default {
    name:'Evaluation',
    components:{
        left
    },
    data(){
        return{
            value:'0.0',
            cont:'暂无印象'
        }
    }

}
</script>

<style scoped>
.right .cont p{
    width: 100%;
    margin-bottom: 30px;
    color: #a5a5a5;
    padding-top: 16px;
}
.right .cont{
    padding-bottom: 22px;
    overflow: hidden;
}
.right .nav .cur{
color: #ff4400;
}
.right .nav a{
    display: block;
    float: left;
    margin-right: 20px;
    cursor: pointer;
    position: absolute;
    top: -65px;
}
.right .nav a span{
    color: #a5a5a5;
    padding: 0 3px; 
}
.right .nav{
    width: 900px;
    height: 30px;
    border-bottom: 1px solid #e8e8e8;
    font-size: 14px;
    margin-top: -110px;
    position: relative;
}
.right .cont{
    width: 100%;
    margin-bottom: 30px;
    color: #a5a5a5;
    font-size: 12px;
    text-align: left;
    margin-top: -75px;
   
}
.right .h3{
    color: #6c6c6c;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 16px;
    width: 100%;
    line-height: 100%;
    text-align: left;
}
.right .item .pz p{
    color: #666;
    line-height: 18px;
    margin-top: 5px;
    font-size: 12px;
}
.right .item .pz a{
    width: 180px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    font-size: 14px;
    background: #ff8016;
    display: block;
    text-align: center;
}
.right .item .pz{
    float: left;
    height: 80px;
    overflow: hidden;
    width: 180px;
    padding: 0 30px;
    margin-left: 40px;
}
.line{
    width: 160px;
    height: 10px;
    background: #e5e5e5;
    float: left;
    margin: 2px 5px;
    overflow: hidden;
}
.right .item .pm .it span{
    width: 70px;
    color: #666;
    line-height: 14px;
    float: left;
    display: block;
    text-align: right;
}
.right .item .pm .it{
    margin-bottom: 13px;
    float: left;
    margin-top: 5px;
    font-size: 12px;
}
.right .item .pm{
    float: left;
    height: 80px;
    overflow: hidden;
    width: 320px;
    border-right: 1px dashed #e6e6e6;
}
.right .item .pj em{
    font-size: 12px;
    color: #999;
    font-style: normal;
    padding-left: 5px;
}
.right .item .pj p{
    font-size: 36px;
    color: #01af63;
    line-height: 100%;
    margin-top: 10px;
}
.right .item .pj{
    float: left;
    height: 80px;
    overflow: hidden;
    width: 225px;
    border-right: 1px dashed #e6e6e6;
    padding-left: 20px;
}
.right .item{
    width: 900px;
    height: 80px;
    padding: 25px 0;
    overflow: hidden;
    margin-bottom: 30px;
    border: 1px solid #aaa;
    margin-top: 10px;
}
.right{
    width: 900px;
    float: right;
    border: 1px solid #d6d6d6;
    padding: 0 14px;
    height: auto;
    position: relative;
}
.right .tit{
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #bbbbbb
}
.right .tit h2{
    color: #01af63;
    float: left;
    font-size: 16px;
    font-weight: bold;
}
.right .tit .st{
    color: #ff4400;
    font-weight: bold;
}
</style>