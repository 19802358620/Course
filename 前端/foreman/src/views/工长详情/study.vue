<template>
  <div>
      <left></left>
      <div class="right">
          <div class="tit">
              <h2>工地案例</h2>
          </div>
         <div class="w" v-for="(item,i) in caselist" :key="i">
              <a class="img">
                  <img :src="item.img" alt="">
              </a>
              <div class="cl">
                  <a href="#" class="bb">
                     {{item.name}}
                  </a>
                  <p>合同价：{{item.price}}<span style="padding-left: 10px;">开工日期：{{item.time.slice(0,10)}}</span></p>
                  <div class="li_w">
                    <ul class="ul_w">
                        <li><i></i>水电阶段</li>
                        <li><i></i>泥木阶段</li>
                        <li><i></i>油漆阶段</li>
                        <li><i></i>完美竣工</li>
                    </ul>
                  </div>
                  <div class="btn_w">
                    <a href="#" class="ww" @click="detail(item)">查看工地详情</a>
                    <a href="#" class="ww01">申请参观工地</a>
                    <span class="btn3">
                        已有<em>{{item.visits}}</em>查看
                    </span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import left from '../工长详情/fromleft'
export default {
    name:'study',
    components:{
        left,
    },
    data(){
        return{
            foreman:{},//工长信息
            caselist:[],//案例列表

        }
    },
    methods:{
        //修改游览量
        updatevisits(item){
            this.$Axios({
                url:'/foreman/casevisit',
                method:'GET',
                data:{id:item.id,visits:Number(item.visits)+1},
                success:(result=>{
                    console.log(result)
                })
            })
        },
        //查看工地详情
        detail(item){
            this.$router.push({name:'sitedetails',params:{item:item,foreman:this.foreman}})
            this.updatevisits(item)
        },
        //获取工长信息
         getforman(){
            this.foreman = this.$route.params;
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
        this.getforman();
        this.getcaselist()
    }

}
</script>

<style scoped>
.btn_w .btn3 .em{
    color: #ff4400;
    padding: 0 5px;
    font-style: normal
}
.btn_w .btn3{
    width: 142px;
    float: left;
    text-align: center;
    display: block;
    background: #f8f8f8;
    color: #999;
    font-size: 12px;
}
.btn_w .ww{
    background: #01af63;
    color: #FFF;
    width: 142px;
    float: left;
    text-align: center;
    display: block;
    font-size: 12px;
    margin-left: 10px;
}
.btn_w .ww01{
    width: 142px;
    background: #fff;
    color: #01af63;
    border: 1px solid #01af63;
    font-size: 12px;
}
.btn_w{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 22px;
    position: absolute;
    top: 100px;
    display: flex;
    justify-content: start;
}
.ul_w{
    width: 400px;
    border-top: 2px solid #eee;
    margin: 10px auto;
    margin-left: 10px;
}
.ul_w li{
    color: #8e8e8e;
    width: 50px;
    text-align: center;
    line-height: 16px;
    float: left;
    margin-left: 40px;
    font-size: 12px;
    color: #01af63;
}
.ul_w li i{
    width: 15px;
    height: 15px;
    margin: 0 auto;
    display: block;
    background: url('../../assets/imgs/小图标/ico.png') no-repeat -85px -22px;
    top: -7px;
    position: relative;
    background-position: -67px -20px;
}
.li_w{
    width: 100%;
    height: 45px;
    position: absolute;
    top: 70px;
}
.img{
    width: 220px;
    float: left;
    height: 165px;
}
.img img{
    width: 100%;
    height: 165px;
    margin-left: 10px;
}
.w{
    width: 900px;
    height: 165px;
    border-bottom: 1px dotted #a0a0a0;
    padding: 30px 0;
}
.w .cl{
    width: 650px;
    height: 165px;
    border: 1px solid #eee;
    float: right;
    position: relative;
}
.w .cl .bb{
    position: absolute;
    top: -60px;
    left: -281px;
    color: #000;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
}
.w .cl p{
    color: #8e8e8e;
    font-size: 12px;
    position: absolute;
    top: -30px;
    left: 10px;
}
.ul .step{
    width: 15px;
    height: 15px;
    margin: 0 auto;
    display: block;
    background: url('../../assets/imgs/工长/ico-bg.png') no-repeat -85px -22px;
    top: -7px;
    position: relative;
    background-position: -67px -20px;
}
.name .ul{
    float: left;
    width: 366px;
    padding-left: 40px;
    border-top: 2px solid #eee;
}
.name .ul li{
    float: left;
    margin-right: 40px;
    color: #8e8e8e;
    width: 50px;
    text-align: center;
    line-height: 16px;
}
.item .name p{
    color: #8e8e8e;
    margin-bottom: 20px;
    width: 100%;
    white-space: nowrap;
    float: left;
    font-size: 12px;
    position: absolute;
    top: -34px;
    left: 3px;
    text-align: left;
}
.item .name strong{
    font-size: 18px;
    color: #000;
    width: 100%;
    margin-bottom: 5px;
    float: left;
    font-weight: bold;
    text-align: left;
    position: absolute;
    top: -65px;
    left: 0px;
}
a{
    color: black;
}
.item .name{
    width: 625px;
    padding-left: 30px;
    float: left;
    height: 165px;
    overflow: hidden;
    border: 1px solid;
    margin-left: 20px;
    position: relative;
}
.item .img{
    width: 220px;
    float: left;
    height: 165px;
    overflow: hidden;
}
.right .item{
    width: 900px;
    padding: 30px 0;
    border-bottom: 1px dotted #a0a0a0;
    height: 165px;
    overflow: hidden;
}
.right .tit{
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #bbbbbb
}
.right .tit h2{
    color: #01af63;
    float: left;
    font-size: 16px;
    font-weight: bold;
}
.right{
    width: 900px;
    float: right;
    border: 1px solid #d6d6d6;
    padding: 0 14px;
    height: auto;
}

</style>