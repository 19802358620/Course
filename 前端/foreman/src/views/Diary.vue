<template>
<div>
    <el-row type="flex" justify='start' style="border:1px solid">
          <el-col :span="8">
              <div class="h2">装修 · <em>日记</em></div>
          </el-col>
          <el-col :span="16" style="position: relative">
               <a href="#" class="item">更多 ></a>
          </el-col>
     </el-row>
     <el-row type="flex" justify='start'>
         <el-col :span="4">
             <div>
                 <img src="../assets/imgs/11.png" alt="">
             </div>
             <el-col>
         <el-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item{
    float: right;
    position: absolute;
    top: -57px;
    right: 0;
}
em{
    color: red;
}
.h2{
    float: left;
    font-size: 30px;
    line-height: 46px;
    font-weight: bold;
    color: #242424;
}

</style>