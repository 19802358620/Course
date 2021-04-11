<template>
  <div>
      <left></left>
      <div class="right">
           <div class="tit">
              <h2>最新订单</h2>
          </div>
            <div class="r">
          <dl>
              <dt style="width:160px">业主</dt>
              <dt style="width:160px">小区</dt>
              <dt style="width:160px">面积</dt>
              <dt style="width:160px">户型</dt>
              <dt style="width:160px">报价</dt>
              <dd style="width:160px">贾先生</dd>
              <dd style="width:160px">蓝谷</dd>
              <dd style="width:160px">200</dd>
              <dd style="width:160px">3室两厅</dd>
              <dd style="width:160px">20万</dd>
          </dl>
      </div>
      </div>
  </div>
</template>

<script>
import left from '../工长详情/fromleft'
export default {
    name:'order',
    components:{
        left
    }

}
</script>

<style scoped>
dd{
    float: left;
    height: 32px;
    line-height: 32px;
    border-top: 1px dotted #dbdbdb;
    font-size: 12px;
    padding-top: 10px;
}
dl{
    color: #4f4f4f;
    text-align: center;
}
dt{
    float: left;
    height: 42px;
    line-height: 42px;
    font-weight: bold;
    font-size: 12px;
}
.r .itm{
    width: 100%;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #e8e8e8;
}
.r .itm h2{
    float: left;
    color: #01af63;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
}
.r{
    width: 900px;
    height: 145px;
    float: right;
    position: relative;
    border: 1px solid #d6d6d6;
    margin-top: 10px;
}
.right{
    width: 900px;
    float: right;
    border: 1px solid #d6d6d6;
    padding: 0 14px;
    height: auto;
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
</style>