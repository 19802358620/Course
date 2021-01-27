<template>
<div>
  <el-carousel height="400px" indicator-position='none	'>
      <el-carousel-item v-for="item in bannerlist" :key="item">
        <img :src="item.url" alt="" style="width:100%">
      </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  props:['bannerlist'],

}
</script>

<style soped>
.banner{
  background-color: #fff;
}

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>