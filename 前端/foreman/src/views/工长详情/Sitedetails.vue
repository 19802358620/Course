<template>
  <div>
      <left :foremanitem ='foreman'></left>
      <div class="right">
          <div class="tit">
              <h2>{{foreman.name}}</h2>
          </div>
          <div style="padding: 35px 0;">
              <div class="p-left">
                  工长：<span style="color: #8e8e8e;">{{foreman.name}}</span><br>
                  开工日期：<span>{{caselist.time.slice(0,10)}}</span>
              </div>
          </div>
          <div class="ji">
              <a href="">{{caselist.status}}</a>
          </div>
          <!-- <div class="ngz-jl-pic-w">
              <img src="../../assets/imgs/工长/公地详情.jpg" alt="">
              <p style="line-height: 60px;">施工现场</p>
          </div>
           <div class="ngz-jl-pic-w">
              <img src="../../assets/imgs/工长/工地详情01jpg.jpg" alt="">
              <p style="line-height: 60px;">施工现场</p>
          </div> -->
          <div>
               <v-gallery :images="caseimgs"></v-gallery>
          </div>
      </div>
  </div>
</template>

<script>
import left from '../工长详情/fromleft'
export default {
    name:'Sitedetails',
    components:{
        left
    },
    data () {
        return {
            foreman:{},//工长信息
            caselist:{},//单条案例信息
            caseimgs:[],//案例展示图片
            url:'http://localhost:3000/getimg/?name='
            
        }
    },
    methods:{
        //获取工长信息和单条案例信息
         getforman(){
            this.foreman = this.$route.params.foreman;
            this.caselist = this.$route.params.item
        },
        //获取工长案例展示图片
        getcaseimgs(){
            let url = 'http://localhost:3000/getimg/?name='
            this.$Axios({
                url:'/foreman/getcaseimg',
                method:'GET',
                data:{caseid:this.caselist.id,foremanid:this.foreman.id},
                success:(result=>{
                    for(let i in result){
                        let img = result[i].src.slice(45)
                        result[i].url = `${url}`+'caseimgs&img='+`${img}`
                    }
                    this.caseimgs = result
                    console.log(result)
                })
            })

        }
    },
    created(){
        this.getforman()
        this.getcaseimgs()
    }

}
</script>

<style scoped>
.right .ngz-jl-pic-w img{
    border: 4px solid #94cea8;
    box-shadow: 0 0 2px 2px #cbcbcb;
    padding: 10px;
    width: 530px;
    vertical-align: middle;
    image-rendering: optimizeQuality;
}
.right .ngz-jl-pic-w{
    background: #eee;
    margin: 30px auto 0;
    overflow: hidden;
    padding: 40px 40px 15px;
    text-align: center;
    width: 558px;
    font-size: 16px;
}
.right .ji a{
    height: 48px;
    line-height: 48px;
    line-height: 46px;
    color: #444444;
    display: inline-block;
    float: left;
    padding: 0 25px;
    margin-right: 1px;
    background: #cccccc;
    background: #01af63;
    color: #ffffff !important;
    margin-left: -570px;
}
.right .ji{
    width: 900px;
    height: 48px;
    background: #ebebeb;
    margin-top: 10px;
}
.right .p-right a{
    width: 110px;
    height: 30px;
    line-height: 30px;
    background: #fe6665;
    border-radius: 3px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    margin-top: 5px;
    font-size: 12px;
}
.right .p-right{
    width: 110px;
    float: right;
    margin-top: -68px;
}
.right .p-left{
    height: 88px;
    float: left;
    width: 550px;
    line-height: 22px;
    padding-left: 20px;
    text-align: left;
    font-size: 12px;
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

</style>>