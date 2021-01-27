<template>
  <div>
      <el-row type="flex" justify='start'>
        <el-col :span="8">
          <div class="h2">装修 · 资讯</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify='start'>
        <el-col :span="8" class="item">
          <div class="list">
            <div>
              <ul>
                <li>
                  <a href="#">
                    <span class="sp"></span>
                  </a>
                </li>
                <li>75757</li>
                <li>75757</li>
                <li>75757</li>
              </ul>
            </div>
          </div>
        </el-col>
         <el-col :span="8" class="item1">
           <div class="list">7757</div>
         </el-col>
          <el-col :span="8" class="item2">
            <div class="list">7757</div>
          </el-col>
      </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sp{
  background: url('../assets/imgs/小图标/小图标.png');
  background-position: 0 0;
}
ul li a{
  display: block;
  text-align: center;
  padding: 10px 0 6px;
  color: inherit;
}
ul{
  display: block;
  list-style: none;
  font-style: normal;
  margin: 0;
  padding: 0;
  color: #bdb07e;
  text-align: center;
}
ul li{
  float: left;
  border-width: 0 1px 0 0;
  border-style: solid;
  list-style: none;
  border-color: #ececec;
  width: 74px;
  display: block;
  list-style: none;
  font-style: normal;
  margin: 0;
  padding: 0;
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
  height: 300px;
  margin: 5px;
}
.item1{
border: 1px solid;
height: 300px;
margin: 5px;
}
.item2{
border: 1px solid;
height: 300px;
margin: 5px;
}
.item .list{
   background: url('../assets/imgs/index/装修前.png') no-repeat;
   padding-top: 200px;
}
.item1 .list{
background: url('../assets/imgs/index/装修中.png') no-repeat;
padding-top: 200px;
}
.item2 .list{
background: url('../assets/imgs/index/装修后.png') no-repeat;
padding-top: 200px;
}
</style>