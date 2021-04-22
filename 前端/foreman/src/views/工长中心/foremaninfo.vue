<template>
  <div>
       <div class="title">
          <div class="name">完善个人资料</div>
      </div>
      <div class="content">
          
          <el-form ref="form" :model="foreman" label-width="90px" :rules="rules" class="form">
              <el-row>
                <el-col :span="24">
                    <span class="shang">上传头像：</span>
                    <div class="img">
                   <el-upload
                        class="avatar-uploader"
                        action="http://localhost:3000/users/img"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                   <span class="yao">仅支持JPG、GIF、PNG图片文件，且文件小于2M</span>
                </el-col>
              </el-row>
              <el-row style="margin-bottom: -50px;">
                  <el-col :span="4">
                      <div class="wann">
                          <span>资料完整度：</span>
                      </div>
                  </el-col>
                <el-col :span="16">
                    <div class="wan">
                        <el-progress :text-inside="true" :stroke-width="16" :percentage="10" status="success"></el-progress>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                  <el-col :span="10" style="margin-left: -135px;">
                      <div>
                    <el-form-item label="用户名:" style="font-size: 12px;" prop="phone">
                        <el-input v-model="foreman.name" placeholder="您的姓名"></el-input>
                    </el-form-item>
                      </div>
                  </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="联系电话:" style="font-size: 12px;" prop="phone">
                        <el-input v-model="foreman.phone" placeholder="您的联系方式"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="to">
                    <el-form-item label="性别:" style="font-size: 12px;" label-width="90px" prop="sex">
                         <el-select v-model="foreman.sex"  placeholder="性别">
                          <el-option label="男" value="男"></el-option>
                          <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
               <el-row>
                <el-col :span="124">
                    <div class="">
                    <el-form-item label="我的地址:" style="font-size: 12px;" prop="adder">
                        <VDistpicker  @selected="onSelected"></VDistpicker>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
               <el-row>
                <el-col :span="124">
                    <div class="">
                    <el-form-item label="接单区域:" style="font-size: 12px;" prop="adder">
                        <VDistpicker  hide-area @selected="onarea"></VDistpicker>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="to">
                    <el-form-item label="风格:" style="font-size: 12px;" label-width="90px" prop="style">
                        <el-select v-model="foreman.style"  placeholder="选择您擅长的装修风格">
                          <el-option label="现代" value="现代"></el-option>
                          <el-option label="复古" value="复古"></el-option>
                        </el-select>
                       
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
               <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="微信:" style="font-size: 12px;" prop="wei">
                        <el-input v-model="foreman.wei" placeholder="您的微信号"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="邮箱:" style="font-size: 12px;" prop="email">
                        <el-input v-model="foreman.email" placeholder="您的邮箱"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="16">
                    <div class="">
                    <el-form-item label="个人简介:" style="font-size: 12px;" prop="Introduction">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="个人简介（50-100字）" v-model="foreman.Introduction"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                    <div class="colbtn" >
                          <input type="button" @click="hand('form')" value="提交">
                      </div>
                </el-col>
              </el-row>
              
          </el-form>
      </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
    components:{
        VDistpicker,
    },
    data(){
        return{
            foreman:{
                name:'',
                phone:'',
                sex:'',
                adder:'',
                Introduction:'',
                wei:'',
                email:'',
                experience:'',
                servicearea:'',
                style:''
            },
            foremans:'',
            users:'',
            imageUrl:'',
            //表单验证规则
             rules: {
              phone: [
                { required: true, message: '联系电话必输', trigger: 'blur' },
            ],
            sex:[
                { required: true, message: '性别必须选择', trigger: 'blur' },
            ],
            adder:[
                { required: true, message: '地区必须选择', trigger: 'blur' },
            ],
            style:[
                 { required: true, message: '风格必须输入', trigger: 'blur' },
            ],
            wei:[
                 { required: true, message: '微信号必填', trigger: 'blur' },
            ],
            email:[
                 { required: true, message: '邮箱不许为空', trigger: 'blur' },
            ],
            Introduction:[
                 { required: true, message: '简介不许为空', trigger: 'blur' },
            ]
        }
        }
    },
    created(){
        this.getforeman();
    },
    methods:{
        //用户头像
          handleAvatarSuccess(res, file) {
              console.log(res)
         this.imageUrl = URL.createObjectURL(file.raw);
      },
       beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
       },
        //提交修改
        hand(form){
            this.$refs[form].validate((valid) => {
          if (valid) {
            this.foreman.id = this.foremans.id
            console.log(this.foreman)
            this.$Axios({
                url:'/foreman/foremaninfo',
                method:'POST',
                data:this.foreman,
                success:(result)=>{
                    console.log(result)
                  if(result){
                      this.open()
                  }else{
                    this.open()
                  }
            }
          })
          } else {
            return false;
          }
        });
        },
         getforeman(){
            this.foreman = this.$route.params;
            this.foremans = this.$route.params;
        },
        //获取用户地区
        onSelected(data){
            this.foreman.adder = data.province.value+'/'+data.city.value+'/'+data.area.value
        },
        //获取用户接单区域
        onarea(data){
            console.log(data)
            this.foreman.servicearea = data.province.value+'/'+data.city.value
        },
       open() {
        this.$notify({
          title: '提交成功',
          type: 'success',
          offset:100,
        });
      },
    }

}
</script>

<style scoped>
.colbtn input{
    margin: 0 auto;
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
input:focus{
  outline: none;
}
.colbtn{
    height: 36px;
    line-height: 36px;
}
.colbtn:hover{
  opacity: 0.7;
}
.to{
    text-align: left;
}
.in{
    margin-top: -50px;
    font-size: 12px;
}
.username{
    font-size: 12px;
    margin-top: -120px;
    text-align: left;
    margin-left: 24px;
   
}
.wann{
    margin-top: 154px;
    font-size: 12px;
    text-align: left;
}
.wan{
    margin-top: 224px;
    position: relative;
    margin-left: -55px;
}
.yao{
    position: absolute;
    left: 80px;
    top: 119px;
    font-size: 12px;
}
.shang{
    position: absolute;
    left: 0px;
    top: -54px;
    font-size: 12px;
}
.form{
    width: 800px;
    /* border: 1px dashed #eee; */
    margin: 20px auto;
    position: relative;
    height: 750px;
}
.img{
    border: 1px dashed red;
    width: 160px;
    position: absolute;
    left: 82px;
    top: 15px;
    z-index: 9999;
}
.content{
    width: 98%;
    height: 920px;
    border: 1px solid #eee;
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