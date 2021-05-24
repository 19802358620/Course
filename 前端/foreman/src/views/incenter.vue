<template>
  <div class="m header">
      <div class="title">
          <div class="name">装修信息中心</div>
      </div>
      <div class="dem" v-for="(item,i) in demlist" :key=i>
          <div class="left">
              {{i+1}}
          </div>
          <div class="right">
          <h5 class="title">标题：{{item.title}}</h5>
          <h5 class="time">发布时间：{{item.titme}}</h5>
          <h5 class="status">状态：<em style="font-weight: 400;">{{item.status}}</em></h5>
          <h5 class="area">装修面积：<em style="color:#01af69;font-weight: 400;">{{item.area}}</em></h5>
          <h5 class="bao">承包方式：<em style="color:#01af69;font-weight: 400;">{{item.contract}}</em></h5>
          <h5 class="xian">房屋现状：<em>{{item.statusquo}}</em></h5>
          <h5 class="name">小区名称：<em>{{item.communityname}}</em></h5>
           <h5 class="adder">所在地区：<em>{{item.province}}·{{item.city}}·{{item.adder}}</em></h5>
          <i class=" icon" >游览量：<em style="font-weight: bold;">{{item.view}}</em></i>
          <a href="#" class="right1" @click="hand(item)">查看详情>></a>
          </div>
      </div>

 </div>
</template>

<script>
export default {
    data(){
        return{
            city:'重庆',
            demlist:[]
        }
    },
    methods:{
        //根据地区获取装修招标
         getbiddList(){
            this.$Axios({
                url:'/bidlist',
                method:'GET',
                data:{area:'重庆市'},
                success:(result=>{
                    console.log(result)
                    for(let i in result){
                        result[i].titme = result[i].titme.slice(0,10)
                    }
                    this.demlist = result
                })
            })
        },
        //查看详情
        hand(item){
            console.log(item)
            this.$Axios({
                url:'/users/view',
                method:'GET',
                data:{id:item.id,view:Number(item.view)+1},
                success:(result=>{
                    console.log(result)
                })
            })
            this.$router.push({name:'bidding',params:item})
        }
    },
    created(){
        this.getbiddList()
    }
}
</script>

<style scoped>
.right .adder{
    position: absolute;
    top: 0px;
    font-size: 14px;
    left: 158px;
}
.right .name{
    position: absolute;
    top: 0px;
    font-size: 14px;
    left: 10px;
}
.dem .left{
    width: 2%;
    position: absolute;
    left: 10px;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    color: #01af69;
    font-weight: bold;
}
.dem .right{
    width: 95%;
    right: 0;
    height: 100px;
    position: absolute;
}
.dem .right1{
    position: absolute;
    font-size: 14px;
    color: #01af69;
    right: 0;
}
.dem .icon{
    position: absolute;
    font-size: 14px;
    left: 485px;
}
.dem .xian{
    position: absolute;
    font-size: 14px;
    left: 600px;
    top: -33px;

}
.dem .bao{
    position: absolute;
    font-size: 14px;
    left: 470px;
    top: -33px;

}
.dem .area{
    position: absolute;
    font-size: 14px;
    left: 310px;
    top: -33px;

    
}
.dem .status{
    position: absolute;
    font-size: 14px;
    left: 185px;
    top: -33px;

}
.dem .time{
    position: absolute;
    font-size: 14px;
    left: 10px;
    top: -33px;

}
.dem .title{
    position: absolute;
    top: -85px;
    left: 10px;
    font-size: 14px;

}
.dem{
    width: 98%;
    height: 100px;
    border: 1px solid #eee;
    margin: 10px auto;
    position: relative;
}
.header{
    height: 1200px;
    position: relative;
}
.region{
    position: absolute;
    top: -53px;
    left: 330px;
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