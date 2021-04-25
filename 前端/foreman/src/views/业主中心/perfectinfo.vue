<template>
  <div>
       <div class="title">
          <div class="name">完善个人资料</div>
      </div>
      <div class="content">
          
          <el-form ref="form" :model="user" label-width="90px" :rules="rules" class="form">
              <el-row>
                <el-col :span="24">
                    <span class="shang">上传头像：</span>
                    <div class="img">
                   <el-upload
                        class="avatar-uploader"
                        action="http://localhost:3000/users/img"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :data="{userid:this.users.id}"
                        >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                   <span class="yao">仅支持JPG、GIF、PNG图片文件，且文件小于2M</span>
                </el-col>
              </el-row>
              <el-row>
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
                  <el-col :span="10">
                      <div style="margin-top: -50px;">
                    <el-form-item label="姓名:" style="font-size: 12px;" prop="name">
                        <el-input v-model="user.name" placeholder="您的姓名"></el-input>
                    </el-form-item>
                    </div>
                  </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="联系电话:" style="font-size: 12px;" prop="phone">
                        <el-input v-model="user.phone" placeholder="输入联系方式"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="to">
                    <el-form-item label="性别:" style="font-size: 12px;" label-width="90px" prop="sex">
                         <el-select v-model="user.sex"  placeholder="性别">
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
                    <el-form-item label="所在地区:" style="font-size: 12px;" prop="province">
                        <VDistpicker  @selected="onSelected" :province="select.province" :city="select.city" :area="select.area"></VDistpicker>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="小区名称:" style="font-size: 12px;" prop="communityname">
                        <el-input v-model="user.communityname" placeholder="输入您的小区名称"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
               <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="微信:" style="font-size: 12px;" prop="wei">
                        <el-input v-model="user.wei" placeholder="您的微信号"></el-input>
                    </el-form-item>
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                    <div class="">
                    <el-form-item label="邮箱:" style="font-size: 12px;" prop="email">
                        <el-input v-model="user.email" placeholder="您的邮箱"></el-input>
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
      <div
     v-loading.fullscreen.lock="fullscreenLoading"
     ></div>
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
            fullscreenLoading: false,//加载提示
            user:{
                name:'',
                phone:'',
                sex:'',
                communityname:'',
                wei:'',
                email:'',
                modftime:'',
                userpic:'',
                url:"",
                img:'',
                province:'',
                city:'',
                area:'',
            },
            select: { province: '重庆市', city: '重庆市', area: '巴南区' },
            users:'',
            imageUrl:'',
            arr:[],//资料完整度数组
            //表单验证规则
             rules: {
              phone: [
                { required: true, message: '联系电话必输', trigger: 'blur' },
            ],
            sex:[
                { required: true, message: '性别必须选择', trigger: 'blur' },
            ],
            province:[
                { required: true, message: '地区必须选择', trigger: 'blur' },
            ],
            name:[
                 { required: true, message: '小区名称必须输入', trigger: 'blur' },
            ],
            wei:[
                 { required: true, message: '微信号必填', trigger: 'blur' },
            ],
            email:[
                 { required: true, message: '邮箱不许为空', trigger: 'blur' },
            ],
            communityname:[
                 { required: true, message: '小区名称必须填写', trigger: 'blur' },
            ]
        }
        }
    },
    created(){
        this.getuser()
    },
    methods:{
        //用户头像
        handleAvatarSuccess(res, file) {
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
            this.fullscreenLoading=true
            this.$refs[form].validate((valid) => {
          if (valid) {
            // var d = new Date();
            // var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            // this.user.modftime = str;
            this.user.userid = this.users.id;
            this.$Axios({
                url:'/users/perfectInfo',
                method:'POST',
                data:this.user,
                success:(result)=>{
                  if(result){
                      this.fullscreenLoading=false
                      this.open()
                  }else{
                      this.fullscreenLoading=false
                    this.$message.error('提交失败')
                  }
            }
          })
          } else {
            return false;
          }
        });
        },
         getuser(){
            this.url  ="http://localhost:3000/users/getImg?img="
            this.users = this.$route.params;
            this.img = this.users.userpic.slice(-6);
            this.imageUrl=`${this.url}`+`${this.img}`
            this.user = this.users
            if(this.user.province==''){
                console.log('11111')
                this.select.province='',
                this.select.city='',
                this.select.area=''
            }else{
                this.select.province = this.user.province;
                this.select.city = this.user.city;
                this.select.area = this.user.area;
            }
            console.log(this.user)
        },
        //获取用户地区
        onSelected(data){
            this.user.province = data.province.value,
            this.user.city=data.city.value,
            this.user.area=data.area.value
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
    top: 130px;
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
    width: 178px;
    position: absolute;
    left: 82px;
    top: 15px;
    z-index: 9999;
    height: 178px;
    z-index: 0;
}
.img .avatar{
    width: 178px;
    height: 178px;
    display: block;
    z-index: 0;
}
.content{
    width: 98%;
    height: 800px;
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