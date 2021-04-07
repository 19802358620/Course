<template>
  <div style="height:530px">
      <el-row type="flex" justify='start' class="p">
          <el-col :span="8">
              <div class="h2">装修 · <em>效果</em></div>
          </el-col>
            <el-col :span="16">
              <a href="#" class="a">更多>></a>
          </el-col>
     </el-row>
          <el-row type="flex" justify='start' >
              <el-col :span='8' >
                    <div class="item" >
                        <el-carousel height="412px" style="width:320px;" indicator-position='none'>
                            <el-carousel-item v-for="item in 4" :key="item">
                              <img src="../assets/imgs/qwe66.png"  alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
              </el-col>
              <el-col :span='16'>
                  <div class="b">
                      <a class="i">
                          <img src="../assets/imgs/10.png" alt="">
                          <span>风格</span>
                      </a>
                      <a class="i">
                          <img src="../assets/imgs/10.png" alt="">
                          <span>风格</span>
                      </a>
                      <a class="i">
                          <img src="../assets/imgs/10.png" alt="">
                          <span>风格</span>
                      </a>
                      <a class="i act">
                          <img src="../assets/imgs/10.png" alt="">
                          <span>风格</span>
                      </a>
                      <a class="i">
                          <img src="../assets/imgs/10.png" alt="">
                          <span>风格</span>
                      </a>
                      <a class="i">
                          <img src="../assets/imgs/index/立即前往.png" alt="">
                          <span>风格</span>
                      </a>
                  </div>
              </el-col>
      </el-row>
      <div class="foter"></div>
  </div>
</template>

<script>
export default {

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

.act{
    width: 335px;
}
.i:hover span{
    display: block;
}
.i{
    height: 202px;
    width:275px;
    position: relative;
}
.i span{
    text-align: center;
    font-size: 18px;
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
.b .i img{
 display: block;
 width: 100%;
 height: 100%;
}

.c .tit{
    padding-left: 20px;
    font-size: 18px;
    color: #242424;
    position: relative;
}
.c .sp{
    display: block;
    position: absolute;
    left: 0;
    top: 10%;
    margin-top: -9px;
    width: 4px;
    height: 18px;
    background-color: #ff3406;
    border-radius: 10px;
}
.c{
    width: 360px;
    overflow: hidden;
    float: right;
    border: 1px solid;
    margin-top: 20px;
    height: 412px;
    text-align: left;
}
.er a{
    font-size: 18px;
    color: #222;
    font-weight: bold;
}
.liur a:hover{
    text-decoration: underline;
    color: #ff7031 ;
}
.liur{
    margin: 0;
    position: relative;
    line-height: 36px;
    height: 36px;
    color: #444;
    margin-bottom: 2px;
    font-size: 16px;
}
.liur span{
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    background: #d6d6d6;
    border-radius: 50%;
    margin: -2px 6px 0 6px;
}
.liur a{
    display: block;
    margin: 0;
    font-size: 16px;
}
.b{
   width: 845px;
   overflow: hidden;
   float: left;
   border: 1px solid #f5f5f5;
   height: 412px;
   margin-top: 20px;
   margin-left: -60px;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
}

.item{
    width: 320px;
    height: 412px;
    padding-top: 20px;
}
</style>