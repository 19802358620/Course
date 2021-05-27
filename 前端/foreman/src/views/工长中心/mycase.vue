<template>
  <div>
       <div class="title">
          <div class="name">
              我的案例
              <span>共<span style="color: red;">({{this.caselist.length}})</span>案例</span>  
              <a @click="dialogVisible = true" style="margin-left: 28px;color: #01af63;" class="">添加案例</a>
            </div>
      </div>
      <div class="content">
         <div class="item" v-for="(item ,i) in caselist" :key="i">
             <div class="left">
                 <a href="">
                     <img style="width:100%;height: 180px;" :src="item.img" alt="暂无图片">
                 </a>
             </div>
             <div class="right">
                 <h5 class="name">{{item.name}}</h5>
                 <h5 class="price">合同价：<em style="color:red;font-weight: bold;">{{item.price}}</em>万</h5>
                 <h5 class="jie">装修风格：{{item.stage}}</h5>
                 <h5 class="jie" style="margin-left:150px">装修类型：<em style="color:#01af63;font-weight: bold;">{{item.casetype}}</em></h5>
                 <div class="btn_w">
                    <a class="ww" @click="info(item)">查看案例详情</a>
                    <a @click="modify(item)" class="ww01">修改案例</a>
                    <a class="btn3" style="color:red" @click="deletecase(item)">
                        删除
                    </a>
                  </div>
             </div>
         </div>

      </div>
      <el-dialog
          title="添加案例"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose"
          :append-to-body='true'
          top='30vh'
          >
        <el-form ref="form" :model="cases" label-width="50px" :rules="rules"  style="margin-top: -30px;">
          <el-row>
            <el-col :span="12">
                <el-form-item label="小区名称：" label-width="100px" prop="name">
                <el-input v-model="cases.name" placeholder="小区名称" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="合同价：" label-width="85px" prop="price">
                <el-input v-model="cases.price" placeholder="合同价" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
                <el-form-item label="装修风格：" label-width="100px" prop="stage">
                  <el-select v-model="cases.stage"  placeholder="选择装修风格">
                          <el-option label="现代" value="现代"></el-option>
                          <el-option label="复古" value="复古"></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="开工日期：" label-width="100px" prop="time">
               <el-date-picker
                         v-model="cases.time"
                         type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择动工日期"
                        >
                      </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
            <el-form-item label="装修类型：" label-width="100px" prop="casetype">
                <el-select v-model="cases.casetype"   placeholder="装修类型">
                          <el-option label="新房" value="新房"></el-option>
                          <el-option label="翻修" value="翻修"></el-option>
                          <el-option label="精装" value="精装"></el-option>
                          <el-option label="毛坯" value="毛坯"></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="是否完工：" label-width="100px" prop="status">
                  <el-select v-model="cases.status"   placeholder="是否完工">
                          <el-option label="已完工" value="已完工"></el-option>
                          <el-option label="进行中" value="进行中"></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
          <el-col :span="12">
              <el-form-item label="封面图片：" label-width="100px" prop="status">
                <div class="fenimg">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:3000/foreman/caseimg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </div>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="效果图片：" label-width="100px">
                <div class="">
                    <el-upload
                         class="upload-demo"
                         list-type="picture"
                         ref="upload"
                         action="http://localhost:3000/foreman/caselistimgs"
                         multiple
                         :data='caselistimgs'
                         :auto-upload="false"
                         :file-list="fileList">
                         <el-button size="small" type="primary">选择图片</el-button>
                         <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
          </div>
              </el-form-item>
          </el-col>
           </el-row>
        </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addcase('form')">确 定</el-button>
          </span>
     </el-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
             dialogVisible: false,//弹出框控制
             cases:{
                 id:'',
                 name:'',
                 time:'',
                 img:'',
                 casetype:'',
                 stage:'',
                 price:'',
                 status:'',
             },
             caselistimgs:{
               caseid:0,
               foremanid:0,
             },
             indexid:'',
             imageUrl:'',
             caselist:[],//案例列表
             //表单验证规则
            rules: {
              name: [
                { required: true, message: '小区名称必填', trigger: 'blur' },
            ],
            price:[
                { required: true, message: '合同价必填', trigger: 'blur' },
            ],
            stage:[
                { required: true, message: '装修风格必填', trigger: 'blur' },
            ],
            time:[
                { required: true, message: '开工日期必填', trigger: 'blur' },
            ],
            casetype:[
                { required: true, message: '装修类型必填', trigger: 'blur' },
            ],
            status:[
                 { required: true, message: '封面图片必传', trigger: 'blur' },
            ],
          }
          
        }
    },
    methods:{
      //查看案例详情
      info(item){
        this.$router.push({name:"sitedetails",params:item})

      },
      //删除案例
      deletecase(item){
        console.log(item)
        this.$Axios({
          url:'/foreman/deletecase',
          method:'DELETE',
          data:{id:item.id},
          success:(result=>{
            if(result){
              this.open3('删除成功','success')
              this.getcaselist()
            }else{
              this.open3('删除失败','error')
            }
          })
        })

      },
      //修改案例
      modify(item){
        this.dialogVisible=true;
        this.cases = item;
        this.imageUrl = item.img;
      },
      //新增案例
      addcase(form){
         this.$refs[form].validate((valid) => {
           this.cases.id = this.indexid;
           this.cases.foremanid = this.$store.state.foreman.id
           this.$refs.upload.submit();
           console.log(this.caselistimgs)
          if (valid) {
            this.$Axios({
              url:'/foreman/setcase',
              method:'POST',
              data:this.cases,
              success:(result=>{
                if(result){
                this.dialogVisible=false;
                this.getcaselist()
                this.open3('新增成功','success')
                }else{
                  this.open3('新增失败','error')
                }
              })
            })
          } else {
            return false;
          }
        });
      },
      //获取案例列表
      getcaselist(){
        this.$Axios({
          url:'/foreman/getcaselist',
          method:'GET',
          data:{foremanid:this.$store.state.foreman.id},
          success:(result=>{
            this.caselist= result
            for(let i in this.caselist){
              let url = 'http://localhost:3000/getimg?';
              let name = 'caseimg'
              let img = this.caselist[i].img.slice(-8)
              this.caselist[i].img = `${url}`+'name='+`${name}`+'&img='+`${img}`
            }
            console.log(this.caselist)
          })
        })
      },
        //封面图片上传成功时的处理函数
         handleAvatarSuccess(res, file) {
           this.indexid = res.insertId;
          this.caselistimgs.caseid = this.indexid;
          this.caselistimgs.foremanid = this.$store.state.foreman.id
             console.log(this.indexid)
         this.imageUrl = URL.createObjectURL(file.raw);
         console.log(this.imageUrl)
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
      open3(msg,type) {
        this.$notify({
          title: msg,
          type: type,
          offset:100,
        });
      },
      open1() {
        this.$notify({
          title: '添加s失败',
          type: 'error',
          offset:100,
        });
      },
      open() {
        this.$notify({
          title: '新增成功',
          type: 'success',
          offset:100,
        });
      },

    },
    created(){
      this.getcaselist()
    }

}
</script>

