<template>
  <div>
       <el-row type="flex" justify='start'>
          <el-col :span="8">
              <div class="h2">重庆 · <em>工长</em></div>
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

}
</script>

<style scoped>
em{
    color: red;
}
.item:hover span{
    display: block;
}
.foter{
    width: 1200px;
    margin: 10px auto;
    height: 35px;
    background: url('../assets/imgs/lunbo/06.png') repeat-x center center;
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
.h2{
    float: left;
    font-size: 30px;
    line-height: 46px;
    font-weight: bold;
    color: #242424;
}

</style>