<template>
  <div class="header">
      <div class="title">
          <div class="name">修改登录密码</div>
      </div>
      <div class="content">
          <div class="username">用户名：
              <span style="font-weight: bold;">{{name}}</span>
              </div>
          <el-form ref="form" :model="form" label-width="90px">
          <el-row>
               <el-col :span="10" :offset="6">
                   <el-form-item label="输入旧密码">
                       <el-input ></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="10" :offset="6">
                   <el-form-item label="输入新密码">
                       <el-input ></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="10" :offset="6">
                   <el-form-item label="输入新密码">
                       <el-input ></el-input>
                  </el-form-item>
               </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="2">
                <div class="btn">
                    <input class="in" type="button" name="" id="" value="确定">
                </div>

            </el-col>
        </el-row>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            from:{},
            name:'张三三'
        }
    }

}
</script>

<style scoped>
.btn .in{
    float: left;
    display: block;
    width: 195px;
    height: 36px;
    line-height: 36px;
    background: #ff4400;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 14px;
}
.in:focus{
    outline: none;
}
.btn{
    height: 36px;
    line-height: 36px;
    padding: 20px 0 0 130px;

}
.content .username{
    line-height: 36px;
    margin-bottom: 12px;
    overflow: hidden;
    text-align: center;
    margin-left: -139px;
    
}
.header .content{
    width: 60%;
    height: 300px;
    margin: 20px auto;
}
.header{
    width: 98%;
    height: 400px;
    border: 1px solid #eee;
    margin: 0 10px;
}
.header .title{
    height: 35px;
    padding-top: 20px;
    border-bottom: 1px dotted #e8e8e8;
    margin-left: 2px;
}
.header .title .name{
    float: left;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 12px;
    border-left: 2px solid #01af69
}

</style>