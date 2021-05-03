<template>
  <div>
      <div class="title">
          <div class="name">
              装修流程
              <span  style="color: #01af69;padding-left:10px">预约工长，签订合同</span>
              <em style="padding-left:10px;">--></em>
              <span  style="color: #01af69;padding-left:10px">拆改</span>
              <em style="padding-left:10px;">--></em>
              <span  style="color: #01af69;padding-left:10px">水电</span>
              <em style="padding-left:10px;">--></em>
              <span  style="color: #01af69;padding-left:10px">木工</span>
              <em style="padding-left:10px;">--></em>
              <span  style="color: #01af69;padding-left:10px">漆工</span>
              <em style="padding-left:10px;">--></em>
              <span  style="color: #01af69;padding-left:10px">收尾验收</span>
            </div>
      </div>
      <div class="content">
          <div class="block">
  <el-timeline  >
    <el-timeline-item  placement="top" style="text-align: left;"   :key="index" :icon="el-icon-more" timestamp="2018/4/12">
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">签订合同</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload"
                      list-type="picture"
                      action="http://localhost:3000/users/setresimg"
                      :file-list="fileList"
                      :data='reslist'
                      :on-success='successimg'
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">上传看房资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传合同图片文件，不超过6张</div>
                    </el-upload>
            </el-col>
            <el-col :span="10">
              <el-form-item label="合同工长:" label-width="100px" prop="foremanid">
                <el-select v-model="reslist.foremanid" placeholder="选择您要签订合同的工长" @change='chanvalue'>
                  <el-option  v-for="(item,i) in foreman" :key="i" :label="item.name" :value="item.foremanid"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <div>定金：<em style="color:red;font-size:16px;font-weight: bold;">￥{{prices}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="list" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="dialogVisible=true" style="background-color: #01af69;">支付定金</el-button>
        </div>
      </el-card>
    </el-timeline-item>
 
  </el-timeline>
</div>
    </div>
    <el-dialog title="支付"
    :visible.sync="dialogVisible"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price"  :rules="rules" ref="ruleForm">
      <el-row>
        <el-col :span="16">
           <el-form-item label="输入金额：" label-width="100px" prop="stageprice">
            <el-input v-model="price.stageprice" placeholder="输入需要支付的定金金额"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
     
    </el-form>
    <div class="play">
      <img src="../../assets/imgs/支付.jpg" alt="">
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sumbit('ruleForm')" style="background-color: #01af69;">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
    data(){
        return{
          dialogVisible:false,
          reslist:{
            foremanid:'',
            userid:'',
            demandid:'',
          },
          foremanid:'',
          foreman:{},
        list: [],
        price:{
          stageprice:''
        },
        prices:'未支付',//定金
        //表单验证规则
           rules: {
          stageprice: [
            { required: true, message: '金额必须填写', trigger: 'blur' },
          ],
           },
           rules1:{
             foremanid:[
               { required: true, message: '选择要签订合同的工长', trigger: 'blur' },
             ]
           }
        }
      
    },
    methods: {
      chanvalue(data){
        console.log(data)
        this.foremanid =data

      },
      //图片上传成功
      successimg(response, file, fileList){
        console.log(response)
        console.log(file)
        console.log(fileList)
        if(response.protocol41){
          this.open('操作成功','success')
        }
      },
      //获取预约长传的图片
      getresimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id},
          success:(result=>{
            for(let i in result){
              let img = result[i].url.slice(42)
              result[i].url = `${url}`+'resimg&img='+`${img}`
            }
            this.list = result
            console.log(result)
          })
        })
      },
      
      //上传
      sumbit(ruleForm){
        this.reslist.userid = this.$store.state.user.id;
        this.reslist.demandid = this.foreman[0].demandid;
        this.reslist.resimg = 1;
        this.dialogVisible=true;
        this.$refs.upload.submit();
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
          this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.foremanid,stageprice:this.price.stageprice},
          success:(result=>{
            if(result){
              this.prices = this.price.stageprice
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.dialogVisible=false;
          })
        })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        

        //
      },
      //获取预约的工长
      getfroeman(){
         this.$Axios({
                url:'/users/getreslist',
                method:'GET',
                data:{userid:this.$store.state.user.id},
                success:(result=>{
                    console.log(result)
                    this.foreman = result
                })
            })
      },
        open(msg,type) {
        this.$notify({
          title: msg,
          type: type,
          offset:100,
        });
        }
    },
    created(){
      this.getfroeman()
      this.getresimg()
    }
}
</script>

<style scoped>
.play{
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.play img{
  width: 100%;
}
.img{
  width: 100%;
  border: 1px dashed #eee;
  margin-top: -25px;
  
}
.btn{
  float: right;
  margin: -50px 0 -50px 0;
}
.content .block{
    width: 100%;
    margin: 20px;
    
}
.content{
    width: 98%;
    border: 1px solid #eee;
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