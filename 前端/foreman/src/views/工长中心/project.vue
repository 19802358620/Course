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
    <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" >
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">签订合同</strong></h4>
        <el-form :model="reslist">
          <el-form-item label="">
            <el-row>
            <el-col :span="4">
               <div>业主姓名：<em style="color:#01af69;font-size:16px;">{{orderlist.name}}</em></div>
            </el-col>
            <el-col :span="4">
             <div>定金：<em style="color:red;font-size:16px;font-weight: bold;">￥{{orderlist.stageprice}}</em></div>
            </el-col>
            <el-col :span="6">
             <div>小区名称：<em style="font-size:16px;font-size:14px;color:black;">{{orderlist.communityname}}</em></div>
            </el-col>
            <el-col :span="6">
             <div>小区地址：<em style="font-size:16px;font-size:14px;color:black;">{{orderlist.adder}}</em></div>
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
          <el-button type="success"  style="background-color: #01af69;" @click="chai" :disabled='isdis'>{{title}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>

     <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='ischai'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">签订合同</strong></h4>
        <el-form :model="reslist">
          <el-form-item label="">
            <el-row>
            <el-col :span="4">
               <div>业主姓名：<em style="color:#01af69;font-size:16px;">{{orderlist.name}}</em></div>
            </el-col>
            <el-col :span="4">
             <div>定金：<em style="color:red;font-size:16px;font-weight: bold;">￥{{orderlist.stageprice}}</em></div>
            </el-col>
            <el-col :span="6">
             <div>小区名称：<em style="font-size:16px;font-size:14px;color:black;">{{orderlist.communityname}}</em></div>
            </el-col>
            <el-col :span="6">
             <div>小区地址：<em style="font-size:16px;font-size:14px;color:black;">{{orderlist.adder}}</em></div>
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
          <el-button type="success" @click="sumbit" style="background-color: #01af69;">进入拆改</el-button>
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
    <div>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
        orderlist:[],
        ischai:false,
        isdis:false,
        title:'进入拆改'
        }
      
    },
    methods: {
      //进入拆改
      chai(){
        this.title='该阶段已完成',
        this.isdis = true;
        this.ischai=true
      },
      chanvalue(data){
        console.log(data)
        this.foremanid =data

      },
      //获取订单信息
      getorder(){
        this.orderlist = this.$route.params;
        console.log(this.orderlist)

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
      sumbit(){
        this.reslist.userid = this.$store.state.user.id;
        this.reslist.demandid = this.foreman[0].demandid;
        this.reslist.resimg = 1;
        // this.dialogVisible=true;
         this.$refs.upload.submit();
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.foremanid,stageprice:200},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.dialogVisible=false;
          })
        })

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
      this.getorder()
    }
}
</script>

<style scoped>
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
    border-left: 2px solid #01af69;
    
}
</style>