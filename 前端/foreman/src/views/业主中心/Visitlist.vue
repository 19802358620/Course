<template>
  <div class="header">
       <div class="title">
          <div class="name">
              项目投标情况
              <span>共<span style="color: #01af63;">({{stenderlist.length}})</span>条</span>
              </div>
      </div>
      <div class="content">
        <div class="cent" v-if="stenderlist.length===0">
                  <div class="msg">
                      <i class="megi"></i>
                      目前还没有投标信息哦，请耐心等待~
                  </div>
                  <div style="color: #a1a1a1;padding-top: 10px;font-size:12px;margin-top: -10px;">现在预约工长，免费获得1-3位工长提供的设计和报价方案服务</div>
              </div>
        <div class="item" v-for="(item,i) in stenderlist" :key="i" v-else>
          <a @click="getforeman(item)" class="imglink">
            <img :src="item.header" alt="暂无图片">
          </a>
          <h6 class="name">姓名：<em style="color:#01af63;font-weight: bold;">{{item.name}}</em></h6>
          <h6 class="name" style="margin-left: 15px;">年龄：<em style="color:#01af63;font-weight: bold;">{{item.age}}</em></h6>
          <h6 class="name">地址：<em style="color:#01af63;font-weight: bold;">{{`${item.province+'/'+item.city+'/'+item.area}`}}</em></h6>
          <a class="name" @click="information(item)"><em style="color:red;font-weight: bold;">投标信息...</em></a>
        </div>
      </div>
      <el-dialog
          title="投标信息"
          :visible.sync="dialogVisible"
           width="45%"
           :open="opendiog"
          :append-to-body='true'
          top='15vh'
          >
          <el-row :gutter="20">
            <el-col :span="6"><div class="list">工长姓名：<strong style="color:#01af69;font-weight: bold;">{{item.name}}</strong></div></el-col>
            <el-col :span="6"><div class="list">投标时间：<em style="color:#108881;font-weight: bold;">{{item.time}}</em></div></el-col>
            <el-col :span="6"><div class="list">投标价：<em>{{item.price}}</em></div></el-col>
            <el-col :span="6"><div class="list">年龄：<strong style="color: green;">{{item.age}}</strong></div></el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="6"><div class="list">现地址：{{`${item.province}`+'/'+`${item.city}`+'/'+`${item.area}`}}</div></el-col>
            <el-col :span="6"><div class="list">擅长风格：{{item.style}}</div></el-col>
            <el-col :span="6"><div class="list">入驻时间：2021-4-27</div></el-col>
            <el-col :span="6"><div class="list">工作经验：<strong style="color: red;">{{item.experience}}</strong></div></el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="6"><div class="list">在建工地：<strong style="color:#01af69;font-weight: bold;">{{item.site}}</strong></div></el-col>
            <el-col :span="6"><div class="list">服务次数：{{item.sernumber}}</div></el-col>
            <el-col :span="6"><div class="list">签单总数：{{item.numberord}}</div></el-col>
            <el-col :span="6"><div class="list">工长级别：<strong style="color: red;">钻石工长</strong></div></el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="6"><div class="list">电话：{{item.phone}}</div></el-col>
            <el-col :span="6"><div class="list">微信：{{item.wei}}</div></el-col>
            <el-col :span="6"><div class="list">邮箱：{{item.email}}</div></el-col>
            <el-col :span="6"><a @click="foremaninfo(item)" class="list"><strong style="color: red;font-weight: bold;">进入工长店铺了解更多>></strong></a></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24" style="margin-top:20px;">
              <span style="display: block;margin-top: -5px;font-weight:bold;color:red">设计方案：</span>
              <div style="margin-left:11px；margin-top: 10px;">
                <v-gallery :images="list" ></v-gallery>
              </div>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
               <el-button @click="dialogVisible = false" type="warning">暂不考虑</el-button>
              <el-button type="success" @click="innerVisible=true">预约该工长</el-button>
          </span>
           <el-dialog
             width="30%"
             title="预约信息"
             :visible.sync="innerVisible"
             append-to-body
             top='15vh'
             >
             <el-form :model="order" :rules="rules">
               <el-row>
                 <el-col :span="24">
                    <el-form-item label="看房时间：" label-width="100px" prop="restime">
                       <el-date-picker
                         v-model="order.restime"
                         type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择工长看房时间"
                        >
                      </el-date-picker>
                    </el-form-item>
                 </el-col>
               </el-row>
               <el-row>
                 <el-col :span="24">
                    <el-form-item label="详细地址：" label-width="100px" prop="adder">
                       <el-input v-model="order.adder" placeholder="详细地址"></el-input>
                    </el-form-item>
                 </el-col>
               </el-row>
                <el-row>
                 <el-col :span="24">
                    <el-form-item label="备注：" label-width="90px">
                       <el-input v-model="order.deark" placeholder="其他信息"   type="textarea"></el-input>
                    </el-form-item>
                 </el-col>
               </el-row>
             </el-form>
             <span slot="footer" class="dialog-footer">
              <el-button @click="innerVisible = false">取 消</el-button>
              <el-button type="success" @click="selectforeman">确定预约</el-button>
          </span>
          </el-dialog>
      </el-dialog>
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      demandlist:{},//单条招标信息
      dialogVisible:false,
      innerVisible:false,//内层
      number:0,
       stenderlist:[],//投标列表
       imgurl:'',//用户头像地址
       list:[],
       item:{},//单条投标记录
       order:{
         restime:'',
         adder:'',
         deark:'',
       },//订单信息
       rules: {
          restime: [
            { required: true, message: '时间必须填写', trigger: 'blur' },
          ],
          adder:[
             { required: true, message: '详细地址必须填写', trigger: 'blur' },
          ]
       }
    }
  },
  methods:{
    //获取单条招标信息
    getdemdandlist(){
      this.$route.params.id= this.$route.params.id.slice(1,4)
      this.demandlist=this.$route.params
      console.log(this.demandlist)
    },
    //打开弹出框
    opendiog(){
      console.log('11')
    },
    //进入工长店铺
    foremaninfo(item){
      console.log(item)
      this.$router.push({name:"index",params:item})
    },
    //预约工长
    selectforeman(){
      // var d = new Date();
      // var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      // this.order.time = str;
      this.order.foremanid = this.item.foremanid;
      this.order.userid = this.item.userid;
      this.order.demandid = this.item.demandid;
      this.order.isres = 1;
      this.order.status= '已预约'
      console.log(this.order)
      this.$Axios({
        url:'/users/setorder',
        method:'POST',
        data:this.order,
        success:(result=>{
          if(result){
            this.editstatus('业主已预约')
            this.open()
          }else{
            this.open1()
          }
        })
      })
      this.dialogVisible= false;
      this.innerVisible=false
    },
    //修改状态
    editstatus(msg){
      this.$Axios({
        url:'/users/editstatus',
        method:'GET',
        data:{status:msg,id:this.item.pmstenderid},
        success:(result=>{
          console.log(result)
        })
      })
    },
     open() {
        this.$notify({
          title: '预约成功，工长稍后联系你',
          type: 'success',
          offset:100,
        });
      },
      open1() {
        this.$notify({
          title: '订单生成失败',
          type: 'error',
          offset:100,
        });
      },
      //获取工长提交的设计图
      getdesignlist(item){
         let url = 'http://localhost:3000/getimg/?name='
        this.$Axios({
          url:'/users/getresimg',
          method:'GET',
          data:{demandid:item.demandid,typeimg:8},
          success:(result=>{
            console.log(result)
            for(let i in result){
                let img = result[i].url.slice(45)
                result[i].url = `${url}`+'designimg&img='+`${img}`
            }
            console.log(result)
            this.list = result
          })
        })

      },
    //查看投标详情
    information(item){
      this.getdesignlist(item)
      this.dialogVisible=true
      item.time = item.time.slice(0,10)
      this.item = item
      this.editstatus('标书已查看')
    },
    //获取投标工长信息
     getstenderlist(){
      let userid = this.$store.state.user.id;
      this.$Axios({
        url:'/users/getstenderlist',
        method:'GET',
        data:{userid:userid,demandid:this.demandlist.id},
        success:(result=>{
          console.log(result)
          this.stenderlist = result
          for(let i in this.stenderlist){
            let url='http://localhost:3000/foreman/getforamnimg/?img='
            if(this.stenderlist[i].header==null){
              this.stenderlist[i].header=''
            }else{
              let img = this.stenderlist[i].header.slice(-6)
              this.stenderlist[i].header = `${url}`+`${img}`
            }
          }
          console.log(this.stenderlist)
        })
      })
    },
    //跳转到工长店铺
    getforeman(item){
      this.$router.push({name:"index",params:item})
    }
  },
  created(){
    this.getdemdandlist()
    this.getstenderlist()

  }

}
</script>

<style scoped>
.cent{
  width: 98%;
  margin: 40px auto;
}
.cent .msg .megi{
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background: url('../../assets/imgs/登录/user.png') no-repeat -78px 0;
}
.cent .msg{
    font-family: 微软雅黑, 黑体, 宋体 !important;
    height: 62px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    margin-top: -50px;
}
.list{
  text-align: left;
  font-size: 14px;
  
}
.content .item .name{
  margin-top: 7px;
  font-size: 12px;
  line-height: 12px;
  float: left;
  margin-left: 5px;
  margin-top: 10px;
  
  

}
.content .item .imglink{
  display: block;
  width: 160px;
  height: 150px
}
.content .item .imglink img{
  width: 100%;
  height: 100%;
}
.content .item:hover{
  transform:scale(1.1);
}
.content .item{
  width: 160px;
  height: 220px;
  border: 1px dashed red;
  margin: 12px 18px;
  transition:all .2s;
}
.header .content{
  width: 100%;
  height: 600px;
  display: flex;
  justify-self: start;
  flex-wrap: wrap;
}
.header{
    width: 98%;
    height: 600px;
    border: 1px solid #eee;
    margin: 0 5px;
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