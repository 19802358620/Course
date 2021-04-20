<template>
  <div class="header">
      <div class="title">
          <div class="name">修改登录密码</div>
      </div>
      <div class="content">
          <div class="username">用户名：
              <span style="font-weight: bold;">{{user.name}}</span>
              </div>
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon label-width="100px" >
          <el-row>
               <el-col :span="10" :offset="6">
                   <el-form-item label="输入旧密码">
                       <el-input v-model="ruleForm.pwd" @blur='chang'  autocomplete="off"
                        ></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="10" :offset="6">
                   <el-form-item label="输入新密码" prop="pass">
                       <el-input v-model="ruleForm.pass"></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="10" :offset="6">
                   <el-form-item label="再次输入密码" prop="checkPass">
                       <el-input v-model="ruleForm.checkPass"></el-input>
                  </el-form-item>
               </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="2">
                <div class="btn">
                    <input class="in" type="button" value="确定" @click="changpwd('ruleForm')">
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
         var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
            ruleForm:{
                pwd:'',
                pass:'',
                checkPass:'',
                //表单验证规
            },
            user:'',
            rules: {
                    pass: [
                       { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
        }
    },
    methods:{
        //旧密码效验
        chang(e){
            let str = e.target.value
            let pwd = this.user.password
          if(str== pwd){
              return true
          }else{
              this.open()
              this.form.pwd=''
          }
        },
        //修改密码
        changpwd(form){
            console.log(form)
        this.$refs[form].validate((valid) => {
          if (valid) {
            //    this.$Axios({
            //     url:'/users/updatapwd',
            //     method:'POST',
            //     data:{id:this.user.id,pwd:this.from.pwd},
            //     success:(result=>{
            //         console.log(result)
            //     })
            // })
            console.log(valid)
          } else {
            return false;
          }
        });
        },
     getuser(){
        this.user = this.$route.params;
        console.log(this.name)
      },
      open() {
        this.$notify({
          title: '输入的旧密码与原密码不符',
          type: 'error',
          offset:100,
        });
      },
    },
    created(){
        this.getuser()
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