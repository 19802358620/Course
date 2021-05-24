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
                      <th>工长姓名</th>
                       <th>招标编号</th>
                      <th>性别</th>
                      <th>联系电话</th>
                      <th>微信</th>
                      <th>预约状态</th>
                      <th>看房时间</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in reslist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;"
                  :class="{calan:item.istrue}"

                  >
                      <td>{{i+1}}</td>
                      <td>{{item.name}}</td>
                       <td style="color:red">{{item.demandid}}</td>
                      <td>{{item.sex}}</td>
                      <td >{{item.phone}}</td>
                      <td>{{item.wei}}</td>
                      <em style="color:red">{{item.status}}</em>
                      <td>2021-04-15</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="resinfo(item)">详情/</a>
                          <a class="btn" @click.stop="cancl(item)"><em style="color:red">取消预约</em></a>
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
              <el-col :span="12"><div>姓名：<em style="color:#01af63;font-weight: bold;">{{list.name}}</em></div></el-col>
               <el-col :span="12">风格：<em style="color:red;font-weight: bold;">{{list.style}}</em></el-col>
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="12">城市：{{list.city}}</el-col>
           <el-col :span="12">区域：{{list.area}}</el-col>
           
          </el-row>
          <el-row style="margin-top:15px">
           <el-col :span="12">微信：{{list.wei}}</el-col>
           <el-col :span="12">年龄：{{list.age}}</el-col>
          </el-row>
           <el-row style="margin-top:15px">
           <el-col :span="12">电话：{{list.phone}}</el-col>
           <el-col :span="12">工作经验：<em style="color:red;font-weight: bold;">{{list.experience}}年</em></el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
             <el-button @click="dialogVisible = false" type="warning">修改预约</el-button>
         </span>
      </el-dialog>
       <el-dialog
          title="取消预约"
          :visible.sync="dia"
           width="30%"
          :append-to-body='true'
          top='35vh'
          >
          <el-form :model="order" :rules="rules" >
              <el-row>
                <el-col :span="24">
                    <el-form-item label="取消原因" label-width="80px" prop="cancel">
               <el-input  type="textarea" v-model="order.cancel" placeholder="输入取消预约原因"></el-input>
            </el-form-item>
                </el-col>
              </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
             <el-button @click="cancel(item)" type="primary">确定</el-button>
         </span>
       </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            istrue:false,//状态判断
            isstatus:false,//状态判断
            reslist:[],
            dialogVisible:false,
            list:[],//单条预约工长信息
            callist:{},//取消预约
            dia:false,
            order:{
                cancel:''
            },
             rules: {
               cancel: [
                 { required: true, message: '取消预约原因必须填写', trigger: 'blur' },
             ],
             }
        }
    },
    methods:{
         //业主取消预约
        cancl(item){
            this.dia = true
            this.callist = item
        },
        //业主取消预约
        cancel(){
            this.order.status = '业主取消预约'
            var d = new Date();
            var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            this.order.cantime = str;
            this.order.orderid = this.callist.orderid
            this.$Axios({
                url:'/users/calclres',
                method:'POST',
                data:this.order,
                success:(result=>{
                    if(result){
                        this.open('取消成功','success')
                    }else{
                        this.open('取消失败','error')
                    }
                    this.dia = false
                })
            })
            console.log(this.order)
        },
        //获取预约信息
        getreslist(){
            this.$Axios({
                url:'/users/resforeman',
                method:'GET',
                data:{userid:this.$store.state.user.id},
                success:(result=>{
                    console.log(result)
                    for(let i in result){
                        result[i].demandid = '第'+result[i].demandid +'号'
                        if(result[i].cancel==''){
                            result[i].istrue= false;
                            this.getreslist()
                        }else{
                            result[i].istrue = true
                        }
                    }
                    this.reslist = result
                })
            })
        },
        open(msg,type) {
        this.$notify({
          title: msg,
          type: type,
          offset:100,
        });
      },
        //详情界面
        resinfo(item){
            this.dialogVisible=true
            console.log(item)
            this.list = item
        }
    },
    created(){
        this.getreslist()
    }

}
</script>

<style scoped>
.disabled {
    pointer-events: none;
    filter: alpha(opacity=50); /*IE滤镜，透明度50%*/
    -moz-opacity: 0.5; /*Firefox私有，透明度50%*/
    opacity: 0.5; /*其他，透明度50%*/
        }
.calan{
    text-decoration:line-through;
}
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