<template>
<div class="m">
  <div class="heard">
    <a href="" class="logon"></a>
    <div class="tit">工长中心</div>
  </div>
  <div class="content">
    <div class="left">
      <div class="tit">个人中心</div>
      <div class="item">
        <div class="titname">个人信息</div>
        <a @click="formanber" :class="{clactive:id==1}">工长基本资料</a>
        <a @click="foremaninfo"  :class="{clactive:id==3}" > 修改/完善个人资料</a>
      </div>
      <div class="item">
        <div class="titname" >业务中心</div>
        <a @click="manage" :class="{clactive:id==2}">管理我的订单</a>
        <a @click="mycase" :class="{clactive:id==4}">管理我的案例</a>
        <a @click="recording" :class="{clactive:id==6}">我的投标记录</a>
        <a>我的预约信息</a>
      </div>
      <div class="item">
        <div class="titname">评价管理</div>
        <a href="">管理我的评价</a>
      </div>
      <div class="item">
        <div class="titname">账号管理</div>
        <a @click='changpwd' :class="{clactive:id==5}">账户信息修改</a>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </div>
  <div>{{f}}</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      foreman:'',
      id:1,
    }
  },
  methods:{
    //工长基本资料
    formanber(){
      this.id=1
       this.$router.push({name:"formanber",params:this.foreman})
    },
    //发布装修需求
    bidd(){
      this.id=2
      this.$router.push({name:"bidd",params:this.user})
    },
    getforeman(){
      this.foreman= this.$route.params;
      console.log(this.foreman)
    },
    //完善个人资料
    foremaninfo(){
       this.id=3
      this.$router.push({name:"foremaninfo",params:this.foreman})
    },
    //管理需求招标
    manage(){
      this.id=4
      this.$router.push({name:"manage",params:this.user})
    },
    //修改密码
    changpwd(){
      this.id=5
      this.$router.push({name:"changpwd",params:this.user})
    },
    //管理我的案例
    mycase(){
      this.id=4
      this.$router.push({name:"mycase",params:this.foreman})
    },
    //我的投标记录
    recording(){
      this.id=6
      this.$router.push({name:"recording",params:this.foreman})
    }
  },
  created(){
    this.getforeman()
    this.formanber()
    // this.member()
  }
}
</script>

<style scoped>
.clactive{
  color: white!important;
  font-weight: bold; 
  background-color: #01af63;
}
.content .right{
  width: 1030px;
  float: right;
}
.heard{
  width: 1200px;
  height: 130px;
  margin: 0 auto;
  border: 1px solid #eee;
}
.heard .logon{
  width: 370px;
  height: 90px;
  float: left;
  background: url('../../assets/imgs/工长/雪碧图.jpg') 0 -284px no-repeat;
  margin-top: 20px;
  overflow: hidden
}
.heard .tit{
  width: 100px;
  height: 28px;
  line-height: 28px;
  float: left;
  margin-left: 15px;
  margin-top: 51px;
  text-align: center;
  font-size: 18px;
  color: #000;
  border-left: 1px solid #cbcbcb
}
.content{
  width: 1200px;
  margin: 10px auto;
  /* border: 1px solid; */
  padding-bottom: 50px;
}
.content .left{
  float: left;
  width: 162px;
  background: #fff;
  border: 1px solid #eee;
}
.content .left .tit{
  width: 162px;
  height: 60px;
  line-height: 60px;
  background: #01af63;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.content .left .item{
  width: 162px;
  padding: 16px 0 18px 0;
  border-bottom: 1px dashed #eeeeee;
}
.content .left .item .titname{
  display: block;
  height: 32px;
  line-height: 32px;
  padding-left: 45px;
  color: #505050;
  font-size: 14px;
  background: url('../../assets/imgs/登录/业主中心.png') 22px 10px no-repeat;
  text-align: left;
}
.content .left .item a{
  display: block;
  height: 28px;
  line-height: 32px;
  font-size: 12px;
  color: #505050;
}
.cur{
  color: #01af63;
  background: #f8f8f8;
  border-left: 2px solid #01af68;
  padding-left: 43px;
}
.clear {
  clear: both;
}
</style>>
