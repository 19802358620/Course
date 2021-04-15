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
        <a @click="member">业主基本资料</a>
      </div>
      <div class="item">
        <div class="titname">我的装修需求</div>
        <router-link :to="{name:'bidd'}">发布装修招标</router-link>
        <a href="">管理装修招标</a>
        <router-link :to="{name:'visit'}">参与项目工长</router-link>
        <a href="">已申请参观工地</a>
      </div>
      <div class="item">
        <div class="titname">评价管理</div>
        <a href="">管理我的评价</a>
      </div>
      <div class="item">
        <div class="titname">账号管理</div>
        <router-link :to="{name:'changpwd'}">修改密码</router-link>
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
    }
  },
  methods:{
    //业主基本资料
    member(){
       this.$router.push({name:"member",params:this.user})
    },
    getuser(){
      this.user= this.$route.params;
      console.log(this.user)
    }
  },
  created(){
    this.getuser()
  }

}
</script>

<style scoped>
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
