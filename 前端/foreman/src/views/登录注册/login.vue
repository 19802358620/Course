<template>
  <div class="maincenter">
    <div class="login">
      <a href="" class="log"></a>
      <div class="tit">登录中心</div>
    </div>
    <div class="denlu">
       <div class="main860">
         <div class="denlulist">
           <div class="open"></div>
           <img src="../../assets/imgs/登录/login1.jpg" alt="">
         </div>
         <div class="denlulister" v-if='!isreg'>
           <div class="denlul_li ">
             <span  :class="{dfg:cur==0}" @click="cur=0">
               <a >业主登录</a>
             </span>
              <span :class="{active:cur==1}"  @click="cur=1">
               <a>工长登录</a>
             </span>
           </div>
           <!-- 业主登录 -->
           <el-form  :model="user"  ref="ruleForm"  label-width="5px" class="demo-ruleForm" hide-required-asterisk=true>
              <el-form-item  prop="name"
              :rules="[
                { required: true, message: '用户名不能为空'},
              ]"
              > 
                <el-input v-model="user.name" placeholder="请输入用户名"><i slot="prefix" class="el-icon-user-solid"></i></el-input>
              </el-form-item>
              <el-form-item prop="password"
              :rules="[
                { required: true, message: '密码不能为空'},
              ]"
              >
                <el-input type="password" v-model="user.password" placeholder="请输入密码"><i slot="prefix" class="el-icon-lock"></i></el-input>
              </el-form-item>
                <div class="btn">
                  <input class="sub" @click="userlogin('ruleForm')" type="button"  value="登录">
                </div>
                <div>
                  <a class="p" @click="regist">免费注册</a>
                </div>
            </el-form>  
            <!-- 工长登录 -->
             <!-- <el-form v-show="cur==1" status-icon  ref="ruleForm" label-width="5px" class="demo-ruleForm">
              <el-form-item>
                <el-input placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入密码"></el-input>
              </el-form-item>
                <div class="btn" >
                  <input class="sub" type="button" name="login" id="btn" value="登录" @click="submit">
                </div>
                <div>
                  <a  class="p" @click="reg">免费注册</a>
                </div>
            </el-form>  -->
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
    return{
      isreg:false,
      cur:0,
      islogin:true,//业主登录判断
      isforma:false,
      activeName: 'second',
      user:{
        name:'',
        password:'',
        modftime:''
      },
    }
  },
  methods:{
    regist(){
      this.$router.push({name:"reg"})
    },
    submit(){
      console.log(1111)
    },
    reg(){
      console.log(111)
      this.isreg= true
    },
    userlogin(ruleForm){
      var d = new Date();
      var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      this.user.modftime = str;
      this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.$Axios({
             url:'/users/login',
             method:'POST',
             data:this.user,
             success:(result)=>{
               console.log(result)
              if(result.length==0){
               this.open()
                this.user.name=''
                this.user.password=''
              }else{
                this.open1()
                window.localStorage.setItem("token",result.jwt_token)
                this.$router.push({name:"tenderadd",params:result[0]})
              }
          }
          })
          } else {
            return false;
          }
        });
    },
    open1() {
        this.$notify({
          title: '登录成功',
          type: 'success',
          offset:100,
        });
      },
       open() {
        this.$notify({
          title: '用户名或密码输入错误',
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