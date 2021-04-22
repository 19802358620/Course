<template>
  <div class="maincenter">
    <div class="login">
      <a href="" class="log"></a>
      <div class="tit">注册中心</div>
    </div>
    <div class="denlu">
       <div class="main860">
         <div class="denlulist">
           <div class="open"></div>
           <img src="../../assets/imgs/登录/注册3.jpg" alt="">
         </div>
         <div class="denlulister" v-if='!isreg'>
           <div class="denlul_li ">
             <span  :class="{dfg:cur==0}" @click="cur=0">
               <a >业主注册</a>
             </span>
              <span :class="{active:cur==1}"  @click="cur=1">
               <a>工长注册</a>
             </span>
           </div>
           <!-- 业主注册 -->
           <!-- <el-form  :model="user"  ref="ruleForm" label-width="5px" class="demo-ruleForm" >
              <el-form-item  prop="name"> 
                <el-input v-model="user.name" placeholder="请输入用户名"><i slot="prefix" class="el-icon-user-solid"></i></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="user.password" placeholder="请输入密码"><i slot="prefix" class="el-icon-lock"></i></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="user.passwords" placeholder="请再次输入密码"><i slot="prefix" class="el-icon-lock"></i></el-input>
              </el-form-item>
                <div class="btn">
                  <input class="sub" @click="userreg" type="button"  value="注册">
                </div>
                <div>
                  <a class="p" @click="regist">已有账号去登录</a>
                </div>
            </el-form>   -->
            <!-- 工长注册 -->
              <el-form  :model="foreman"  ref="ruleForm" :rules="rules" label-width="5px" class="demo-ruleForm" >
              <el-form-item  prop="name"> 
                <el-input v-model="foreman.name" placeholder="请输入用户名"><i slot="prefix" class="el-icon-user-solid"></i></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="foreman.pass" placeholder="请输入密码"><i slot="prefix" class="el-icon-lock"></i></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="foreman.checkPass" placeholder="请再次输入密码"><i slot="prefix" class="el-icon-lock"></i></el-input>
              </el-form-item>
                <div class="btn">
                  <input class="sub" @click="foremanReg('ruleForm')" type="button"  value="注册">
                </div>
                <div>
                  <a class="p" @click="regist">已有账号去登录</a>
                </div>
            </el-form>   
         </div>
         <div class="denlulister" v-if="isreg">
           <div class="denlul_li ">
             <span  :class="{dfg:cur==0}" @click="cur=0">
               <a >业主注册</a>
             </span>
              <span :class="{active:cur==1}"  @click="cur=1">
               <a>工长注册</a>
             </span>
           </div>
         </div>
    </div>
    </div>
  </div>
</template>
<script>
// import VDistpicker from 'v-distpicker'
export default {
  components:{
    // VDistpicker
  },
  data(){
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.foreman.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.foreman.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return{
      isreg:false,
      cur:0,
      islogin:true,//业主登录判断
      isforma:false,
      activeName: 'second',
      user:{
        name:'',
        password:'',
        passwords:''
      },
      foreman:{
        name:'',
        pass:'',
        checkPass:''
      },
      //表单验证规则
      rules: {
          pass: [
             { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
              { validator: validatePass2, trigger: 'blur' }
          ],
          name:[
            { required: true, message: '账号必填', trigger: 'blur' },
          ]
      }
    }
  },
  methods:{
    regist(){
      this.$router.push({name:"login"})
    },
    submit(){
      console.log(1111)
    },
    reg(){
      console.log(111)
      this.isreg= true
    },
    //工长注册
    foremanReg(ruleForm){
      var d = new Date();
      var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      this.foreman.createtime = str;
      console.log(this.foreman)
      this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.$Axios({
              url:'/foreman/foremanReg',
              method:'POST',
              data:this.foreman,
              success:(result=>{
                if(result){
                  this.open()
                  this.$router.push({name:'login'})
                }
              })
            })
          } else {
            return false;
          }
        });
    },
    //业主注册
    userreg(){
      if(!this.user.name||!this.user.password || !this.user.passwords){
         this.open2()
        this.user.name='';
        this.user.password='';
        this.user.passwords=''
      }else{
       this.$Axios({
         url:'/users/reg',
         method:'POST',
         data:this.user,
         success:(result)=>{
           console.log(result)
           if(result){
             this.open()
            //  this.$message.success('注册成功！')
             setTimeout( this.$router.push({name:"login"}),2000)
           }else{
             this.open1()
            //  this.$message.error('注册失败')
           }
       }
       })
      }
    },
      open() {
        this.$notify({
          title: '注册成功',
          type: 'success',
          offset:100,
        });
      },
      open1() {
        this.$notify({
          title: '注册失败',
          type: 'error',
          offset:100,
        });
      },
      open2() {
        this.$notify({
          title: '用户名密码不能为空',
          type: 'error',
          offset:100,
        });
      },
  }
  }
