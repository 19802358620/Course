<template>
  <el-row class="user">
         <el-col :span="6" type="flex" class="row-bg" >
           <div>
             <!-- <img src="" alt=""> -->
             545444212
           </div>
         </el-col>
         <el-col :span="12" type="flex">
           <ul class="felx">
           <li class="na">
             <router-link :to="{name:'home'}"   class="a" >首页</router-link>
           </li>
           <li class="na">
             <router-link :to="{name:'foremin'}" class="a">诚信工长</router-link>
           </li>
           <li class="na">
             <router-link :to="{name:'learn'}"  class="a">学装修</router-link>
           </li>
           <li class="na">
             <router-link :to="{name:'effect'}" class="a">效果图</router-link>
           </li>
           <li class="na">
             <p :to="{name:'QA'}" class="a b">同城装修</p>
             <div class="dis">
               <router-link :to="{name:'community'}" class="disc">我的小区</router-link>
               <router-link to=""  class="disc">装修设计</router-link>
             </div>
           </li>
          </ul>
         </el-col>
         <!-- 搜索框 -->
         <el-col :span="6">
           <div class="serch">
             <!-- <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input> -->
           </div>
         </el-col>
       </el-row>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  methods:{
    hand(){
      this.$router.push({ name: 'home'})
    }
  }
}
</script>
<style scoped>
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
}
.disc:hover{
  color: #ff7d44;
}
.user{
position:fixed; 
top: 0px; 
width: 100%;
left:0;
background-color:#F5F5F5;
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
   color: black;
}
.na{
  float: left;
  list-style: none;
  position: relative;
}
.na li{
  transition: all 0.4s ease;
  float: left;
  font-size: 24px;
  padding-left: 80px;
}
.a:hover{
  color: #ff7d44;
}
</style>
