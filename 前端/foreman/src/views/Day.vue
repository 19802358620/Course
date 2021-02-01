<template>
  <div>
       <el-row type="flex" justify='start' class="p">
          <el-col :span="8">
              <div class="h2">装修 · <em>日记</em></div>
          </el-col>
            <el-col :span="16">
              <a href="#" class="a">更多>></a>
          </el-col>
     </el-row>
    <div class="list">
        <a class="item"><img src="../assets/imgs/11.png" alt=""><span>装修日记-简约风格</span></a>
        <a class="item"><img src="../assets/imgs/11.png" alt=""><span>装修日记-简约风格</span></a>
        <a class="item"><img src="../assets/imgs/11.png" alt=""><span>装修日记-简约风格</span></a>
        <a class="item"><img src="../assets/imgs/11.png" alt=""><span>装修日记-简约风格</span></a>
        <a class="item"><img src="../assets/imgs/11.png" alt=""><span>装修日记-简约风格</span></a>
    </div>

    
     <div class="foter"></div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
span{
    width: 100%;
    height: 30px;
    position: absolute;
    top: 126px;
    display: block;
    font-size: 14px;
    color: #969696;
}
.list{
    display: flex;
    justify-content: space-around;
    width: 1200px;
    height: 230px;
    box-sizing: border-box;
}
.item{
    display: block;
    width: 240px;
    height: 220px;
    margin: 0 2px;
    position: relative;
}
.item:hover{
    opacity: 0.88;
    cursor: pointer;
}
.bt{
    display: block;
    width: 100%;
    height: 186px;
    border: 1px solid;
}
.btn img{
    width: 100%;
    height: 150px;
}
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



</style>