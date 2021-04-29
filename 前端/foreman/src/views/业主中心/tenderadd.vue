<template>
<div class="m">
  <div class="heard">
    <a href="" class="logon"></a>
    <div class="tit">业主中心</div>
  </div>
  <div class="content">
    <div class="left">
      <div class="tit">个人中心</div>
      <div class="item">
        <div class="titname">业主信息</div>
        <a @click="member" :class="{clactive:id==1}">业主基本资料</a>
        <a @click="perfectinfo"  :class="{clactive:id==3}" > 修改/完善个人资料</a>
      </div>
      <div class="item">
        <div class="titname" >我的装修需求</div>
        <a @click="bidd"  :class="{clactive:id==2}">发布装修招标</a>
        <a @click="manage" :class="{clactive:id==4}">管理装修招标</a>
        <a @click="visit" :class="{clactive:id==6}" >项目投标情况</a>
        <a href="">已申请参观工地</a>
      </div>
      <div class="item">
        <div class="titname">评价管理</div>
        <a href="">管理我的评价</a>
      </div>
      <div class="item">
        <div class="titname">账号管理</div>
        <a @click='changpwd' :class="{clactive:id==5}">修改密码</a>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      user:'',
      id:1,
    }
  },
  methods:{
    //业主基本资料
    member(){
      this.id=1
       this.$router.push({name:"member",params:this.user})
    },
    //发布装修需求
    bidd(){
      this.id=2
      this.$router.push({name:"bidd"})
    },
    getuser(){
      this.user= this.$route.params;
      console.log(this.user)
    },
    //完善个人资料
    perfectinfo(){
       this.id=3
      this.$router.push({name:"perfectinfo",params:this.user})
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
    //投标情况
    visit(){
      this.id =6;
      this.$router.push({name:"visit",params:this.user})
    }
  },
  created(){
    this.getuser()
    this.member()
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
