<template>
  <div class="m">
      <el-row type="flex" >
          <el-col :span='6'>
              <div class="im">
                  <img src="../assets/imgs/服务流程.png" alt="装修流程" >
              </div>
          </el-col >
          <el-col :span='18'>
              <div class="img">
                  <span class="item"></span>
                  <span class="item1"></span>
                  <span class="item2"></span>
                   <span class="item1"></span>
                  <span class="item3"></span>
                  <span class="item1"></span>
                  <span class="item4"></span>
                  <span class="item1"></span>
                  <span class="item5"></span>
                  <span class="item1"></span>
                  <span class="item6"></span>
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
    width: 80px;
    height: 112px;
    background-position: 10px 7px;
    font-size: 14px;
}
.item1{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -394px;
}
.item2{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -60px 7px;
}
.item3{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -130px 7px;
}
.item4{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -196px 7px;
}
.item5{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -264px 7px;
}
.item6{
    background: url('../assets/imgs/opos_icico.jpg') no-repeat;
    width: 80px;
    height: 112px;
    background-position: -330px 7px;
}
.item::after{
    content:"在线预约";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
}
.item2::after{
    content:"工长致电";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
}
.item3::after{
    content:"匹配工长";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
}
.item4::after{
    content:"免费量房";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
}
.item5::after{
    content:"对比方案";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
}
.item6::after{
    content:"签订合同";
    color: #484848;
    font-size: 16px;
    line-height: 24px;
    text-align: center
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
    background-color: #F5F5F5;
    border-radius: 25px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.im{
    width: 107px;
    height: 112px;
    background-color: #ffffff;
    border-radius: 25px;
    margin: 0 auto;
}
</style>>

