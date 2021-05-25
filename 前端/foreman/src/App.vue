<template>
<div>
<el-container>
     <!-- <el-header class='nav' height='80px'>
       <el-row type="flex" class="row-bg" >
          <el-col :span="8" >
            <div>
              <span><i class="el-icon-location-information"></i> 当前城市：</span>
              地区选择器
              <span>PICC 中国人保提供承保服务</span>
            </div>
            </el-col>
            <el-col :span="16" :offset='4'>
              <div>
                <i class="el-icon-phone"></i>
                <span style='color:red'>123456</span>
              </div>
            </el-col>
       </el-row>
     </el-header> -->
     <!-- 导航栏 -->
     <el-header height='80px' style="background-color:#f5f5f5;">
       <Nav></Nav>
     </el-header>
     <!-- 导航栏完 -->
     <el-main>
       <!-- 视图渲染 -->
       <router-view></router-view>
     </el-main>
     <el-footer>
       <!-- 页脚 -->
       <Fotter></Fotter>
     </el-footer>
  </el-container>
</div>
</template>
<script>
import Nav from './views/Nav'
import Fotter from './views/fotter'
export default {
  name: 'App',
  components:{
    Nav,
    Fotter
  },
  data(){
    return{
      height:document.documentElement.clientHeight,
      input:'',//搜索框绑定的值
    }
  }
}
</script>
<style  scoped>
  .nav{
    background: #F5F5F5;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    height: 80px;
  }
  .el-header{
  background-color: #F5F5F5;
  color: #333;
  text-align: center;
  line-height: 80px;
  }
  .el-footer{
    padding: 0;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
    overflow: hidden;
  }
</style>

