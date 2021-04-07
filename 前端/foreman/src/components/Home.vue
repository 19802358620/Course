<template>
<div>
<Banner :bannerlist='list'></Banner>
<Center></Center>
<div class="zhong">
  <!-- 优质工长 -->
<fromain></fromain>
<!-- 效果图-->
<Info></Info>
<!-- 工长介绍 -->
<!-- <Card></Card> -->
<!-- 装修流程 -->
<Setp></Setp>
<!-- 装修日记 -->
<Day></Day>
<!-- 招标 -->
<Invitation></Invitation>
<!-- 为什么选择 -->
<back></back>
</div>

</div>
</template>
<script>
import Banner from '../views/Banner'
import Center from '../views/Center'
import Info from '../views/Information'
// import Card from '../views/Card'
import Setp from '../views/Step'
import Day from '../views/Day'
import Invitation from '../views/Invitation'
import back from '../views/back'
import fromain from '../views/forman/frominfo'
export default {
    components:{
        Banner,
        Center,
        Info,
        // Card,
        Setp,
        Day,
        Invitation,
        back,
        fromain
    },
    data(){
        return{
            list:[
                {
                    url:require('../assets/imgs/lunbo/lunbo01.png')
                },
                {
                  url:require('../assets/imgs/lunbo/lunbo02.png')
                },
                {
                  url:require('../assets/imgs/lunbo/lun03.png')
                },
                {
                  url:require('../assets/imgs/lunbo/banle_1022.jpg')
                },
            ],
            width:document.documentElement.clientWidth,
        }
    }
}
</script>

<style scoped>
.zhong{
  width: 1200px;
  margin: 20px auto;
  height: auto;
  border: 1px solid #f5f5f5;
}
</style>