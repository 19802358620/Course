<template>
<div>
    <div class="itm">
              <h2>工地案例</h2>
              <router-link class="a" to="/" style="float: right;margin-right: 10px;font-size: 14px;color: #505050;">更多>></router-link>
          </div>
          <div class="w" v-for="(item,i) in caselist" :key="i">
              <a class="img">
                  <img :src="item.img" alt="">
              </a>
              <div class="cl">
                  <a href="#" class="bb">
                     {{item.name}}
                  </a>
                  <p>合同价：20<span style="padding-left: 10px;">开工日期：2021-2-2</span></p>
                  <div class="li_w">
                    <ul class="ul_w">
                        <li><i></i>水电阶段</li>
                        <li><i></i>泥木阶段</li>
                        <li><i></i>油漆阶段</li>
                        <li><i></i>完美竣工</li>
                    </ul>
                  </div>
                  <div class="btn_w">
                    <a href="#" class="ww">查看工地详情</a>
                    <a href="#" class="ww01">申请参观工地</a>
                    <span class="btn3">
                        已有<em>466</em>查看
                    </span>
                  </div>
              </div>
          </div>
       
 
</div>
</template>

<script>
export default {
    data(){
        return{
            foreman:{},//工长信息
            caselistL:[],//工长案例信息
        }
    },
    methods:{
        getforman(){
            this.foreman = this.$route.params;
        },
        //获取案例信息
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
        this.getforman()
        this.getcaselist()
    }

}
</script>

<style scoped>

</style>