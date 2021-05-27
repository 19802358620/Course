<template>
  <div>
      <left></left>
      <div class="right">
       <div class="name-title">
           <strong>STAR</strong>
           <h1 class="h1">明星工长</h1>
           <h1 class="hh">{{foreman.name}}</h1>
       </div>
       <div class="content">
          <p style="text-align: left;">{{foreman.Introduction}}</p>
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
    },
    data(){
        return{
            foreman:{},//工长信息
        }
    },
    methods:{
        //获取工长信息
        getforemn(){
            this.foreman = this.$route.params;
        }
    },
    created(){
        this.getforemn()
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