</script>

<style scoped>
.login{
  width: 1200px;
  height: 150px;
  margin: 0 auto;
}
.login .tit{
  width: 100px;
  height: 28px;
  line-height: 28px;
  float: left;
  margin-left: 15px;
  margin-top: 51px;
  text-align: center;
  font-size: 18px;
  color: #000;
  border-left: 1px solid #cbcbcb
}
.login .log{
   width: 370px;
   height: 90px;
   float: left;
   background: url('../../assets/imgs/工长/雪碧图.jpg') 0 -284px no-repeat;
   margin-top: 20px;
   overflow: hidden
}
.btn .sub{
  cursor:pointer;
  outline: none;
}
.btn .sub:hover{
  opacity: 0.7;
}
 .divwrap{
    height: 400px;
    overflow-y: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .divwrap>>>.distpicker-address-wrapper{
    color: #999;
  }
  .divwrap>>>.address-header{
    position: fixed;
    bottom: 400px;
    width: 100%;
    background: #000;
    color:#fff;
  }
  .divwrap>>>.address-header ul li{
    flex-grow: 1;
    text-align: center;
  }
  .divwrap>>>.address-header .active{
    color: #fff;
    border-bottom:#666 solid 8px
  }
  .divwrap>>>.address-container .active{
    color: #000;
  }
 





















.p{
  font-size: 12px;
  color: #aaa;
  float: right;
  margin-top: -65px;
  margin-bottom: -75px;
}
.text{
  font-size: 12px;
  color: inherit;
}
.btn{
  width: auto;
  height: 40px;
  line-height: 40px;
  margin: 10px 0;
  overflow: hidden;
}
.btn .sub{
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  border: 0;
  background: rgb(51, 165, 183) none repeat scroll 0% 0%;
}
a:link{
  text-decoration: none;
  border: 0;
  color: inherit;
}
.active{
   border-color: rgb(51, 165, 183);
   color: #222;
   border-bottom: 2px solid #33a5b7;
   width: 50%;
   float: right;
}
.dfg{
   border-color: rgb(51, 165, 183);
   color: #222;
   border-bottom: 2px solid #33a5b7;
   width: 50%;
   float: left;
}
.maincenter{
  margin: 0 auto;
  padding: 0;
}
.maincenter .denlu{
  height: auto;
  padding-bottom: 0;
  background: #2b90ba;
  overflow: hidden
}
.denlu .main860{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.denlu .main860 .denlulist{
  float: none;
  padding: 0;
  width: 100%;
  height: 560px;
  position: relative;
  margin: 0;
}
.denlu .main860 .denlulist .open{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
img{
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 0 0 -960px;
  width: 1920px;
  height: 560px;
}
.denlu .main860 .denlulister{
  z-index: 9;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 50px;
  width: 280px;
  padding: 0px 35px 25px 35px;
  border: 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  height: auto;
}
.denlulister .denlul_li{
  padding: 0;
  border-bottom: 0;
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
  line-height: 58px;
  width: auto;
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  position: relative;
}

</style>