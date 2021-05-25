<template>
  <div class="m mm">
      <div class="warp">
          <p class="title">优质口碑好工长</p>
          <div class="sp_t">
              该地区共有<span style="color: #ff4400;">{{foremanlist.length}}</span>位工长 
              <a @click="more" style="color: #ff4400;">查看更多工长</a>
          </div>
      </div>
      <div class="left">
          <div class="first">
             <div class="newitem">
                  <div class="newleft">
                      <a href="">
                          <img src="../../assets/imgs/照片墙/03.jpg" alt="" style="width:50px;height:50px;position: absolute;left: 0;">
                      </a>
                  </div>
                  <div class='newright'>
                      <a class="title">Lorem ipsum dolor sit amet.</a>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 0px;padding-top: 2px;left:10px">国内新闻</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 60px;padding-top: 2px;">来源：</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 140px;padding-top: 2px;">发布日期：</span>
                      <p class="newcont">Lorem ipsum dolor sit amet consectetur adipisicing elidfgfgdfgfgt.</p>
                  </div>
              </div>
               <div class="newitem">
                  <div class="newleft">
                      <a href="">
                          <img src="../../assets/imgs/照片墙/03.jpg" alt="" style="width:50px;height:50px;position: absolute;left: 0;">
                      </a>
                  </div>
                  <div class='newright'>
                      <a class="title">Lorem ipsum dolor sit amet.</a>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 0px;padding-top: 2px;left:10px">国内新闻</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 60px;padding-top: 2px;">来源：</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 140px;padding-top: 2px;">发布日期：</span>
                      <p class="newcont">Lorem ipsum dolor sit amet consectetur adipisicing elitghfgdfgdfgdf.</p>
                  </div>
              </div>
            
             <div class="newitem">
                  <div class="newleft">
                      <a href="">
                          <img src="../../assets/imgs/照片墙/03.jpg" alt="" style="width:50px;height:50px;position: absolute;left: 0;">
                      </a>
                  </div>
                  <div class='newright'>
                      <a class="title">Lorem ipsum dolor sit amet.</a>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 0px;padding-top: 2px;left:10px">国内新闻</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 60px;padding-top: 2px;">来源：</span>
                      <span style="font-size: 12px;position: absolute;top: -60px;left: 140px;padding-top: 2px;">发布日期：</span>
                      <p class="newcont">Lorem ipsum dolor sit amet consectetur adipisicing elitfgfgfgfgfgf.</p>
                  </div>
              </div>
            
            
              
          </div>
          <div class="send">
               <el-carousel indicator-position="outside" class="banner">
                <el-carousel-item v-for="item in imglist" :key="item">
                  <img :src="item.url" alt="" class="bannerimg">
                </el-carousel-item>
              </el-carousel>
          </div>
      </div>
      <div class="formain">
          <ul>
              <li v-for="(item,i) in foremanlist" :key="i">
                  <div class="item">
                      <img :src="item.header" alt="">
                      <a  class="sp" @click.stop="shop">进入店铺</a>
                  </div>
                  <h4>
                      <a href="">{{item.name}}</a>
                  </h4>
                  <p>
                      <i class="icon"></i>
                      高级工长
                  </p>
              </li>
          </ul>
      </div>
      <div class="foter foters"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    nme:'frominfo',
    data(){
        return{
            imglist:[
               {url:require('../../assets/imgs/lunbo/03.jpg')},
               {url:require('../../assets/imgs/lunbo/01.png')},
            ],
            APPCODE:"287dcfc8e154421797746496aa87db5c",
            newlist:[],//新闻列表
            foremanlist:[],//工长列表
             url:'http://localhost:3000/foreman/getforamnimg/?img=',
        }
    },
    methods:{
        shop(){
            this.$router.push({name:'shop',params:{id:2}})
        },
        more(){
            this.$router.push({name:'foremin'})
        },
        //获得新闻内容
       async getNews(channelId){
           console.log(1111)
           console.log(channelId)
            await axios.get("http://ali-news.showapi.com/newsList",{
                headers: {
                    Authorization: `APPCODE 287dcfc8e154421797746496aa87db5c`,
                },
                params:{
                    channelId
                }
            }).then(res=>{
                console.log(res)
                this.newlist = res.data.showapi_res_body.pagebean;
                 console.log(this.newlist)
            })
            

        },
        //获取工长信息
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
                    this.foremanlist = result
                })
            })
        }

    },
    created(){
        // this.getNews("5572a108b3cdc86cf39001cd")
        this.getforemanlist()
    }

}
</script>

<style scoped>
.newitem .newright .title{
    font-size: 12px;
    position: absolute;
    top: -75px;
    left:10px;
    font-weight: bold;

}
.newitem .newright .newcont{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    position: absolute;
    top: 26px;
    padding-top: 4px;
    left:10px;
    display: inline-block;
    width: 310px;
}
.newitem .newleft{
    width: 50px;
    height: 50px;
    position: relative;
    margin: 2px;
    float: left;
}
.newitem .newright{
    width: 310px;
    height: 50px;
    position: relative;
    margin: 2px;
    float: left;
}
.first .newitem{
    width: 100%;
    height: 60px;
    margin-top: 5px;
     border-bottom: 1px solid #eee;
}
.bannerimg{
    width: 100%;
    height: 100%;
}
.banner{
    height: 230px;
    overflow: hidden;
}
.left .first{
    width: 98%;
    margin: 10px auto;
    height: 200px;
}
.left .send{
    width: 98%;
    margin: 10px auto;
    height: 230px;
}
.foters{
    position: absolute;
    top: 705px;
}
.mm{
    border: none;
    position: relative;
}
.warp{
    text-align: center;
    font-family: "微软雅黑", Tahoma, Arial;
    padding-top: 40px;
    width: 100%;
}
.warp .title{
    font-size: 32px;
    margin-bottom: 10px;
    color: black;
}
.warp .sp_t{
    font-size: 14px;
    color: #717171;
    padding-bottom: 40px;
}
.icon{
    background: url('../../assets/imgs/工长/ico-bg.png');
    background-position: -20px 0;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
    margin-left: 6px;
}
p{
    line-height: 20px;
    color: #999999;
    text-align: center;
    font-size: 12px;
}
h4{
    line-height: 22px;
    font-weight: normal;
    width: 100%;
    text-align: center;
    font-size: 12px;
}
h4 a{
    color: #000000;
}
.item{
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: #000000;
    margin-top: 12px;
    border-radius: 50px;
    position: relative;
}
ul li{
    width: 100px;
    padding: 0 30px;
    float: left;
}
.icon{
    background: url('../../assets/imgs/工长/ico-bg.png');
    background-position: -20px 0;
}
.m .left{
    width: 380px;
    border: 1px solid #eee;
    height: 460px;
    float: left;
    margin-top: -30px;
    margin-left: 5px;
}
.m{
    width: 100%;
}
.formain{
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    float: right;
    background-color: #f6f6f6;
    margin-top: -30px;
    margin-bottom: 45px;
}

img{
    width: 100px;
    height: 100px;
}
.item .sp{
   width: 68px;
   height: 24px;
   line-height: 24px;
   display: none;
   background: #FF4400;
   border-radius: 4px;
   text-align: center;
   font-size: 12px;
   color: #FFFFFF;
   top: 38px;
   z-index: 999;
   position: absolute;
   margin-left: 16px;
}
.item:hover .sp{
    display: block;
}

</style>