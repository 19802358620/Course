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
          <a class="name"><em style="color:red;font-weight: bold;">投标信息...</em></a>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:0,
       stenderlist:[],//投标列表
       imgurl:''//用户头像地址
    }
  },
  methods:{
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