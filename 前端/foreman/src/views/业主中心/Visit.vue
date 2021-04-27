<template>
  <div class="header">
       <div class="title">
          <div class="name">
              项目投标情况
              <span>共<span style="color: #01af63;">({{stenderlist.length}})</span>条</span>
              </div>
      </div>
      <div class="content">
        <div class="item" v-for="(item,i) in stenderlist" :key="i">
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
           width="41%"
          :before-close="handleClose"
          :append-to-body='true'
          top='15vh'
          >
          <el-row :gutter="20">
            <el-col :span="6"><div class="list">工长姓名：<strong style="color:#01af69;font-weight: bold;">{{item.name}}</strong></div></el-col>
            <el-col :span="6"><div class="list">投标时间：<em style="color:#108881;font-weight: bold;">2021/4/27</em></div></el-col>
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
              <span style="display: block;margin-top: -10px;font-weight:bold">案例展示：</span>
              <div style="margin-left:11px；margin-top: 10px;">
                <v-gallery :images="list" :caption="true"></v-gallery>
              </div>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
               <el-button @click="dialogVisible = false" type="warning">暂不考虑</el-button>
              <el-button type="success" @click="dialogVisible = false">选择该工长</el-button>
          </span>
      </el-dialog>
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogVisible:false,
      number:0,
       stenderlist:[],//投标列表
       imgurl:'',//用户头像地址
       list:[
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
         {title:'Image1',url:'../../assets/imgs/照片墙/01.jpg'},
       ],
       item:{}//单条投标记录
    }
  },
  methods:{
    //进入工长店铺
    foremaninfo(item){
      console.log(item)
      this.$router.push({name:"index",params:item})
    },
    //查看投标详情
    information(item){
      console.log(item)
      this.dialogVisible=true
      this.item = item
    },
    //获取投标工长信息
     getstenderlist(){
      let userid = this.$store.state.user.id;
      this.$Axios({
        url:'/users/getstenderlist',
        method:'GET',
        data:{userid:userid},
        success:(result=>{
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
    this.getstenderlist()
  }

}
</script>

<style scoped>
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