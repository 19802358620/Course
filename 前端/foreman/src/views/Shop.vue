<template>
<div class="body">
   <div class="nav">
       <router-link :to="{name:'index'}" class="item active">工长主页</router-link>
       <router-link :to="{name:'frominfo'}" class="item active">工长简介</router-link>
       <router-link to="#" class="item active">最新订单</router-link>
       <router-link to="#" class="item active">业主评价</router-link>
   </div>
   <div class="m">
       <!-- 嵌套视图 -->
       <router-view></router-view>
   </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            index:'',
        }
    }
}
</script>
<style scoped>
.m{
    margin: 10px 0;
    height: 800px;
}
.body{
    width: 1200px;
    height: 1300px;
    border: 1px solid red;
    margin: 20px auto;
    overflow: hidden;
}
.nav{
    width: 1200px;
    height: 40px;
    line-height: 40px;
    background: #444;
    border-top: 2px solid #01af63;
    display: flex;
    justify-content: space-around;
}
.item{
    color: #fff;
    font-size: 14px;
    color: #fff;
    padding: 0 30px;
}
.active{
     background: #2d2d2d;
}
.item:hover{
    background: #2d2d2d;
}
</style>>

