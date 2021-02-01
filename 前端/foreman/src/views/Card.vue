<template>
  <div>
       <el-row type="flex" justify='start' class="p">
          <el-col :span="8">
              <div class="h2">重庆 · <em>工长</em></div>
          </el-col>
          <el-col :span="16">
              <router-link class="a" :to="{name:'foremin'}">更多>></router-link>
          </el-col>
     </el-row>
     <div class="list">
         <a class="item">
             <img src="../assets/imgs/index/人物.png" alt="">
             <span>简介</span>
         </a>
          <a class="item">
              <img src="../assets/imgs/index/人物.png" alt="">
              <span>简介</span>
          </a>
          <a class="item">
              <img src="../assets/imgs/index/人物.png" alt="">
              <span>简介</span>
          </a>
          <a class="item">
              <img src="../assets/imgs/index/人物.png" alt="">
              <span>简介</span>
          </a>
          <a class="item">
              <img src="../assets/imgs/index/人物.png" alt="">
              <span>简介</span>
          </a>
          <a class="item">
              <img src="../assets/imgs/index/人物.png" alt="">
              <span>简介</span>
          </a>
         
     </div>
     <div class="foter"></div>
  </div>
</template>

<script>
export default {
    methods:{
        hand(){
            this.$router.push({name:'foremin'})
        }
    }

}
</script>

<style scoped>
.a{
    position: absolute;
    top: -56px;
    right: 16px;
    color: #aaa;
    text-decoration: none;
     font-size: 14px;
}
.a:hover{
    color: red;
}
.p{
    position: relative;
}
.item:hover span{
    display: block;
}
.list{
    display: flex;
    width: 1200px;
    justify-content:space-around;
    flex-wrap:wrap;
    margin: 20px auto;
    overflow:hidden;
}
.list .item{
    width: 180px;
    height: 250px;
    margin: 2px;
    box-shadow: 2px 2px 10px #f5f5f5f5;
    position: relative;
    display: block;
    border-radius: 10px;
}
.list .item img:hover{
    transform:scale(1.2);
}
.list .item img{
    transition:all .2s;
    width:100%;
}
.item span{
    text-align: center;
    font-size: 12px;
    transition: 0.2s;
    padding: 10px 25px;
    line-height: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
    background: rgba(34,34,37,0.51);
    display: none;
}

</style>