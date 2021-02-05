<template>
  <div class="m" :style="{height:`${height}px`}"></div>
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
    border: 1px solid red;
    margin: 10px auto;
}

</style>