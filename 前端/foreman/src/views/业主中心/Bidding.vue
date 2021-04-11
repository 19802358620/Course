<template>
  <div class='warp'>
      <div class="header">
          <div class="tip">立即新建装修需求，您可获得以下6项免费服务！</div>
          <ul class="ul">
              <li class="li" style="position: absolute;top: -29px;left: -87px;">1.免费验房服务（落地城市）</li>
              <li class="li" style="position: absolute;top: -29px;left: 220px;">2.三家本地正规装修公司上门量房</li>
              <li class="li" style="position: absolute;top: 1px;left: -58px;">3.三家正规装修公司提供不同的设计方案</li>
              <li class="li" style="position: absolute;top: 1px;left: 244px;">4.三家正规装修公司免费出具三份报价对比</li>
              <li class="li" style="position: absolute;top: 27px;left: -39px;">5.免费第三方监管节点验收服务（装修保用户）</li>
              <li class="li" style="position: absolute;top: 27px;left: 233px;">6.先装修，满意后付款（装修保用户）</li>
          </ul>
      </div>
      <div class="content">
          <div>
          <el-form ref="form" :model="form" label-width="70px" :rules="rules" style="padding: 10px 3px;">
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="房屋类别">
                        <el-select v-model="value" placeholder="请选择">
                             <el-option
                               v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                             </el-option>
                       </el-select>
                  </el-form-item>
                </el-col>
                 <el-col :span="6">
                     <el-form-item label="住宅空间">
                        <el-input  placeholder="住宅空间"></el-input>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="房屋现状">
                        <el-select v-model="form.region" placeholder="当前房屋现状">
                         <el-option
                               v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                             </el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="面积">
                        <el-input  placeholder="房屋面积"></el-input>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="房屋结构">
                        <el-select v-model="form.region" placeholder="请选择房屋结构">
                          <el-option label="新房" value="shanghai"></el-option>
                          <el-option label="翻修" value="beijing"></el-option>
                        </el-select>
                  </el-form-item>
                </el-col>
                 <el-col :span="6">
                     <el-form-item label="装修风格">
                        <el-select v-model="form.region" placeholder="装修风格">
                          <el-option label="新房" value="shanghai"></el-option>
                          <el-option label="翻修" value="beijing"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="房屋用途">
                        <el-select v-model="form.region" placeholder="请选择房屋用途">
                          <el-option label="新房" value="shanghai"></el-option>
                          <el-option label="翻修" value="beijing"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="承包方式">
                        <el-select v-model="form.region" placeholder="承包方式">
                          <el-option label="新房" value="shanghai"></el-option>
                          <el-option label="翻修" value="beijing"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="所在地区">
                       <el-input placeholder="装修地点"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="6">
                     <el-form-item label="装修预算">
                        <el-select v-model="form.region" placeholder="填写装修预算">
                          <el-option label="新房" value="shanghai"></el-option>
                          <el-option label="翻修" value="beijing"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="量房日期">
                      <el-input placeholder="输入量房时间段"></el-input>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="备注">
                        <el-input  placeholder="备注"></el-input>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                  <el-col :span='24'>
                        <el-form-item label="要求">
                        <el-input type="textarea" :rows="2"  placeholder="要求"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>
               <el-row :gutter="5">
                  <el-col :span='24'>
                        <el-form-item label="工长要求">
                        <el-input type="textarea" :rows="2"  placeholder="您对投标工长的要求"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>
              <el-row :gutter="5">
                  <el-col>
                      <div class="colbtn">
                          <input type="button" name="" id="" value="发布需求">
                      </div>
                  </el-col>
              </el-row>
        </el-form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        form:{},
        value:'',
        //表单验证规则
        rules:{

        },
        options: [{
          value: '选项1',
          label: '毛呸'
        }, {
          value: '选项2',
          label: '简装'
        }, {
          value: '选项3',
          label: '精装'
        }, {
          value: '选项4',
          label: '翻修'
        }, {
          value: '选项5',
          label: '商品房'
        },
        {
          value: '选项5',
          label: '二手'
        },
        ],
    }
}
}
</script>

<style scoped>
.colbtn input{
    margin: 0 auto;
    display: block;
    width: 195px;
    height: 36px;
    line-height: 36px;
    background: #ff4400;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 14px;
}
.colbtn{
    height: 36px;
    line-height: 36px;
}
.warp .content{
    width: 100%;
    border: 1px solid #eee;
}
.ul .li{
    width: 360px;
    float: left;
    color: #5a5a5a;
    font-size: 12px;
}
.warp{
    width: 100%;
}
.warp .header{
    background: #fffdee;
    border: 1px solid #fff4e2;
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    position: relative;
}
.warp .header .tip{
    font-size: 16px;
    color: #ff4400;
    padding-bottom: 8px;
    text-align: left;
    margin-top: -76px;
}

</style>>
