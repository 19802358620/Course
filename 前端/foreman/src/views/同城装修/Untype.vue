<template>
  <div class="ty">
    <div class="my_siteMap">
        <h6 class="h">东方蓝海中心户型图</h6>
    </div>
    <div class="content">
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
        <div class="item">
           <a class="aa" href="#"> <img src="../../assets/imgs/户型图/户型图01.jpg" alt=""></a>
           <span class="sp"><a class="a" href="#">东方蓝海中心户型图</a></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sp{
    display: block;
    height: 30px;
    position: absolute;
    top: 235px;
    width: 100%;
}
.a{
    font-size: 14px;
    color: inherit;
    text-align: center;
}
img{
    width: 100%;
    height: 100%;
}
.item .aa{
    display: block;
    height: 300px;
}
.content{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}
.content .item{
    width: 280px;
    height: 330px;
    border: 1px solid rgb(248, 160, 160);
    margin: 10px 8px;
    position: relative;
}
.ty{
    width: 100%;
    height: auto;
    border: 1px solid;
}
.my_siteMap{
    margin: 0 auto 25px auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #EAEAEA;
    width: 100%;
    height: 40px;
    position: relative;
}
.my_siteMap .h{
    font-weight: normal;
    font-size: 18px;
    color: #333;
    position: absolute;
    top: -52px;
}

</style>