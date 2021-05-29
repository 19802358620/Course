<template>
  <div  class="content">
      <div class="head">
          <img src="../../assets/imgs/好工长2.jpg" alt="">
      </div>
      <div class="right">待设计</div>
      <div class="b">
          <div class="item" v-for="(item,i) in froemanlist" :key="i">
              <a class="login">
                  <img :src="item.header" alt="">
                  <div class="name">
                      <span class="i">{{item.name}}</span>
                      <span class="icon"></span>
                      <span class="icon01"></span>
                      <span class="icon02"></span>
                  </div>
                  <div class="it">
                      <h6 class="h">签单总数：</h6>
                      <span class="bt">{{item.numberord}}</span>
                  </div>
                  <div class="it01">
                      <h6 class="h">预约总数：</h6>
                      <span class="bt">{{item.reservation}}</span>
                  </div>
                  <div class="it02">
                      <h6 class="h">业主评价：</h6>
                      <span class="bt">66</span>
                  </div>
                  <div class="it03">
                      <h6 class="h">在建工地：</h6>
                      <span class="bt">{{item.site}}</span>
                  </div>
              </a>
              <div class="btnn" @click="deit(item)">了解详情</div>
              <!-- <el-button class="btn">默认按钮</el-button> -->
              <a href="" class="an">
                  <div class="xiang">
                      <img src="../../assets/imgs/详情/详情1.png" alt="">
                      <h4>海星虹城</h4>
                  </div>
                  <div class="xiang">
                      <img src="../../assets/imgs/详情/详情1.png" alt="">
                      <h4>海星虹城</h4>
                  </div>
                  <div class="xiang">
                      <img src="../../assets/imgs/详情/详情1.png" alt="">
                      <h4>海星虹城</h4>
                  </div>
              </a>
          </div>
          <div class="pager">
              <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
      </div>
      <div class="rh">待设计</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
            froemanlist:[],//工长列表
            caselist:[],//工长案例列表
        }
    },
    methods:{
        //了解工长详情
        deit(item){
            this.$router.push({name:'shop',params:item})
        },
        //获取工长列表
        getforemanlist(){
            this.$Axios({
                url:'/foemanlist',
                method:'GET',
                data:{city:'重庆市'},
                success:(result=>{
                    console.log(result)
                    for(let i in result){
                        result[i].header = 'http://localhost:3000/foreman/getforamnimg/?img='+result[i].header.slice(-6)
                    }
                    this.froemanlist = result.slice(10,15)
                })
            })
        },
    //获取案例列表
      getcaselist(){
        this.$Axios({
          url:'/foreman/getcaselist',
          method:'GET',
          data:{foremanid:this.foreman.id},
          success:(result=>{
            this.caselist= result
            for(let i in this.caselist){
              let url = 'http://localhost:3000/getimg?';
              let name = 'caseimg'
              let img = this.caselist[i].img.slice(-8)
              this.caselist[i].img = `${url}`+'name='+`${name}`+'&img='+`${img}`
            }
            console.log(this.caselist)
          })
        })
      },
    },
    created(){
        this.getforemanlist()
        this.getcaselist()
    }
}
</script>

<style scoped>
.rh{
    width: 250px;
    float: right;
    height: 600px;
    border: 1px solid;
    margin-top: -60px;
}
h4{
    position: absolute;
    top: 70px;
    color: #fff;
    font-size: 12px;
    left: 4px;
}
.xiang{
    position: relative;
    float: left;
    width: 164px;
    height: 164px;
    margin-left: 10px;
}
.xiang img{
    width: 100%;
}
.pager{
    height: 40px;
    margin: 20px 0;
}
.btnn{
    float: left;
    display: block;
    width: 192px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #FF4400;
    text-align: center;
    font-size: 14px;
    color: #FF4400;
    cursor: pointer;
    margin-top: 10px;
    position: absolute;
    top: 150px;
    left: 176px;
}
.btnn:hover{
    background: #FF4400;
    color: #ffffff;
}
.btn{
    position: absolute;
    top: 155px;
    left: 193px;
    width: 145px;
    border: 1px solid;
    color: red;
    height: 38px;
}
.an{
    float: right;
    width: 537px;
    height: 164px;
    margin-left: 15px;
}
.h{
    display: inline-block;
}
.bt{
    color: #01af63;
}
.it{
    float: left;
    width: 95px;
    height: 20px;
    padding-left: 0;
    font-size: 12px;
    color: #666666;
    position: absolute;
    top: -27px;
    left: 148px;
}
.it01{
    float: left;
    width: 95px;
    height: 20px;
    padding-left: 0;
    font-size: 12px;
    color: #666666;
    position: absolute;
    top: -27px;
    left: 246px;
}
.it02{
    float: left;
    width: 95px;
    height: 20px;
    padding-left: 0;
    font-size: 12px;
    color: #666666;
    position: absolute;
    top: 5px;
    left: 148px;
}
.it03{
    float: left;
    width: 95px;
    height: 20px;
    padding-left: 0;
    font-size: 12px;
    color: #666666;
    position: absolute;
    top: 5px;
    left: 246px;
}
.i{
    width: 42px;
    text-align: left;
}
span{
    display: inline-block;
    height: 20px;
}
.icon{
    background: url('../../assets/imgs/foremanbg.png');
    background-position: -16px -21px;
    width: 16px;
}
.icon01{
    background: url('../../assets/imgs/foremanbg.png');
    background-position: -0 -40px;
    width: 20px;
}
.icon02{
    background: url('../../assets/imgs/foremanbg.png');
    background-position: 0 0;
    width: 60px;
}
.name{
    width: 155%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #333333;
    position: absolute;
    top: 0;
    left: 155px;
    display: flex;
    justify-content: space-around;
}
.item .login{
    float: left;
    width: 120px;
    height: 120px;
    margin-top: 22px;
    margin-left: 10px;
    position: relative;
}
.login img{
    width: 120px;
    height: 120px;
    border-radius: 60px;
}
.item{
    width: 908px;
    height: 164px;
    padding: 24px 15px;
    border: 1px solid #e8e8e8;
    margin-top: 25px;
    position: relative;
}
.content{
    width: 1200px;
    margin: 10px auto;
    border: 1px solid #f5f5f5;
    height: 1825px;
    overflow: hidden;
}
.head{
    width: 940px;
    float: left;
}
.head img{
    width: 100%;
}
.right{
    width: 250px;
    margin-left: 5px;
    border: 1px solid;
    height: 292px;
    float: right;
}
.b{
    width: 940px;
    float: left;
    /* border: 1px solid #f5f5f5; */
    height: auto;
    margin-top: -60px;
}

</style>