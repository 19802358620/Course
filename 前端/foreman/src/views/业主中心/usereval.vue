<template>
  <div>
      <div class="title">
          <div class="name">
              我的评价
              <span>共<span style="color: #01af63;">(0)</span>条</span>
              </div>
      </div>
      <div class="content">
          <div class="item" v-for="(item,i) in usereval" :key="i">
            <div class="title">
                <div class="list">
                   <img :src="item.header" alt="业主头像">
                </div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>工长姓名：<em style="color:#01af69;">{{item.name}}</em></h5></div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>时间：<em style="color:#01af69;">{{item.time.slice(0,10)}}</em></h5></div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>星级：<el-rate v-model="item.grade" show-text style="display: inline-block;"></el-rate></h5></div>
            </div>
            <div class="cont">
                <span style="color:#01af69;font-weight: bold;">评价内容：</span>
                <p style="display: inline-block;">{{item.content}}</p>
            </div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            usereval:[],//评价列表
            url:'http://localhost:3000/foreman/getforamnimg/?img=',
            imgurl:''
        }
    },
    methods:{
        getusereval(){
            this.$Axios({
                url:'/users/getallusereval',
                method:'GET',
                data:{userid:this.$store.state.user.id},
                success:(result=>{
                    this.usereval = result;
                    for(let i in result){
                        let url = 'http://localhost:3000/foreman/getforamnimg/?img=';
                        let img = result[i].header.slice(-6)
                        result[i].header = `${url}`+`${img}`
                    }
                    this.usereval =result
                    console.log(this.usereval)
                })
            })
        }
    },
    created(){
        this.getusereval()
    }


}
</script>

<style scoped>
.cont{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
    
}
img{
    width: 30px;
    height: 30px;
     border-radius: 50%;
}
.title .list{
    width: 30px;
    height: 30px;
    border: 1px solid red;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    margin-left: 10px;
    border-radius: 50%;
    margin-top: -8px;
}
.item .title{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    justify-items: left;
}
.content .item{
    width: 98%;
    margin: 10px;
    height: 100px;
    border: 1px dashed #eee;
}
.content{
    width: 98%;
    height: 600px;
    margin: 10px;
    border: 1px solid #eee;
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