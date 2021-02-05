<template>
  <div class="m" :style="{height:`${height}px`}">
      <div class="tilte">
          <div class="ared">
              <a href=""><h1>重庆小区</h1></a>
          </div>
      </div>
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
.tilte{
    width: 100%;
    padding: 0px;
    border: 1px solid #DADADA;
    height: 200px;
}
.tilte .ared{
    font-size: 14px;
    padding: 14px 0px;
    border-bottom: 1px solid #DADADA;
}
.tilte .ared h1{
    display: block;
    padding-left: 15px;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    float: left;
    color: #333333;
}
</style>