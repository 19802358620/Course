<template>
  <div>
       <div class="title">
          <div class="name">
              我的投标记录
              <span>共<span style="color: red;">(10000)</span>条记录</span>  
            </div>
      </div>
      <div class="content">
          <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>招标编号</th>
                      <th>投标时间</th>
                      <th>业主姓名</th>
                      <th>当前状态</th>
                      <th>投标价</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in stenderlist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td style="color:red;">{{'第'+item.demandid+'号'}}</td>
                      <td>{{item.time.slice(0,10)}}</td>
                       <td>{{item.name}}</td>
                      <td style="color:red">{{item.stutas}}</td>
                      <td style="color:red">{{item.price}}</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="Details(item)">详情</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    <el-dialog title="投标详情"
    :visible.sync="dia"
    width="30%"
    append-to-body=true
    top="35vh"
    >
    <div style="text-align: center;font-size:12px">
      <el-row>
              <el-col :span="6"><div>业主姓名：<em style=" color: #01af69;font-weight: bold;">{{list.name}}</em></div></el-col>
              <el-col :span="6"><div>性别：{{list.sex}}</div></el-col>
              <el-col :span="6"><div>电话：{{list.phone}}</div></el-col>
              <el-col :span="6"><div>微信：{{list.wei}}</div></el-col>
      </el-row>
      <el-row style="margin-top:15px">
              <el-col :span="6"><div>城市：{{list.city}}</div></el-col>
              <el-col :span="6"><div>地区：{{list.area}}</div></el-col>
              <el-col :span="6"><div>状态：<em style="color: red;font-weight: bold;">{{list.stutas}}</em></div></el-col>
              <el-col :span="6"><div>投标价：<em style="color: red;font-weight: bold;">{{list.price}}万</em></div></el-col>
      </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            stenderlist:[],//投标信息列表
            dia:false,
            list:''
        }
    },
    methods:{
        //投标详情
        Details(item){
            console.log(item)
            this.dia=true
            console.log(item)
            this.list = item
        },
        getstenderlist(){
            this.$Axios({
                url:'/foreman/stenderinfo',
                method:'GET',
                data:{id:this.$store.state.foreman.id},
                success:(result=>{
                    console.log(result)
                    // for(let i in result){
                    //     result[i].time = result[i].time.slice(0,10)
                    // }
                    this.stenderlist=result;
                    console.log(this.stenderlist)
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