<template>
  <div>
       <div class="title">
          <div class="name">完善个人资料</div>
      </div>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px">
              <el-row>
                <el-col :span="6"></el-col>
                <el-col :span="6">1212</el-col>
                <el-col :span="6">1212</el-col>
                <el-col :span="6">1212</el-col>
              </el-row>
          </el-form>
      </div>

      <!-- {{this.$route.params.name}} -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    width: 98%;
    height: 600px;
    border: 1px solid;
    margin: 10px 0;
}
.title{
    height: 35px;
    padding-top: 20px;
    border-bottom: 1px dotted #e8e8e8;
    margin-left: 2px;
}
.title .name{
    float: left;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 12px;
    border-left: 2px solid #01af69
}

</style>