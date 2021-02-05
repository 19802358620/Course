<template>
  <div class="m" :style="{height:`${height}px`}">
      4654555454
  </div>
</template>
<script>
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
        }
    }
}
</script>

<style scoped>
.m{
    width: 1200px;
    margin: 10px auto;
    border: 1px solid red;
}
</style>