<style scoped>
.el-upload__text{
    width: 275px;
    height: 172px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.fenimg{
    width: 178px;
    height: 178px;
    border: 1px dashed #aaa;
}
.img{
    width: 50px;
    height: 50px;
    border: 1px solid;
    margin-top: -13px;
    margin-left: 67px;
}

.btn_w .btn3 .em{
    color: #ff4400;
    padding: 0 5px;
    font-style: normal
}
.btn_w .btn3{
    width: 142px;
    float: left;
    text-align: center;
    display: block;
    background: #f8f8f8;
    color: #999;
    font-size: 12px;
}
.btn_w .ww{
    background: #01af63;
    color: #FFF;
    width: 142px;
    float: left;
    text-align: center;
    display: block;
    font-size: 12px;
    margin-left: 10px;
}
.btn_w .ww01{
    width: 142px;
    background: #fff;
    color: #01af63;
    border: 1px solid #01af63;
    font-size: 12px;
}
.btn_w{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 30px;
    position: absolute;
    top: 100px;
    display: flex;
    justify-content: start;
}
.content .item .right .lei{
    font-size: 14px;

}
.content .item .right .jie{
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 14px;
}
.content .item .right .price{
    position: absolute;
    top: -20px;
    left: 10px;
    font-size: 14px;
}
.content .item .right .name{
    position: absolute;
    top: -60px;
    left: 10px;
    font-size: 18px;
    font-weight: bold;
}
.content .item .left{
    width: 30%;
    height: 180px;
    float: left;
    margin: 15px 10px;
}
.content .item .right{
    width: 65%;
    height: 180px;
    border: 1px solid #eee;
    float: left;
    margin: 15px 5px;
    position: relative;
}
.content .item{
    width: 90%;
    height: 230px;
    border: 1px dotted #a0a0a0;
    margin: 15px auto;
}
.content{
    width: 98%;
    height: 600px;
    border: 1px dashed #eee;
    margin: 10px;
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