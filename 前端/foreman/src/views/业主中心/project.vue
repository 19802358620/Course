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
    <!-- 签订合同开始 -->
    <el-timeline-item  placement="top" style="text-align: left;"   icon="el-icon-more" timestamp="2018/4/12"  type="primary">
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">签订合同</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="6" >
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload"
                      list-type="picture"
                      action="http://localhost:3000/users/setresimg"
                      :data='reslist'
                      :on-success='successimg'
                      :auto-upload="false"
                      :disabled="disba"
                      >
                      <el-button slot="trigger" size="small" type="primary">上传看房资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传合同图片文件，不超过6张</div>
                    </el-upload>
            </el-col>
            <el-col :span="10">
              <el-form-item label="合同工长:" label-width="100px" prop="foremanid">
                <el-select v-model="reslist.foremanid" placeholder="选择您要签订合同的工长" @change='chanvalue' :disabled ='disba' >
                  <el-option  v-for="(item,i) in foreman" :key="i" :label="item.name" :value="item.foremanid"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <div>付定金：<em style="color:red;font-size:16px;font-weight: bold;">￥{{prices}}</em></div>
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
          <el-button type="success" @click="dialogVisible=true" style="background-color: #01af69;" :disabled ='disba'>{{restitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 签订合同结束 -->

    <!-- 房屋拆改开始 -->
    <el-timeline-item  placement="top" style="text-align: left;"    icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.dismantle ==1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">房屋拆改</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="8">
              <div>需支付拆改费用：<em style="color:red;font-size:16px;font-weight: bold;">￥{{order.dismantleprice}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="distmanimg" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="disman" style="background-color: #01af69;" >{{dismanrestitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 房拆改结束 -->

    <!-- 水电开始 -->
     <el-timeline-item  placement="top" style="text-align: left;"    icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.hyd ==1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">房屋水电</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="8">
              <div>需支付拆改费用：<em style="color:red;font-size:16px;font-weight: bold;">￥{{order.hydprice}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="hydimglist" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="()=>{dia=true,this.orderprice=this.order.hydprice}" style="background-color: #01af69;" >支付水电费用</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 水电结束 -->
    <!-- 木工阶段开始 -->
     <el-timeline-item  placement="top" style="text-align: left;"    icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.wood ==1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">木工</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="8">
              <div>需支付拆改费用：<em style="color:red;font-size:16px;font-weight: bold;">￥{{order.woodprice}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="woodimglist" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="()=>{dia=true,this.orderprice=this.order.woodprice}" style="background-color: #01af69;" >支付木工费用</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 木工结束 -->
    <!-- 漆工开始 -->
    <el-timeline-item  placement="top" style="text-align: left;"   icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.accept==1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">漆工</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="8">
              <div>需支付拆改费用：<em style="color:red;font-size:16px;font-weight: bold;">￥{{order.painprice}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="paintimglist" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="()=>{dia=true,this.orderprice=this.order.painprice}" style="background-color: #01af69;" >支付漆工费用</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 漆工结束 -->
    <!-- 验收开始 -->
    <el-timeline-item  placement="top" style="text-align: left;"   icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.accept==1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">验收</strong></h4>
        <el-form :model="reslist" :rules="rules1">
          <el-form-item label="">
            <el-row>
            <el-col :span="8">
              <div>需付尾款：<em style="color:red;font-size:16px;font-weight: bold;">￥{{order.acceptprice}}</em></div>
            </el-col>
        </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="acceptimglist" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success" @click="()=>{dia=true,this.orderprice=this.order.painprice}" style="background-color: #01af69;" >支付尾款</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 验收结束 -->
    <!-- 对工长进行评价开始 -->
    <el-timeline-item  placement="top" style="text-align: left;"    icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='order.accept==1'>
      <el-card style="width:97%">
        <el-form :model="eval" :rules="rules2" ref="eval">
          <el-row>
            <el-col :span="10">
              <el-form-item label="星级：" label-width="100px" prop="grade">
                <div style="margin-top: 10px;">
                  <el-rate
                    v-model="eval.grade"
                    show-text>
                  </el-rate>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="您对工长的印象：" prop="impression">
                <el-select v-model="eval.impression" multiple placeholder="请选择您的认为符合的印象" >
                  <el-option label="效率高" value="效率高"></el-option>
                  <el-option label="专业性强" value="专业性强"></el-option>
                  <el-option label="服务周到" value="服务周到"></el-option>
                  <el-option label="参考好" value="参考好"></el-option>
                 </el-select>
              </el-form-item>
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="24">
             <el-form-item label="评价内容：" label-width="100px" prop="content">
               <el-input v-model="eval.content" type="textarea" placeholder="输入你对该工长的评价"></el-input>
             </el-form-item>
            </el-col>
        </el-row>
        </el-form>
        <div class="btn">
          <el-button type="success"  style="background-color: #01af69;" @click="submiteval('eval')">提交评价</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 评价结束 -->
    <!-- 评价控制开始 -->
    <!-- <el-timeline-item  placement="top" style="text-align: left;"    icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='iseval'>
      <el-card style="width:97%">
        <el-form :model="eval" :rules="rules2" ref="eval">
          <el-row>
            <el-col :span="8">
              <el-form-item label="星级：" label-width="100px" prop="grade">
                <div style="margin-top: 10px;">
                  <el-rate
                    v-model="usereval.grade"
                    show-text>
                  </el-rate>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="您对工长的印象：" prop="impression">
                <div>{{usereval.impression}}</div>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="评价时间">
                <div>
                {{usereval.time}}
              </div>
              </el-form-item>
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="24">
             <el-form-item label="评价内容：" label-width="100px" prop="content">
               <p>{{usereval.content}}</p>
             </el-form-item>
            </el-col>
        </el-row>
        </el-form>
        <div class="btn">
          <el-button type="success"  style="background-color: #01af69;" @click="submiteval('eval')">提交评价</el-button>
        </div>
      </el-card>
    </el-timeline-item> -->
    <!-- 评价控制结束 -->
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
    <el-dialog title="支付"
    :visible.sync="dia"
    width="30%"
    append-to-body=true
    top="22vh"
    >
      <el-row>
        <el-col :span="16">
          <div>
            需付金额：<em style="color:red;font-size:16px;font-weight: bold;">{{orderprice}}</em>
          </div>
        </el-col>
      </el-row>
    <div class="play">
      <img src="../../assets/imgs/支付.jpg" alt="">
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dia = false">取 消</el-button>
    <el-button type="primary" @click="dia=flase" style="background-color: #01af69;">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
    data(){
        return{
        iseval:true,//评价控制
        eval:{//业主评价信息
        time:'',
        grade:'',
        impression:'',
        content:''
        },
          value:'',
          dia:false,
          orderprice:"",
          hydtitle:'支付水电费用',
          order:{},//订单信息
          dismanrestitle:'支付拆改费用',
          dismantleprice:'',//查改阶段费用
          restitle:'支付定金',
          distmanimg:[],//工长上传的拆改图片
          hydimglist:[],//工长上传的水电图片
          woodimglist:[],//工长上传的木工图片
          paintimglist:[],//漆工图片
          acceptimglist:[],//验收图片
          disba:false,
          dialogVisible:false,
          reslist:{
            foremanid:'',
            userid:'',
            demandid:'',
            dismanimg:0,
            hydimg:0,
            woodimg:0,
            paintimg:0,
            acceptimg:0,
            huximg:0,
            designimg:0
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
           },
           rules2:{
             grade:[
               { required: true, message: '评价星级必须给出', trigger: 'blur' },
             ],
             impression:[
               { required: true, message: '印象必须选择', trigger: 'blur' },
             ],
             content:[
                { required: true, message: '评价内容不能为空', trigger: 'blur' },
             ]
           }
        }
      
    },
    methods: {
      //提交评价
      submiteval(name){
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        this.eval.userid = this.$store.state.user.id;
        this.eval.foremanid = this.order.foremanid;
        this.eval.impression = this.eval.impression.join(',')
        this.eval.time = str;
        this.eval.username = this.$store.state.user.name;
         this.$refs[name].validate((valid) => {
          if (valid) {
           this.$Axios({
             url:'/users/seteval',
             method:'POST',
             data:this.eval,
             success:(result=>{
               if(result){
                 this.open('感谢您的评价','success')
               }else{
                 this.open('不明原因，评价失败！','error')
               }
             })
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      //支付拆改费用
      disman(){
        this.dia=true
        this.orderprice = this.order.dismantleprice

      },
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
          data:{userid:this.$store.state.user.id,typeimg:1},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(42)
              result[i].url = `${url}`+'resimg&img='+`${img}`
            }
            this.list = result
            console.log(result)
          })
        })
      },
      //获取工长上传的拆改图片
        getdismanimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id,typeimg:2},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(45)
              result[i].url = `${url}`+'dismanimg&img='+`${img}`
            }
            this.distmanimg = result
            console.log(result)
          })
        })
      },
         //获取工长上传的水电图片
      gethydimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id,typeimg:3},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(43)
              result[i].url = `${url}`+'hydimg&img='+`${img}`
            }
            this.hydimglist = result
            console.log(result)
          })
        })
      },
      //获取工长上传的木工图片
       getwoodimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id,typeimg:4},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(43)
              result[i].url = `${url}`+'woodimg&img='+`${img}`
            }
            this.woodimglist = result
            console.log(result)
          })
        })
      },
        //获取工长上传的漆工图片
      getpaintimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id,typeimg:5},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(44)
              result[i].url = `${url}`+'paintimg&img='+`${img}`
            }
            this.paintimglist = result
            console.log(result)
          })
        })
      },
      //获取验收图片
        getacceptimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.$store.state.user.id,typeimg:6},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(46)
              result[i].url = `${url}`+'acceptimg&img='+`${img}`
            }
            this.acceptimglist = result
            console.log(result)
          })
        })
      },
      //获取评价列表
      getusereval(){
        let foremanid = this.reslist.foremanid
        console.log(foremanid)
        // this.$Axios({
        //   url:'/users/getusereval',
        //   method:'GET',
        //   data:{userid:this.$store.state.user.id,foremanid:foremanid},
        //   success:(result=>{

        //   })
        // })
      },
      //上传
      sumbit(ruleForm){
        this.reslist.userid = this.$store.state.user.id;
        this.reslist.demandid = this.foreman[0].demandid;
        this.reslist.title = 'resimg'
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
              this.getresimg()
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
      //业主获取订单
      getordermsg(){
        this.$Axios({
          url:'/users/userorderlist',
          method:'GET',
          data:{userid:this.$store.state.user.id},
          success:(result=>{
            this.reslist = result[0].fileList
            console.log(result)
            this.order = result[0]
            console.log(result)
            if(result[0].isres ==2){
               this.prices = result[0].stageprice;
              this.reslist = result[0];
              this.disba=true;
              this.restitle='已支付定金';
              this.dismantleprice = result[0].dismantleprice;
            }else{
              this.price='未支付';
              this.reslist=''
            }

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
      this.getordermsg()
      this.getdismanimg()
      this.gethydimg()
      this.getwoodimg()
      this.getpaintimg()
      this.getacceptimg()
      this.getusereval()
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