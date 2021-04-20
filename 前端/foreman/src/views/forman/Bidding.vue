<template>
  <div class="m">
      <div class="left">
          <table class="tab">
              <tbody>
                  <tr>
                      <td colspan="5"><h1>{{list.suoarea}}</h1></td>
                  </tr>
                  <tr>
                      <td>投标编号：123</td>
                      <td>发布时间：{{list.titme}}</td>
                      <td>订单状态：<span>{{list.status}}</span></td>
                      <td>承包方式：{{list.contract}}</td>
                  </tr>
                  <tr>
                      <td>房屋类别：{{list.type}}</td>
                      <td>房屋空间：{{list.space}}</td>
                      <td>房屋现状：{{list.statusquo}}</td>
                      <td>装修面积：{{list.area}}</td>
                  </tr>
                  <tr>
                      <td>户型结构：{{list.structure}}</td>
                      <td>装修风格：{{list.style}}</td>
                      <td>房屋用途：{{list.use}}</td>
                      <td> 	装修预算：{{list.budget}}</td>
                  </tr>
                  <tr>
                      <td colspan="2">所在地区：{{list.suoarea}}</td>
                      <td colspan="2">街道/小区：{{list.communityid}}</td>
                  </tr>
                  <tr>
                      <td colspan="2">量房时间：{{list.ltitme}}</td>
                      <td colspan="2">动工时间：{{list.dotime}}</td>
                  </tr>
                  <tr>
                      <td colspan="4">
                          业主要求：{{list.claim}}
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4">备注：{{list.remarks}}</td>
                  </tr>
                  <tr>
                      <td colspan="4">
                          投标公司要求：<br>
                          <font style="color: #F15517;font-weight: bold">
                              {{list.content}}
                          </font>
                      </td>
                  </tr>
                  <tr>
                      <td colspan="4" style="text-align: center;height: 50px;">
                          <span>
                              <a href="#"><el-button style="width:210px;border:1px solid red">我要投标</el-button></a>
                          </span>

                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="right">
          待设计
      </div>
      <div class="fot">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
            list:{}//招标详细信息，
        }
    },
    methods:{
        getlist(){
            this.list = this.$route.params;
        },
        hnad(){
            console.log(this.list)
        }
    },
    created(){
        this.getlist()
    }
}
</script>

<style scoped>
.fot{
    width: 100%;
    border: 1px solid gold;
    height: 2165px;
    position: absolute;
    top: 782px;
}
.right{
    width: 250px;
    height: 612px;
    border: 1px solid blue;
    float: right;
}
.el-button:hover {
    color: red;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
span{
    color: #F15517;
}
.m{
    width: 1200px;
    border: 1px solid #f5f5f5;
    margin: 20px auto;
    overflow: hidden;
    position: relative;
}
.m .left{
    width: 940px;
    float: left;
    border: 1px solid #f5f5f5;
    height: 612px;
}
.left .tab{
    margin: 0 auto;
    border-collapse: collapse;
    width: 100%;
    text-align: left;
}
.tab td{
    border: 1px solid #F0F0F0;
    line-height: 28px;
    padding: 15px 10px;
    font-size: 14px;
}
h1{
    font-size: 18px;
    font-weight: 700;
    float: left;
}
</style>