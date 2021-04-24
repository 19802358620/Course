<template>
  <div class="warp">
     <div class="header">
         <div class="userinfo">
             <a href="" class="userimg">
                 <img :src="user.userpic" alt="">
             </a>
             <div class="infow">
                 <div class="line1"><span>欢迎来到诚信工长</span></div>
                 <div class="line3">
                     预约信息(<span>0</span>)
                     对工长评价(<span>0</span>)
                     全部消息(<span>0</span>)
                 </div>
             </div>
             <div class="bindw"></div>
             <div class="clear"></div>
         </div>
     </div>
     <div class="send">
         <div class="user">
             <div class="ziliao">业主基本资料</div>
             <div class="lin"></div>
             <div class="user-w">
                 <div class="info">
                     <table>
                         <tbody>
                             <tr>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">用户名：<span class="col">{{user.name}}</span></span>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">性别：<span  class="col">{{user.sex}}</span></span>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">电话：<span  class="col">{{user.phone}}</span></span>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">邮箱：<span  class="col">{{user.email}}</span></span>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">微信：<span  class="col">{{user.wei}}</span></span>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                  <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">所在地区：<span  class="col">{{user.adder}}</span></span>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="elicep">
                                         <span style="color:#767676;font-size: 12px;">小区名称：<span  class="col">{{user.communityname}}</span></span>
                                     </div>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
     </div>
     <div class="three">
          <div class="ziliao">我的装修需求</div>
          <div class="lin"></div>
          <div class="thr">
              <div class="center" v-if="isShow">
                  <div class="msg">
                      <i class="megi"></i>
                      您还没有发布装修信息哦~
                  </div>
                  <div style="color: #a1a1a1;padding-top: 10px;font-size:12px;margin-top: -10px;">现在发布装修招标信息，免费获得1-3位工长提供的设计和报价方案服务</div>
                  <div class="btn">
                      <a @click="hand">免费发布装修需求</a>
                  </div>
              </div>
              <table class="table" v-else>
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>发布时间</th>
                      <th>招标状态</th>
                      <th>承包方式</th>
                      <th>房屋现状</th>
                      <th>装修预算</th>
                      <th>游览量</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in demandlist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td>{{item.titme}}</td>
                      <td style="color:red">{{item.status}}</td>
                      <td>{{item.contract}}</td>
                      <td>{{item.statusquo}}</td>
                      <td>{{item.budget}}</td>
                      <td style="color:red">200次</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="Details(item)">查看详情</a>
                      </td>
                  </tr>
              </tbody>
             </table>
          </div>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:'',
            demandlist:[],//需求列表
            isShow:false
        }
    },
    methods:{
        //查看需求详情
        Details(item){
            console.log(item)
            this.$router.push({name:"bidding",params:item})
        },
        getuser(){
            this.user = this.$route.params;
            console.log(this.user)
        },
        hand(){
            console.log(this.user)
        },
        //获取业主的装修需求
      getdemandlist(){
        // let userid= this.user.id
        this.$Axios({
            url:'/users/meang',
            method:'GET',
            data:{userid:this.user.id},
            success:(result)=>{
                if(result.length===0){
                    this.isShow=true
                }else{
                    this.demandlist = result
                    this.isShow=false
                }
            }
        })
    }
    },
    created(){
        this.getuser();
        this.getdemandlist();
    },
    
}
</script>

<style scoped>
.table{
    width: 100%;
    font-size: 12px;
    
}
.table tr td{
    text-align: center;
}
.title .tr{
    line-height: 90px;
}
.col{
   color: #01af63;
   font-weight: bold;
}
.three .btn a{
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 24px;
    color: #fff;
    background: #ff4400;
    margin: 0 auto;
}
.three .btn{
    padding-top: 20px;
    margin-top: -120px;
}
.center .msg .megi{
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background: url('../../assets/imgs/登录/user.png') no-repeat -78px 0;
}
.center .msg{
    font-family: 微软雅黑, 黑体, 宋体 !important;
    height: 62px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    margin-top: -50px;
}
.thr .center{
    text-align: center;
    padding: 50px 0;
    width: 100%;
    height: 100px;
}
.three .thr{
    width: 98%;
    height: 300px;
    margin-top: 5px;
}
.three .ziliao{
    float: left;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 12px;
    border-left: 2px solid #01af69;
    margin-top: 2px;
}
.warp .three{
    width: 100%;
    padding: 0 15px;
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid #eeeeee;
    height: 300px;
}
.lin{
    width: 97%;
    border-bottom: 1px solid #eeeeee;
    margin-top: 23px
}
.send .info .elicep{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 185px;
    font-size: 14px;
}
table tr td{
    width: 185px;
    height: 32px;
    line-height: 32px;
    text-align: left;
    font-weight: normal
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}
.send .user .user-w .info{
    padding: 24px 0 24px 24px;
}
.send .user .user-w{
    position: relative;
    margin-top: -15px;
}
.send .user .ziliao{
    float: left;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 12px;
    border-left: 2px solid #01af69;
}
.warp .send .user{
    height: 100px;
    padding-top: 20px;
    border-bottom: 1px dotted #e8e8e8;
}
.warp .send{
    width: 100%;
    padding: 0 15px;
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid #eeeeee;
}
.userinfo .bindw{
    float: right;
    width: 386px;
    height: 74px;
    border-left: 1px solid #eeeeee;
    margin-top: 12px;
    padding: 10px 0 0 20px;
}
.infow .line3{
    padding-top: 6px;
    color: #666666;
    font-size: 12px;
    height: 42px;
    margin-top: -56px;
}
.infow .line3 span{
    color: #ff4400;
}
.header .userinfo .infow{
    float: left;
    width: 245px;
    padding-left: 18px;
    padding-left: 85px;
}
.infow .line1{
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    font-weight: bold;
}
.infow .line1 span{
    font-size: 14px;
    color: #01af63;
    font-weight: normal;
}
.clear {
  clear: both;
}
.warp{
    width: 100%;
}
.warp .header{
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid #eeeeee;
    width: 100%;
    padding: 0;
}
.warp .header .userinfo{
    padding: 20px;
}
.header .userinfo .userimg{
    float: left;
    position: relative;
    display: block;
    width: 104px;
    height: 104px;
    overflow: hidden;
    border-radius: 104px;
}
.userinfo.userinfo img{
    display: block;
    width: 104px;
    height: 104px;
    image-rendering: optimizeQuality;
    border: 0;
}
.header .userinfo .txt{
    bottom: 0;
    left: 0;
    position: absolute;
    width: 104px;
    height: 30px;
    line-height: 24px;
    font-size: 13px;
    background: #000;
    color: #fff;
    text-align: center;
    filter: alpha(opacity = 70);
    opacity: 0.7;
    cursor: pointer;
}

</style>