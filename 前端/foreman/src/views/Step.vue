<template>
  <div>
      <el-row type="flex" justify='start'>
        <el-col :span="8">
          <div class="h2">装修 · <em>流程</em></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify='start'>
        <el-col :span="8" class="item">
          <div class="list">
            <div class="ls">
              <ul>
                <li><a href="#" class="a"><span></span><h6>收房</h6></a></li>
                <li><a href="#" class="a"><span style="background-position: 2px -34px;"></span><h6>设计</h6></a></li>
                <li><a href="#" class="a"><span style="background-position: 2px -67px;"></span><h6>预算</h6></a></li>
                <li><a href="#" class="a"><span style="background-position: 2px -101pxpx;"></span><h6>合同</h6></a></li>
                </ul>
            </div>
          </div>
        </el-col>
         <el-col :span="8" class="item1">
           <div class="list">
             <div class="ls">
               <ul>
                 <li><a href="" class="a" ><span style="background-position: 2px -136px;"></span><h6>拆改</h6></a></li>
                 <li><a href="#" class="a"><span style="background-position: 2px --170px;"></span><h6>水电</h6></a></li>
                 <li><a href="#" class="a"><span style="background-position: 2px -262px;"></span><h6>木工</h6></a></li>
                 <li><a href="#" class="a"><span style="background-position: 2px -296pxpx;"></span><h6>竣工</h6></a></li>
               </ul>
             </div>
           </div>
         </el-col>
          <el-col :span="8" class="item2">
            <div class="list">
              <div class="ls">
                <ul>
                  <li class="l"><a href="#" class="a"><span style="background-position: -2px -383px;"></span><h6>软装</h6></a></li>
                  <li class="l" style="float: right;"><a href="#" class="a"><span style="background-position: -2px bottom;"></span><h6>入住</h6></a></li>
                </ul>
              </div>
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
.foter{
    width: 1200px;
    margin: 10px auto;
    height: 35px;
    background: url('../assets/imgs/lunbo/06.png') repeat-x center center;
}
em{
  color: red;
}
.ls .l{
  width: 124px;
  font-style: normal;
  list-style: none;
  border-style: none;
  float: left;
  width: 124px;
  color: #aec8cc;
}

a:hover{
  opacity: 0.85;
}
h6{
  margin-top: -70px;
  font-size: 14px;
}
ul{
  width: 300px;
  color: #bdb07e;
  padding: 0;
  font-style: normal;
  display: flex;
  justify-content: space-between;
}
ul li{
    float: left;
    border-width: 0 1px 0 0;
    border-style: solid;
    list-style: none;
    border-color: #ececec;
    width: 74px;
    color: #bdb07e;
    display: block;
    text-align: center;
    height: 69px;
}
ul li .a{
  display: block;
  text-align: center;
  padding: 10px 0 6px;
  color: inherit;
  text-decoration: none;
  border: 0;
  margin-top: -22px;
}
ul li a span{
  width: 26px;
  height: 26px;
  display: block;
  margin: 0 auto 7px;
  cursor: pointer;
  margin-top: 23px;
  background: url('../assets/imgs/小图标/小图标.png') no-repeat;
}
.ls{
  width: 300px;
  height: 120px;
  border: 1px solid;
  overflow: hidden;
  color: #bdb07e;
  padding-top: 25px;
  margin: 75px auto;
  position: absolute;
  left: 50%;
  top: 140%;
  margin-top: -60px;
  margin-left: -150px;
}
.h2{
    float: left;
    font-size: 30px;
    line-height: 46px;
    font-weight: bold;
    color: #242424;
}
.item{
  border: 1px solid;
  height: 380px;
  margin: 5px;
}
.item1{
border: 1px solid;
height: 380px;
margin: 5px;
}
.item2{
border: 1px solid;
height: 380px;
margin: 5px;
}
.item .list{
   background: url('../assets/imgs/index/装修前.png') no-repeat;
   padding-top: 200px;
   position: relative;
}
.item1 .list{
background: url('../assets/imgs/index/装修中.png') no-repeat;
padding-top: 200px;
position: relative;
}
.item2 .list{
background: url('../assets/imgs/index/装修后.png') no-repeat;
padding-top: 200px;
position: relative;
}
</style>