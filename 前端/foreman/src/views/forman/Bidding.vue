<template>
  <div class="m">
      <div class="left">
          <table class="tab">
              <tbody>
                  <tr>
                      <td colspan="5"><h1>{{list.suoarea}}</h1></td>
                  </tr>
                  <tr>
                      <td>投标编号：{{list.id}}</td>
                      <td>发布时间：{{list.titme}}</td>
                      <td>订单状态：<span class="span">{{list.status}}</span></td>
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
                              <a href="#"><el-button style="width:210px;border:1px solid red" @click="dialogVisible = true">我要投标</el-button></a>
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
      <el-dialog
        title="投标信息"
        :visible.sync="dialogVisible"
        width="30%"
        append-to-body=true
        lock-scroll=false
        modal-append-to-body=false
        >
    <el-form :model="stender">
        <el-row :gutter="10">
          <el-col :span="10">
              <el-form-item label="标价：" label-width="60px">
                   <el-input v-model="stender.price"  placeholder="投标价格"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
              <el-form-item label="量房时间：" label-width="90px">
                 <el-date-picker
                         v-model="stender.ltime"
                         type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择动工日期"
                        >
                      </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <el-form-item label="投标说明：" label-width="90px">
                   <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="stender.content"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="foremantender">投标</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible: false,
            height:document.documentElement.clientHeight,
            list:{},//招标详细信息
            form:{
                name:'',
                region:'',
                value1:''
            },
            stender:{
                price:'',//投标价
                ltime:'',//量房时间
                content:'',//投标说明
            }
        }
    },
    methods:{
        getlist(){
            this.list = this.$route.params;
            console.log(this.list)
        },
        hnad(){
            console.log(this.list)
        },
        //工长投标
        foremantender(){
            this.stender.userid=this.list.userid;
            this.stender.demandid = this.list.id;
            this.stender.foremanid = this.$store.state.foreman.id;
            this.$Axios({
                url:'/foreman/tender',
                method:'POST',
                data:this.stender,
                success:(result=>{
                    if(result){
                        this.open()
                        this.dialogVisible=false
                    }else{
                        this.open1()
                    }
                })
            })
            console.log(this.stender)
        },
        open() {
        this.$notify({
          title: '投标成功，请耐心等待',
          type: 'success',
          offset:100,
        });
      },
       open1() {
        this.$notify({
          title: '投标失败',
          type: 'error',
          offset:100,
        });
      },
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
    height: 635px;
    border: 1px solid blue;
    float: right;
}
.el-button:hover {
    color: red;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.span{
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
    height: 635px;
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