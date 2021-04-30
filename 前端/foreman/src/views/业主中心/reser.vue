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
                      <th>联系电话</th>
                      <th>性别</th>
                      <th>微信</th>
                      <th>看房时间</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in reslist" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td>{{item.name}}</td>
                      <td >{{item.phone}}</td>
                      <td>{{item.sex}}</td>
                       <td>{{item.wei}}</td>
                      <td>2021-04-15</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="resinfo(item)">工长详情/</a>
                          <a class="btn" @click.stop="dia=true"><em style="color:red">取消预约</em></a>
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
              <el-col :span="12"><div>姓名：<em style="color:red;font-weight: bold;">{{list.name}}</em></div></el-col>
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
           <el-col :span="12">工作经验：{{list.experience}}</el-col>
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
            reslist:[],
            dialogVisible:false,
            list:[],
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
        cancel(item){
            console.log(item)
            this.dia = true

        },
        //获取预约信息
        getreslist(){
            this.$Axios({
                url:'/users/getreslist',
                method:'GET',
                data:{userid:this.$store.state.user.id},
                success:(result=>{
                    console.log(result)
                    this.reslist = result
                })
            })

        },
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