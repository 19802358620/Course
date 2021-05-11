<template>
  <div>
      <viewer :images="photo"> 
          <img
                v-for="(item,index) in photo"
                :src="item.src"
                :key="index"
                :onerror="errorImg"
              >
</viewer>
  </div>
</template>

<script>
export default {
    data(){
        return{
            photo:[
                {src:'http://image.haogongzhang.com/case/201802/hVen7A2smG8D9.jpg!xgt.big'},
                {src:'http://image.haogongzhang.com/case/201506/WsrsUzOAzoUz0.jpg!xgt.big'}
            ]
        }
    }

}
</script>

<style>

</style>