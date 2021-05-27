<template>
<div class="body">
   <div class="nav">
       <a  class="item " :class="{active:id==1}" @click="home">店铺首页</a>
       <a  class="item " :class="{active:id==2}" @click="frominfo">工长简介</a>
       <a  class="item " :class="{active:id==3}" @click="study">工地案例</a>
       <a  class="item " :class="{active:id==4}" @click="order">最新订单</a>
       <a class="item "  :class="{active:id==5}" @click="evaluation">业主评价</a>
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
            id:1,
            foreman:{},//工长信息
        }
    },
    created(){
        this.getforeman()
        this.home()
    },
    methods:{
        //获取工长信息
        getforeman(){
            this.foreman = this.$route.params;
            console.log(this.foreman)
        },
        home(){
            this.id=1
             this.$router.push({name:"index",params:this.foreman})
        },
        frominfo(){
            this.id=2
             this.$router.push({name:"frominfo",params:this.foreman})
        },
        study(){
             this.id=3
             this.$router.push({name:"study",params:this.foreman})
        },
        order(){
            this.id=4
            this.$router.push({name:"order",params:this.foreman})
        },
        evaluation(){
            this.id=5
            this.$router.push({name:"evaluation",params:this.foreman})
        }

    }
}
</script>
<style scoped>

.body{
    width: 1200px;
    height: auto;
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
     color: #01af63;
     font-weight: bold;
}
.item:hover{
    background: #2d2d2d;
}
</style>>

