<template>
<div>
<Banner :bannerlist='list'></Banner>
<Center></Center>
<div class="zhong">
<!-- 效果图-->
<Info></Info>
<!-- 工长介绍 -->
<Card></Card>
<!-- 装修流程 -->
<Setp></Setp>
<!-- 装修日记 -->
<Diary></Diary>
</div>

</div>
</template>
<script>
import Banner from '../views/Banner'
import Center from '../views/Center'
import Info from '../views/Information'
import Card from '../views/Card'
import Setp from '../views/Step'
import Diary from '../views/Diary'
export default {
    components:{
        Banner,
        Center,
        Info,
        Card,
        Setp,
        Diary
    },
    data(){
        return{
            list:[
                {
                    url:require('../assets/imgs/lunbo/下载.png')
                },
                {
                  url:require('../assets/imgs/lunbo/01.png')
                }
            ]
        }
    }
}
</script>

<style scoped>
.zhong{
  width: 1200px;
  margin: 20px auto;
  height: auto;
  border: 1px solid red;
}
</style>