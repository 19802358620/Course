<template>
  <div class="m">
      <el-row type="flex" justify='end'>
          <el-col :span='6' style="border:1px solid red;">
              <div class="im">
                  <img src="../assets/imgs/服务流程.png" alt="装修流程" >
              </div>
          </el-col >
          <el-col :span='18' style="border:1px solid;">
              <div class="img">
                  <div class="item">
                  </div>
              </div>
          </el-col>
      </el-row>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.item{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    background-size: 100%;
    width: 110px;
    height: 112px;
    border: 1px solid;
}
.m{
    width: 100%;
    margin: 0 auto;
    padding: 31px 0;
    background-color: #F5F5F5;
}
.img{
    width: 100%;
    height: 112px;
    background-color: #ffffff;
    border-radius: 25px;
    margin: 0 auto;
    border: 1px solid blue;
    display: flex;justify-content: space-around;
}
.im{
    width: 107px;
    height: 112px;
    background-color: #ffffff;
    border-radius: 25px;
    margin: 0 auto;
}
</style>>

