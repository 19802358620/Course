<template>
  <div class="view">
      <div class="left">
          <div class="my_siteMap">
             <h6 class="h">基本信息</h6>
          </div>
          <div class="table">
              <table>
                  <tbody>
                      <tr>
                          <th style="line-height:67px">所属区域</th>
                          <td>昌平未来科技城商圈</td>
                          <th>楼盘地址</th>
                          <td>未来科技城南区内科技城路与南区一路交界处</td>
                      </tr>
                       <tr>
                          <th>环线位置</th>
                          <td>五至六环</td>
                          <th>物业类别</th>
                          <td>住宅</td>
                      </tr>
                      <tr>
                          <th>建筑类别</th>
                          <td>住宅</td>
                          <th>项目特色</th>
                          <td>宜居生态地产</td>
                      </tr>
                      <tr>
                          <th>容积率</th>
                          <td>3.5</td>
                          <th>绿化率</th>
                          <td>30%</td>
                      </tr>
                       <tr>
                          <th>开发商</th>
                          <td>北京东方蓝海置业有限责任公司</td>
                          <th>开盘时间</th>
                          <td>2017-09-27</td> 	 	 	
                      </tr>
                      <tr>
                          <th>交房时间</th>
                          <td>2019-12-01</td>
                          <th>物业费</th>
                          <td>4.55元/平方米·月</td>	 	 	
                      </tr>
                      <tr>
                          <th>物业公司 </th>
                          <td>暂无资料</td>
                          <th>售楼地址</th>
                          <td>北京市昌平区北七家镇鲁疃西路新世纪商城南侧东方蓝海营销中心</td> 	  	 	 	 	
                      </tr>
                      <tr>
                          <th>装修状况</th>
                          <td>毛坯</td>
                          <th>占地面积</th>
                          <td>23730平米	</td>	 	 	 	 	 	
                      </tr>
                      <tr>
                          <th>建筑面积 </th>
                          <td>138377平方米</td>
                          <th>代理商</th>
                          <td>暂无资料</td> 	  	  	 	 	 	 	
                      </tr>
                      <tr>
                          <th>投资商 </th>
                          <td>暂无资料</td>
                          <th>产权年限</th>
                          <td>普通住宅:70年	</td> 	   	 	 		 	 	 	
                      </tr>
                      <tr>
                          <th>楼层状况 </th>
                          <td>项目包括住宅和商业产品；其中住宅共11层；商业10层。</td>
                          <th>车位信息</th>
                          <td>共712个停车位</td> 	  	   	 	 		 	 	 	 	
                      </tr>
                       <tr>
                          <th>居住户数 </th>
                          <td>141</td>
                          <th>现居户数</th>
                          <td>暂无资料	</td> 	   	 	 		 	 	 	
                      </tr>
                      
                  </tbody>
              </table>
          </div>
          <div class="my_siteMap">
             <h6 class="h">项目简介</h6>
          </div>
          <div class="jian">
              <p class="p">东方蓝海涵盖商务、科技住宅、精品商业三种产品形态</p>
          </div>
          <div class="my_siteMap">
             <h6 class="h">交通配套</h6>
          </div>
          <div class="jian">
              <p class="p">交通：北部与北六环路相邻；东侧为科技城路、北侧为南区一路；由京承高速到达市区</p>
          </div>
      </div>
      <div class="right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.p{
    position: absolute;
    top: -60px;
}
.jian{
    font-size: 14px;
    height: 35px;
    width: 100%;
    position: relative;
    margin-top: -25px;
}
.table{
    margin: 25px 0px 25px 0px;
    
}
table{
    width: 100%;
    border: 1px solid #EAEAEA;
    border-collapse: collapse;
    line-height: 28px;
}
table tr{
    border-collapse: collapse;
    border: 1px dotted #EFEFEF;
    border-collapse: collapse;
    font-size: 14px;
}
table tr th{
    text-align: left;
    width: 18%;
    color: #666666;
    font-weight: normal;
    padding: 10px 15px;
    background-color: #FAFAFA;
}
table tr td{
    text-align: left;
    width: 33%;
    padding: 15px;
}
.left{
    width: 900px;
    height: auto;
    float: left;
}
.right{
    width: 280px;
    height: 600px;
    border: 1px solid pink;
    float: right;
}
.view{
    width: 100%;
    height: auto;
    box-sizing: border-box;
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
    font-weight: normal;
}

</style>