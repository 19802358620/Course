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
          <el-button type="success"  style="background-color: #01af69;" @click="chai" :disabled='ischai'>{{title}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 签订合同结束 -->

    <!-- 拆改开始 -->
     <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='stage.dismantle == 1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">房屋拆改</strong></h4>
        <el-form >
          <el-form-item label="阶段资料">
            <el-row>
              <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload"
                      list-type="picture"
                      action="http://localhost:3000/users/setdismaning"
                      :file-list="fileList"
                      :data='reslist'
                      :on-success='successimg'
                      :auto-upload="false"
                      >
                      <el-button slot="trigger" size="small" type="primary">上传拆改资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传拆改图片文件，不超过6张</div>
                    </el-upload>
              </el-col>
              <el-col :span="6">
                <div>拆改费用：<em style="color:red;font-size:16px;font-weight: bold;">{{orderlist.dismantleprice}}</em></div>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <div class="img">
              <v-gallery :images="dismanlist" ></v-gallery>
            </div>
          </el-col>
        </el-row>
        <div class="btn">
          <el-button type="success"  @click="dialogVisible=true" style="background-color: #01af69;" >{{distitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 拆改结束 -->

    <!-- 水电开始 -->
    <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='stage.hyd == 1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">水电</strong></h4>
        <el-form >
          <el-form-item label="阶段资料">
            <el-row>
              <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload1"
                      list-type="picture"
                      action="http://localhost:3000/users/sethydimg"
                      :file-list="fileList"
                      :data='hydlist'
                      :on-success='successimg'
                      :auto-upload="false"

                      >
                      <el-button slot="trigger" size="small" type="primary">上传水电资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传拆改图片文件，不超过6张</div>
                    </el-upload>
              </el-col>
              <el-col :span="6">
                <div>水电费用：<em style="color:red;font-size:16px;font-weight: bold;">{{orderlist.hydprice}}</em></div>
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
          <el-button type="success" @click="disman=true" style="background-color: #01af69;" >{{hydtitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 水电结束 -->

    <!-- 木工阶段开始 -->
    <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='stage.wood == 1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">木工</strong></h4>
        <el-form >
          <el-form-item label="阶段资料">
            <el-row>
              <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload2"
                      list-type="picture"
                      action="http://localhost:3000/users/setwoodimg"
                      :file-list="fileList"
                      :data='woodlist'
                      :on-success='successimg'
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">上传木工资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传拆改图片文件，不超过6张</div>
                    </el-upload>
              </el-col>
              <el-col :span="6">
                <div>木工费用：<em style="color:red;font-size:16px;font-weight: bold;">{{orderlist.woodprice}}</em></div>
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
          <el-button type="success" @click="diawood=true" style="background-color: #01af69;" :disabled='iswood'>{{woodtitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 木工阶段结束 -->

    <!-- 漆工阶段开始 -->
    <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='stage.painting == 1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">漆工</strong></h4>
        <el-form >
          <el-form-item label="阶段资料">
            <el-row>
              <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload3"
                      list-type="picture"
                      action="http://localhost:3000/users/setpaintimg"
                      :file-list="fileList"
                      :data='paintlist'
                      :on-success='successimg'
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">上传漆工资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传拆改图片文件，不超过6张</div>
                    </el-upload>
              </el-col>
              <el-col :span="6">
                <div>漆工费用：<em style="color:red;font-size:16px;font-weight: bold;">{{orderlist.painprice}}</em></div>
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
          <el-button type="success" @click="dispaint=true" style="background-color: #01af69;" >{{paintitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 漆工阶段结束 -->
    <!-- 验收 -->
    <el-timeline-item  placement="top" style="text-align: left;" :key="index" icon="el-icon-more" timestamp="2018/4/12"  type="primary" v-if='stage.accept == 1'>
      <el-card style="width:97%">
        <h4 style="line-height: 20px;">当前阶段：<strong style="color:red;font-weight: bold;">验收</strong></h4>
        <el-form >
          <el-form-item label="阶段资料">
            <el-row>
              <el-col :span="6">
                <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload4"
                      list-type="picture"
                      action="http://localhost:3000/users/setaccrptimg"
                      :file-list="fileList"
                      :data='acceptlist'
                      :on-success='successimg'
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">上传验收资料</el-button>
                      <div slot="tip" class="el-upload__tip">上传拆改图片文件，不超过6张</div>
                    </el-upload>
              </el-col>
              <el-col :span="6">
                <div>需付尾款：<em style="color:red;font-size:16px;font-weight: bold;">{{orderlist.acceptprice}}</em></div>
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
          <el-button type="success" @click="disaccept=true" style="background-color: #01af69;" :disabled='disaccept'>{{acctitle}}</el-button>
        </div>
      </el-card>
    </el-timeline-item>
    <!-- 验收结束 -->
  </el-timeline>
</div>
    </div>
    <el-dialog title="支付"
    :visible.sync="dialogVisible"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price">
      <el-row>
        <el-col :span="16">
          <el-form-item label="输入金额：" label-width="100px">
        <el-input v-model="price.dismantleprice" placeholder="输入该阶段金额"></el-input>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dismantle">确 定</el-button>
  </span>
    </el-dialog>
    <!-- 水电 -->
   <el-dialog title="支付"
    :visible.sync="disman"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price">
      <el-row>
        <el-col :span="16">
          <el-form-item label="水电费用：" label-width="100px">
        <el-input v-model="price.hydprice" placeholder="输入该阶段费用"></el-input>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="disman = false">取 消</el-button>
    <el-button type="primary" @click="hyd">确 定</el-button>
  </span>
    </el-dialog>
    <!-- 水电结束 -->
    <!-- 木工开始 -->
    <el-dialog title="支付"
    :visible.sync="diawood"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price">
      <el-row>
        <el-col :span="16">
          <el-form-item label="水电费用：" label-width="100px">
        <el-input v-model="price.woodprice" placeholder="输入该阶段费用"></el-input>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="diawood = false">取 消</el-button>
    <el-button type="primary" @click="woodinfo">确 定</el-button>
  </span>
    </el-dialog>
    <!-- 木工结束 -->
    <!-- 漆工开始 -->
    <el-dialog title="支付"
    :visible.sync="dispaint"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price">
      <el-row>
        <el-col :span="16">
          <el-form-item label="漆工费用：" label-width="100px">
        <el-input v-model="price.paintprice" placeholder="输入该阶段费用"></el-input>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dispaint = false">取 消</el-button>
    <el-button type="primary" @click="paintinfo">确 定</el-button>
  </span>
    </el-dialog>
    <!-- 漆工结束 -->
    <!-- 验收开始 -->
    <el-dialog title="支付"
    :visible.sync="disaccept"
    width="30%"
    append-to-body=true
    top="22vh"
    >
    <el-form :model="price">
      <el-row>
        <el-col :span="16">
          <el-form-item label="尾款：" label-width="100px">
        <el-input v-model="price.acceptprice" placeholder="输入该阶段费用"></el-input>
      </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="disaccept = false">取 消</el-button>
    <el-button type="primary" @click="acceptinfo">确 定</el-button>
  </span>
    </el-dialog>
    

    <!-- 验收结束 -->
  </div>
</template>

<script>

export default {

    data(){
        return{
          disaccept:false,
          dispaint:false,
          diawood:false,
          disman:false,
          dialogVisible:false,
         reslist:{
            foremanid:'',
            userid:'',
            demandid:'',
            resimg:0,
            dismanimg:1,
            hydimg:0,
            woodimg:0,
            paintimg:0,
            huximg:0,
            acceptimg:0,
            designimg:0
          },
          hydlist:{
            foremanid:'',
            userid:'',
            demandid:'',
            resimg:0,
            dismanimg:0,
            hydimg:1,
            woodimg:0,
            huximg:0,
            paintimg:0,
            acceptimg:0,
            designimg:0

          },
          woodlist:{
            foremanid:'',
            userid:'',
            demandid:'',
            resimg:0,
            dismanimg:0,
            hydimg:0,
            woodimg:1,
            huximg:0,
            paintimg:0,
            acceptimg:0,
            designimg:0

          },
          paintlist:{
            foremanid:'',
            userid:'',
            demandid:'',
            resimg:0,
            dismanimg:0,
            hydimg:0,
            woodimg:0,
            huximg:0,
            paintimg:1,
            acceptimg:0,
            designimg:0

          },
          acceptlist:{
            foremanid:'',
            userid:'',
            demandid:'',
            resimg:0,
            dismanimg:0,
            hydimg:0,
            woodimg:0,
            huximg:0,
            paintimg:0,
            acceptimg:1,
            designimg:0
          },
          foremanid:'',
          foreman:{},
        list: [],//预约图片
        dismanlist:[],//拆改图片
        hydimglist:[],//水电图片
        woodimglist:[],//木工图片
        paintimglist:[],//漆工图片
        acceptimglist:[],//验收图片
        orderlist:[],
        dismanprice:'',//拆改阶段的金额
        hydprice:"",//水电阶段的价格
        ischai:false,
        ishyd:false,
        isdis:false,
        isyhdd:false,
        iswood:false,
        ispaint:false,
        title:'进入拆改',
        distitle:'进入水电',
        hydtitle:'进入木工阶段',
        woodtitle:'进入漆工阶段',
        paintitle:'验收',
        acctitle:'竣工验收',
        stage:{
          dismantle:false,
          hyd:false,
          wood:false,
          painting:false,
          accept:false
        },
        price:{
          dismantleprice:'',
          hydprice:'',
          woodprice:'',
          paintprice:'',
          acceptprice:''
        },
        }
    },
    methods: {
      //结尾验收
      acceptinfo(){
        this.getorder()
        this.acceptlist.userid = this.orderlist.userid;
        this.acceptlist.demandid = this.orderlist.demandid;
        this.acceptlist.title = 'acceptimg'
        this.acceptlist.foremanid = this.$store.state.foreman.id
         this.$refs.upload4.submit();
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.orderlist.dismantleprice,stageprice:this.orderlist.stageprice,hydprice:this.orderlist.hydprice,woodprice:this.orderlist.woodprice,acceptprice:this.price.acceptprice,painprice:this.orderlist.painprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.disaccept=false
          })
        })
        this.dispaint=false;
        this.getdismanimg()

      },
      //验收
      paintinfo(){
        this.getorder()
        this.paintlist.userid = this.orderlist.userid;
        this.paintlist.demandid = this.orderlist.demandid;
        this.paintlist.title = 'paintimg'
        this.paintlist.foremanid = this.$store.state.foreman.id
         this.$refs.upload3.submit();
        this.$Axios({
          url:'/foreman/foremanstage',
          method:'POST',
          data:{foremanid:this.$store.state.foreman.id,hyd:1,dismantle:1,wood:1,painting:1,accept:1},
          success:(result=>{
            if(result){
              this.stage.accept = 1
            }else{
              this.stage.accept = ""
            }
          })
        })
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.orderlist.dismantleprice,stageprice:this.orderlist.stageprice,hydprice:this.orderlist.hydprice,woodprice:this.orderlist.woodprice,painprice:this.price.paintprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
          })
        })
        this.dispaint=false;
        this.getdismanimg()
      },
      //进入漆工
      woodinfo(){
        this.getorder()
        this.woodlist.userid = this.orderlist.userid;
        this.woodlist.demandid = this.orderlist.demandid;
        this.woodlist.title = 'woodimg'
        this.woodlist.foremanid = this.$store.state.foreman.id
         this.$refs.upload2.submit();
         this.woodprice = this.price.woodprice
        this.woodtitle='该阶段已完成'
        this.iswood = true
        this.$Axios({
          url:'/foreman/foremanstage',
          method:'POST',
          data:{foremanid:this.$store.state.foreman.id,hyd:1,dismantle:1,wood:1,painting:1},
          success:(result=>{
            if(result){
              this.stage.painting = 1
            }else{
              this.stage.painting = ""
            }
          })
        })
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.orderlist.dismantleprice,stageprice:this.orderlist.stageprice,hydprice:this.orderlist.hydprice,woodprice:this.price.woodprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
          })
        })
        this.diawood=false
        this.getdismanimg()
      },
      //进入木工阶段
      hyd(){
        this.getorder()
        this.hydlist.userid = this.orderlist.userid;
        this.hydlist.demandid = this.orderlist.demandid;
        this.hydlist.title = 'hydimg'
        this.hydlist.foremanid = this.$store.state.foreman.id
         this.$refs.upload1.submit();
         this.hydprice = this.price.hydprice;
        this.hydtitle='该阶段已完成'
        console.log(this.price)
        this.$Axios({
          url:'/foreman/foremanstage',
          method:'POST',
          data:{foremanid:this.$store.state.foreman.id,hyd:1,dismantle:1,wood:1},
          success:(result=>{
            if(result){
              this.stage.wood = 1
            }else{
              this.stage.wood = ""
            }
          })
        })
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.orderlist.dismantleprice,stageprice:this.orderlist.stageprice,hydprice:this.price.hydprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.dialogVisible=false;
            this.ishyd=true;
          })
        })
        this.disman=false
        this.getdismanimg()
      },
      //进入水电阶段
      dismantle(){
        this.getorder()
        this.reslist.userid = this.orderlist.userid;
        this.reslist.demandid = this.orderlist.demandid;
        this.reslist.title = 'dismanimg'
        this.reslist.foremanid = this.$store.state.foreman.id
        this.dialogVisible=true;
         this.$refs.upload.submit();
        this.dialogVisible=true;
        this.dismanprice = this.price.dismantleprice;
        this.distitle='该阶段已完成'
        this.$Axios({
          url:'/foreman/foremanstage',
          method:'POST',
          data:{foremanid:this.$store.state.foreman.id,hyd:1,dismantle:1},
          success:(result=>{
            if(result){
              this.stage.hyd = 1
              this.ishyd=true;
              this.distitle='该阶段已完成'
            }else{
              this.stage.hyd = ""
            }
          })
        })
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.price.dismantleprice,stageprice:this.orderlist.stageprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.dialogVisible=false;
            this.ishyd=true;
          })
        })
        this.getdismanimg()
      },
      //进入拆改
      chai(){
        this.getorder()
        this.title='该阶段已完成',
        this.isdis = true;
        this.ischai=true
        this.$Axios({
          url:'/foreman/foremanstage',
          method:'POST',
          data:{foremanid:this.$store.state.foreman.id,dismantle:1},
          success:(result=>{
            if(result){
              this.stage.dismantle = 1
            }else{
              this.stage.dismantle = ""
            }
          })
        })
      },
      chanvalue(data){
        console.log(data)
        this.foremanid =data
      },
      //获取订单信息
      getorder(){
        this.orderlist = this.$route.params;
        console.log(this.orderlist)
        this.stage.dismantle = this.orderlist.dismantle
        this.stage.hyd = this.orderlist.hyd;
        this.stage.wood = this.orderlist.wood;
        this.stage.painting = this.orderlist.painting
        this.stage.accept = this.orderlist.accept
        if(this.stage.dismantle){
          this.ischai = true;
          this.title="该阶段已完成";
        }if(this.stage.hyd){
          this.ishyd = true;
          this.distitle='该拆阶段已完成'
        }if(this.stage.wood){
          this.isyhdd = true;
          this.hydtitle = '该阶段已完成'
        }if(this.stage.painting){
          this.ispaint =true;
          this.paintitle='该阶段已完成'
        }
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
      //获取预约上传的图片
      getresimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.orderlist.userid,typeimg:1,demandid:this.orderlist.demandid},
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
      //获取业主上传的拆改图片
      getdismanimg(){
        let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{userid:this.orderlist.userid,typeimg:2,demandid:this.orderlist.demandid},
          success:(result=>{
            console.log(result)
            for(let i in result){
              let img = result[i].url.slice(45)
              result[i].url = `${url}`+'dismanimg&img='+`${img}`
            }
            this.dismanlist = result
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
          data:{userid:this.orderlist.userid,typeimg:3,demandid:this.orderlist.demandid},
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
          data:{userid:this.orderlist.userid,typeimg:4,demandid:this.orderlist.demandid},
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
          data:{userid:this.orderlist.userid,typeimg:5,demandid:this.orderlist.demandid},
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
          data:{userid:this.orderlist.userid,typeimg:6,demandid:this.orderlist.demandid},
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
      //上传
      sumbit(){
        this.reslist.userid = this.orderlist.userid;
        this.reslist.demandid = this.orderlist.demandid;
        this.reslist.title = 'dismanimg'
        this.reslist.foremanid = this.$store.state.foreman.id
        this.dialogVisible=true;
         this.$refs.upload.submit();
         console.log(this.price)
        this.$Axios({
          url:'/users/setuserorder',
          method:'GET',
          data:{foremanid:this.orderlist.foremanid,dismantleprice:this.price.dismantleprice,stageprice:this.orderlist.stageprice},
          success:(result=>{
            if(result){
              this.open('操作成功','success')
            }else{
              this.open('操作失败','error')
            }
            this.dialogVisible=false;
          })
        })
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
      this.getorder()
      this.getresimg()
      this.getdismanimg()
      this.gethydimg()
      this.getwoodimg()
      this.getpaintimg()
      this.getacceptimg()
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