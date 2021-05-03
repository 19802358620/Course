<template>
  <div>
     <div class="title">
          <div class="name">
              我的订单
              <span>共<span style="color: #01af63;">({{this.orderlist.length}})</span>个订单</span>
              </div>
      </div>
      <div class="content">
          <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>业主姓名</th>
                      <th>性别</th>
                      <th>小区地址</th>
                      <th>联系电话</th>
                      <th>微信</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in orderlist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;"
                  :class="{calan:item.istrue}"

                  >
                      <td>{{i+1}}</td>
                      <td>{{item.name}}</td>
                       <td>{{item.sex}}</td>
                      <td>{{item.adder}}</td>
                      <td >{{item.phone}}</td>
                      <td>{{item.wei}}</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="orderinfo(item)"><em style="color:red">进入该订单</em></a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            orderlist:[],//订单列表

        }
    },
    methods:{
        //进入订单
        orderinfo(item){
            this.$router.push({name:"foremanorderinfo",params:item})
            console.log(item)
        },
        //获取工长订单
        getforemanorder(){
            this.$Axios({
                url:'/foreman/getforemanorder',
                method:'GET',
                data:{foremanid:this.$store.state.foreman.id},
                success:(result=>{
                    console.log(result)
                    this.orderlist = result
                })
            })
        }
    },
    created(){
        this.getforemanorder()
    }

}
</script>

<style scoped>
.table{
    width: 100%;
    font-size: 12px;
    
}
.title .tr{
    line-height: 90px;
}
.content{
    width: 98%;
    height: 600px;
    border: 1px solid #eee;
    margin: 10px;
}
.title{
    height: 35px;
    padding-top: 20px;
    border-bottom: 1px dotted #e8e8e8;
    margin-left: 2px;
}
.title .name{
    float: left;
    height: 15px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 12px;
    border-left: 2px solid #01af69
}
</style>