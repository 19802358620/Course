<template>
  <div>
       <div class="title">
          <div class="name">
              我的投标记录
              <span>共<span style="color: red;">(123)</span>条记录</span>  
            </div>
      </div>
      <div class="content">
          <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>投标时间</th>
                      <th>当前状态</th>
                      <th>业主姓名</th>
                      <th>投标价</th>
                      <th>量房时间</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in stenderlist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td>2021-04-15</td>
                      <td style="color:red">{{item.stutas}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.price}}</td>
                      <td>2021-04-15</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="Details(item)">详情/</a>
                          <el-popconfirm
                             title="您确定要撤回吗？"
                             @confirm="deletelist(item)"
                            >
                           <a slot="reference">撤回</a>
                             </el-popconfirm>
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
            stenderlist:[],//投标信息列表
        }
    },
    methods:{
        getstenderlist(){
            this.$Axios({
                url:'/foreman/stenderinfo',
                method:'GET',
                data:{id:this.$store.state.foreman.id},
                success:(result=>{
                    console.log(result)
                    this.stenderlist=result;
                })
            })
        }
    },
    created(){
        this.getstenderlist()
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
    border: 1px dashed #eee;
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