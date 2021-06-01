<template>
  <el-row class="user">
         <el-col :span="6" type="flex" class="row-bg" >
           <div class="city">
             当前城市：
             <i class="img"></i>
             {{city}}
             <span style="color: #02ae62;cursor: pointer;">[切换]</span>
             <!-- <div class="area">
               <v-region type="city" blank=false ></v-region>
             </div> -->
           </div>
         </el-col>
         <el-col :span="10" type="flex">
           <ul class="felx">
           <li class="na" @click="home" :class="{active:id==0}">
             <a   class="a" >首页</a>
           </li>
           <li class="na" @click="foreman" :class="{active:id==1}">
             <a  class="a" >诚信工长</a>
           </li>
           <li class="na" @click="incenter" :class="{active:id==2}">
             <a   class="a">信息中心</a>
           </li>
           <li class="na" @click="effect" :class="{active:id==3}">
             <a  class="a">效果图</a>
           </li>
           <li class="na">
             <p :to="{name:'QA'}" class="a b">同城装修</p>
             <div class="dis">
               <router-link :to="{name:'community'}" class="disc">我的小区</router-link>
               <router-link :to="{name:'design'}"  class="disc">装修设计</router-link>
             </div>
           </li>
           <!-- <li class="li">
             <router-link class="j dc" :to="{name:'login'}">登录</router-link>
             <router-link class="j dc" :to="{name:'reg'}">注册</router-link>
           </li> -->
          </ul>
         </el-col>
         <!-- 搜索框 -->
         <el-col :span="6">
           <div class="serch">
              <el-input placeholder="请输入想要查找的工长" v-model="input3" class="input-with-select" clearable=true>
              <el-button slot="append" icon="el-icon-search" class="btn" style="background-color: #b90000"></el-button>
           </el-input>
           </div>
         </el-col>
         <el-col :span="2">
           <router-link class="j dc" :to="{name:'login'}">登录</router-link>
             <router-link class="j dc" :to="{name:'reg'}">注册</router-link>
         </el-col>
       </el-row>
</template>

<script>
// import VDistpicker from 'v-distpicker'
// import vgerion from 'v-region'
export default {
  name: 'Home',
  components: {
    // VDistpicker
    // vgerion
  },
  data(){
    return{
      input3:'',
      city:'重庆',
      id:0,//导航演示判断
    }
  },
  methods:{
    //首页
    home(){
      this.id =0
      this.$router.push({ name: 'home'})
    },
    //工长
    foreman(){
      this.id=1;
       this.$router.push({ name: 'foremin'})
    },
    //信息中心
    incenter(){
      this.id=2;
       this.$router.push({ name: 'incenter'})
    },
    //效果图
    effect(){
      this.id=3
       this.$router.push({ name: 'effect'})
    }
  },
  created(){
    this.home()
  }
}
</script>
<style scoped>
.active{
   background-color: #d20a05;
   color: #ff7d44;
}
.area{
  width: 32%;
  border: 1px solid;
  top: 50px;
  left: 163px;
  position: absolute;
}
.city .img{
  width: 12px;
  height: 12px;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background: url('../assets/imgs/工长/ico-bg.png') no-repeat;
  margin-right: 5px;
  background-position: -200px -110px !important;
}
.city{
  color: white;
  font-size: 12px;
  position: relative;
}
.input-with-select{
  width: 65%;
}
.dc:hover{
  color: #ff7d44;
}
.j{
  margin: 0 10px;
  color:white;
  font-size: 12px;
  float: left;
}
.li{
  font-size: 12px;
}
.Noprint {
     DISPLAY: none
 }
p:hover{
  cursor: default;
}
.na:hover .dis{
  display: block;
  
}
.dis{
  display: none;
  position: absolute;
  top: 55px;
}
.disc{
  transition: .2s;
  width: 100%;
  font-size: 14px;
  margin: 0 auto;
  display: block;
  float: left;
  text-align: center;
  line-height: 32px;
  color: black;
}
.disc:hover{
  color: #9c0c0c;
  font-weight: bold;
  background-color: #d20a05;

} 
.user{
position:fixed; 
top: 0px; 
width: 100%;
left:0;
background-color:#b90000;
z-index: 9999;
}
.felx{
  display: flex;
  justify-content:space-between;
  flex-direction: row;
  font-size: 24px;
}
.a{
   text-decoration:none;
   font-size: 20px;
   color: white;
}
.na{
  /* float: left; */
  list-style: none;
  position: relative;
  display: inline-block;
  width: 80px;
}
.na:hover{
  background-color: #d20a05;
  color: #ff7d44;
}
.na li{
  transition: all 0.4s ease;
  float: left;
  font-size: 24px;
  padding-left: 80px;
}
/* .a:hover{
  color: #ff7d44;
} */
</style>
