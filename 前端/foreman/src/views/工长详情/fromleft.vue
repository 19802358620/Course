<template>
<div>
<div class="contert">
  <div class="left">
      <div class="person">
          <img :src="foreman.header" alt="">
      </div>
      <div class="info_first">
          <div class="item">
              <h2>{{foreman.name}}</h2>
              <i class="rz"></i>
              已认证
              <i class="rc"></i>
              高级工长
          </div>
          <p class="p">
              <i class="p_er"></i>
              籍贯：
              <em>{{foreman.city}}</em>
          </p>
          <p class="p" style="float: right;">
              <i class="p_err"></i>
              从业：
              <em>{{foreman.experience}}</em>
          </p>
          <p class="p" style="margin-top: -38px;">
              <i class="qu"></i>
              接单区域：
              <em>{{foreman.city}}</em>
          </p>

      </div>
      <div class="send">
          <div class="it">
          <p class="p">
              <i class="pd"></i>
              签单总数：
              <span>0</span>
          </p>
          <p  class="p" style="float: right;">
              <i class="perr" ></i>
              预约总数：
              <span>9</span>
          </p>
          <p class="p">
              <i class="pj"></i>
              业主评价：
              <span>0</span>
          </p>
          <p class="p" style="float: right;">
              <i class="psr" ></i>
              在建工地：
              <span>9</span>
          </p>
          </div>
      </div>
      <div class="three">
          <p style="position: absolute;top: -61px;">
              <i class="three-a"></i>
          接受装修第三方监管
          </p>
          <p style="position: absolute;top: -25px;">
              <i class="three-b"></i>
              售后：整体2年，水电5年
          </p>
          
      </div>
  </div>
  <div class="left-b">
      <div class="tit">
          <h2>预约我的业主</h2>
          <span>共<i style="font-style: normal;color: #01af63;">9</i>人</span>
      </div>
      <ul class="ul">
          <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
           <li>
              <div class="name">张三三</div>
              <div class="bao">保密</div>
              <div class="date">11-22</div>
          </li>
      </ul>
  </div>
  </div>
</div>
 
</template>

<script>
export default {
    props:['foremanitem'],
    data(){
        return{
            foreman:{},//工长信息
        }
    },
    methods:{
        //获取工长信息
        getforman(){
            this.foreman = this.$route.params;
        },
        obj(){
            for(var key in this.foremanitem) {
           return false;
           }
           return true;
        }
    },
    created(){
        let res = this.obj()
        if(res){
            this.getforman()
        }else{
            this.foreman = this.foremanitem
        }
    }

}
</script>

<style scoped>
.contert{
    width: 250px;
    float: left;
}
.ul{
    padding: 12px 0;
}
.ul .date{
    width: 50px;
    float: left;
    text-align: right;
}
.ul .name{
    width: 60px;
    float: left;
}
.ul .bao{
    width: 110px;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.ul li{
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #505050;
}

.left-b{
    float: left;
    width: 250px;
    height: 300px;
    border: solid 1px;
    margin-top: 30px;
    border: solid 1px #d6d6d6;
}
.left-b .tit{
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #bbbbbb;
    font-size: 14px;
}
.left-b  .tit h2{
    color: #01af63;
    float: left;
    font-size: 14px;
    font-weight: bold;
    padding: 0 14px;
}
.left-b .tit span{
    color: #505050;
    float: right;
    font-size: 14px;
}
.three{
    width: 220px;
    /* padding: 10px 0; */
    font-size: 12px;
    margin: 0 auto;
    position: relative;
}
.three .three-a{
    width: 20px;
    height: 26px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    margin-right: 6px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: 0 -14px;
}
.three .three-b{
    width: 20px;
    height: 26px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    margin-right: 6px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -40px -14px;
}
.it{
    width: 220px;
    padding: 0 14px;
    border-bottom: 1px dotted #a0a0a0;
    height: 85px;
}
.send{
    width: 220px;
    font-size: 12px;
}
.send .p{
    color: #666;
    height: 30px;
    line-height: 30px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    margin-top: 8px;
}
span{
    color: #00a566; 
}
.send .pd{
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -42px 0;
}
.info_first p{
    color: #666;
    height: 30px;
    line-height: 30px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
}
.info_first{
    width: 220px;
    border-bottom: 1px dotted #a0a0a0;
    padding: 10px 0;
}
em{
    color: #aaaaaa;
    font-style: normal
}
.pj{
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -56px 0;
}
.perr{
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -14px 0;
}
.psr{
   width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -70px 0; 
}
.p .p_er{
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: 0 0;

}
.p .p_err{
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -14px 0;

}
.p .qu{
   width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 5px;
    background: url('../../assets/imgs/工长/new-gz-bg.png') no-repeat;
    background-position: -28px 0; 
}

.info_first .p{
    color: #666;
    height: 30px;
    line-height: 30px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    margin-top: -70px;
}
.item{
    margin-top: -65px;
    font-size: 14px;
}
.info_first .rc{
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url('../../assets/imgs/工长/ico-bg.png') no-repeat;
    vertical-align: middle;
    margin-right: 3px;
    margin-left: 6px;
    background-position: -20px 0;
}
.info_first .rz{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
    margin-left: 6px;
    background: url('../../assets/imgs/工长/ico-bg.png') no-repeat;
    background-position: -60px 0;
}
.info_first h2{
    font-size: 16px;
    line-height: 100%;
    display: inline;
    font-weight: normal;
}
.left .info_first{
    width: 220px;
    border-bottom: 0;
    border-top: 0;
    padding: 0 14px;
    /* border: 1px solid #d6d6d6; */
    position: relative;
}
.info_first .item{
    width: 220px;
    border-bottom: 1px dotted #a0a0a0;
    padding: 10px 0;
}
.left{
    width: 250px;
    height: 538px;
    border: 1px solid #d6d6d6;;
    float: left; 
}
.left .person{
    width: 250px;
    height: 250px;
    overflow: hidden;
}
.left .person img{
    width: 250px;
    height: 250px;
}

</style>