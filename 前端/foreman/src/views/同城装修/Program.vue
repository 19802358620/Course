<template>
  <div class="m">
      <div class="my_head">
          <div class="img">
              <img src="../../assets/imgs/我的小区/方案.jpg" alt="">
          </div>
          <div class="right">
              <div class="title">
                  <h3 class="h3">东方蓝海中心</h3>
              </div>
              <div class="item">
                  <span class="list ma">
                      <font class="font">开发商：</font>
                      北京东方蓝海置业有限责任公司
                  </span>
                  <span class="list01 ma">
                      <font class="font">地址：</font>
                      未来科技城南区内科技城路与南区一路交界处
                  </span>
                  <span class="list02 ma">
                      <font class="font">开盘时间：</font>
                      2017-09-27
                  </span>
                  <span class="list03 ma">
                      <font class="font">竣工时间：</font>
                      2019-12-01
                  </span>
              </div>
          </div>
      </div>
      <div class="p_nav">
          <!-- <li v-for="item in nav" :key='item.id' @click="hand(item.id)"
          :class="{er:seleId == item.id}"
          ><a href="#">{{item.t}}</a></li> -->
         
          <li id='1' class="er"><router-link  :to='{name:"ind"}'>首页</router-link></li>
          <li id='2' > <router-link  :to='{name:"type"}'>户型图</router-link></li>
          <li id='3' ><router-link  to='/'>样板间</router-link></li>
          <li id='4' ><router-link  to='/'>楼盘概况</router-link></li>
      </div>
      <div class="p_main">
          <router-view></router-view>
      </div>
      
  </div>
</template>

<script>
export default {
    props:['paogramId'],
    methods:{
        hand(val){
            console.log(val);
            this.seleId = val;
        }
    },
    data(){
        return{
            nav:[
                {id:1,t:'首页'},
                {id:2,t:'户型图'},
                {id:3,t:'样板间'},
                {id:4,t:'楼盘概况'},
            ],
            seleId:1,//选择的选项
        }
    },
    created(){
        this.$router.push({name:'ind'})
    }

}
</script>

<style scoped>
.p_main{
    width: 100%;
    border: 1px solid pink;
    height: auto;
    margin-top: 10px;
}
.p_nav{
    width: 100%;
    margin: 25px auto 0px auto;
    border: 1px solid #EAEAEA;
    padding: 0px;
    background-color: #fafafa;
    height: 60px;
}
.p_nav li{
    font-size: 16px;
    border-right: 1px solid #EAEAEA;
    text-align: center;
    list-style: none;
    display: block;
    float: left;
    width: 110px;
    height: 54px;
    overflow: hidden;
    line-height: 20px;
}
.p_nav li a {
    display: block;
    margin: 0 auto;
    padding: 15px 20px;
    color: #444;
}
.p_nav li a:hover{
    color: #F76D4E;
}
.er{
    border-top: 2px solid #F76D4E;
    line-height: 22px;
    background-color: #FFFFFF;
    margin-top: -1px;
}
.ma{
    margin-top: 10px;
}
.list{
    position: absolute;
    top: -65px;
    left: 0;
    font-size: 12px;
}
.list01{
    position: absolute;
    top: -45px;
    left: 0;
    font-size: 12px;
}
.list02{
    position: absolute;
    top: -25px;
    left: 0;
    font-size: 12px;
}
.list03{
    position: absolute;
    top: -5px;
    left: 0;
    font-size: 12px;
}
.font{
    color: #888888;
    font-size: 12px;
}
.my_head{
    width: 100%;
    height: 140px;
    border: 1px solid;
    background-color: #FAFAFA;
    padding: 25px;
}
.img{
    width: 200px;
    height: 140px;
    float: left;
    margin-right: 25px;
}
img{
    width: 100%;
    height: 100%;
}
.my_head .right{
    float: left;
    width: 900px;
    height: 140px;
    position: relative;
}
.title{
    position: absolute;
    top: -70px;
}
.title .h3{
    font-size: 24px;
    font-weight: normal;
    color: #333333;
}
.right .item{
    width: 100%;
    height: 110px;
    position: relative;
    margin-top: 30px;
}
</style>