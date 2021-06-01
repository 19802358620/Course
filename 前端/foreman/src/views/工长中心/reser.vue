<template>
  <div>
      <div class="title">
          <div class="name">
              我的预约信息
              <span>共<span style="color: red;">({{reslist.length}})</span>条预约</span>  
            </div>
      </div>
      <div class="content">
          <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>招标编号</th>
                      <th>小区名称</th>
                      <th>业主姓名</th>
                      <th>性别</th>
                      <th>预约状态</th>
                      <th>量房时间</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in reslist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td>第{{item.demandid}}号</td>
                      <td style="color:red">{{item.communityname}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.sex}}</td>
                      <td><em style="color:red">{{item.status}}</em></td>
                      <td>2021-04-15</td>
                      <td style="width: 140px;">
                          <a v-if="item.istrue" class="btn" @click.stop="Details(item)">预约详情</a>
                          <a class="btn" style="color:red;" @click.stop="base(item)" v-else>取消原因</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
       <el-dialog
          title="预约信息"
          :visible.sync="dialogVisible"
           width="30%"
          :append-to-body='true'
          top='35vh'
          >
          <el-row>
              <el-col :span="12"><div>业主姓名：<em style="color:red;font-weight: bold;">{{list.name}}</em></div></el-col>
               <el-col :span="12">看房时间：<em style="color:red;font-weight: bold;">{{list.restime}}</em></el-col>
            
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="12">小区名称：<em style="color:#01af63;font-weight: bold;">{{list.communityname}}</em></el-col>
           <el-col :span="12">电话：{{list.phone}}</el-col>
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="12">城市：{{list.city}}</el-col>
           <el-col :span="12">区域：{{list.area}}</el-col>
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="12">微信：{{list.wei}}</el-col>
           <el-col :span="12">详细地址：{{list.adder}}</el-col>
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="24">业主备注：<em style="color:#01af63;font-weight: bold;">{{list.deark}}</em></el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
             <el-button @click="dialogVisible = false" type="warning" :disabled='!list.istrue'>拒绝预约</el-button>
             <el-button type="primary" @click="agreeres" :disabled='!list.istrue'>同意预约</el-button>
         </span>
      </el-dialog>
         <el-dialog
          title="业主取消原因"
          :visible.sync="dia"
           width="30%"
          :append-to-body='true'
          top='35vh'
          >
          <el-row>
            <el-col :span="24">
                <p style="color:#01af63;font-weight: bold;">{{baselist.cancel}}</p>
            </el-col>
          </el-row>
      </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            reslist:[],
            dialogVisible:false,
            list:[],
            dia:false,
            baselist:''
        }
    },
    methods:{
        //查看取消原因
        base(item){
            this.dia=true;
            this.baselist =item
        },
        //同意预约
        agreeres(){
            console.log(this.list)
            this.$Axios({
                url:'/foreman/setresinfo',
                method:'POST',
                data:{status:'预约成功',id:this.list.orderid},
                success:(result=>{
                    if(result){
                        this.open('预约成功','success')
                        this.istrue = true;
                    }else{
                        this.open('预约失败','error')
                    }
                    this.getreslist()
                    this.dialogVisible =false
                })
            })
        },
        //获取预约信息
        getreslist(){
            this.$Axios({
                url:'/foreman/getreserlist',
                method:'GET',
                data:{foremanid:this.$store.state.foreman.id},
                success:(result=>{
                    console.log(result)
                    for(let i in result){
                        if(result[i].status == '预约成功'){
                            result[i].istrue = true;
                        }else{
                              result[i].istrue = false;
                        }
                    }
                    // result.restime = result.restime.slice(0,10)
                    this.reslist = result
                })
            })

        },
        //查看预约信息
        Details(item){
            this.dialogVisible=true
            console.log(item)
            item.restime = item.restime.slice(0,10)
            this.list = item
        },
        open(msg,type) {
        this.$notify({
          title: msg,
          type: type,
          offset:100,
        });
      },
    },
    created(){
        this.getreslist()
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
    margin: 10px 10px;
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