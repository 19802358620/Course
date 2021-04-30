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
          <el-form ref="form" :model="demand" label-width="70px" :rules="rules"  style="padding: 10px 3px;">
            <el-row >
              <el-col :span="12">
                <el-form-item label="标题" prop="title">
                        <el-input v-model="demand.title" placeholder="标题"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="量房时间" prop="ltitme" label-width='80px'>
                      <el-input v-model="demand.ltitme" placeholder="输入量房时间段"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="6">
                     <el-form-item label="小区名称" label-width='100px' prop="communityname">
                        <el-input v-model="demand.communityname" placeholder="小区名称"></el-input>
                  </el-form-item>
                 </el-col>
            </el-row>
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="房屋类别" prop='type' label-width='80px'>
                        <el-select v-model="demand.type" placeholder="选择房屋类别" >
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
                     <el-form-item label="住宅空间" prop='space' label-width='80px'>
                        <el-input v-model="demand.space" placeholder="住宅空间"></el-input>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="房屋现状" prop='statusquo' label-width='80px'>
                        <el-select v-model="demand.statusquo"  placeholder="当前房屋现状">
                          <el-option label="新房" value="新房"></el-option>
                          <el-option label="二手" value="二手"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="面积" prop='area'>
                        <el-input v-model="demand.area" placeholder="房屋面积"></el-input>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="房屋结构" prop='structure' label-width='80px'>
                        <el-select v-model="demand.structure" placeholder="请选择房屋结构">
                          <el-option label="单层" value="单层"></el-option>
                          <el-option label="复式" value="复式"></el-option>
                        </el-select>
                  </el-form-item>
                </el-col>
                 <el-col :span="6">
                     <el-form-item label="装修风格" prop='style' label-width='80px'>
                        <el-select v-model="demand.style" placeholder="装修风格">
                          <el-option label="现代" value="现代"></el-option>
                          <el-option label="复古" value="复古"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="房屋用途" prop='user' label-width='80px'>
                        <el-select v-model="demand.user" placeholder="请选择房屋用途">
                          <el-option label="租赁" value="租赁"></el-option>
                          <el-option label="住宅" value="住宅"></el-option>
                          <el-option label="店铺" value="店铺"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="承包方式" prop='contract' label-width='80px'>
                        <el-select v-model="demand.contract" placeholder="承包方式">
                          <el-option label="全包" value="全包"></el-option>
                          <el-option label="半包" value="半包"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                 <el-col :span="6">
                    <el-form-item label="所在地区" prop='suoarea' label-width='80px'>
                       <el-input v-model="demand.suoarea" placeholder="装修地点"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="6">
                     <el-form-item label="装修预算" prop='budget' label-width='80px'>
                        <el-select v-model="demand.budget" placeholder="填写装修预算">
                          <el-option label="10万以下" value="10万以下"></el-option>
                          <el-option label="10到20万" value="10到20万"></el-option>
                        </el-select>
                  </el-form-item>
                 </el-col>
                 <el-col :span="6">
                    <el-form-item label="动工日期" prop='dotime' label-width='80px'>
                      <el-date-picker
                         v-model="demand.dotime"
                         type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择动工日期"
                        >
                         
                      </el-date-picker>
                    </el-form-item>
                 </el-col>
                 <el-col :span="6">
                     <el-form-item label="备注" label-width='100px'>
                        <el-input v-model="demand.remarks" placeholder="备注"></el-input>
                  </el-form-item>
                 </el-col>
              </el-row>
              <el-row :gutter="5">
                  <el-col :span='24'>
                        <el-form-item label="要求">
                        <el-input v-model="demand.content" type="textarea" :rows="2"  placeholder="要求"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>
               <el-row :gutter="5">
                  <el-col :span='24'>
                        <el-form-item label="工长要求">
                        <el-input v-model="demand.claim" type="textarea" :rows="2"  placeholder="您对投标工长的要求"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                   <el-form-item label="户型图">
                     <div style="text-align: left;">
                    <el-upload
                      class="upload-demo"
                      multiple
                      ref="upload"
                      list-type="picture"
                      action="http://localhost:3000/foreman/adddemandimg"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      :data='imgdata'
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">选取户型图</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb。不超过8张</div>
                    </el-upload>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col span="10">
                      <div class="colbtn" >
                          <input type="button" @click="submit('form')" :value="isedit?'发布需求':'提交修改'">
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
      //加载中
      isedit:false,
      user:'',
      isloading:false,
      //招标信息
        demand:{
          title:'',
          titme:'',
          contract:'',
          type:'',
          space:'',
          statusquo:'',
          area:'',
          structure:'',
          style:'',
          user:'',
          budget:'',
          suoarea:'',
          ltitme:'',
          dotime:'',
          remarks:'',
          content:'',
          claim:'',
          userid:'',
          communityname:''
        },
        value:'',
        //表单验证规则
        rules: {
          title: [
            { required: true, message: '标题必须输入', trigger: 'blur' },
          ],
          ltitme:[
            { required: true, message: '输入想要预约量房的时间', trigger: 'blur' },
          ],
          type:[
             { required: true, message: '输入想要预约量房的时间', trigger: 'blur' },
          ],
          space:[
             { required: true, message: '输入想要预约量房的时间', trigger: 'blur' },
          ],
          statusquo:[
            { required: true, message: '输入房屋现状', trigger: 'blur' },
          ],
          area:[
             { required: true, message: '房屋面积', trigger: 'blur' },
          ],
          structure:[
            { required: true, message: '房屋结构', trigger: 'blur' },
          ],
          style:[
            { required: true, message: '装修风格必须填写', trigger: 'blur' },
          ],
          user:[
             { required: true, message: '房屋用途需要说明', trigger: 'blur' },
          ],
          contract:[
             { required: true, message: '需要说明承包方式', trigger: 'blur' },
          ],
          suoarea:[
            { required: true, message: '地点需要填写', trigger: 'blur' },
          ],
          budget:[
            { required: true, message: '预算需要说明', trigger: 'blur' },
          ],
          dotime:[
            { required: true, message: '动工日期需要填写', trigger: 'blur' },
          ],
          communityname:[
            { required: true, message: '小区名称需要填写', trigger: 'blur' },
          ]
        },
        //房屋类别
        options: [{
          value: '毛坯房',
          label: '毛坯房'
        }, {
          value: '简装',
          label: '简装'
        }, {
          value: '精装',
          label: '精装'
        }, {
          value: '翻修',
          label: '翻修'
        }, {
          value: '商品房',
          label: '商品房'
        },
        {
          value: '二手',
          label: '二手'
        },
        ],
        demands:{},
        imgdata:{}
    }
},
created(){
  this.getuser()
},
methods:{
  //上传图片的钩子
  upimg(response, file, fileList){
    console.log(response);
    console.log(file)
    console.log(fileList)

  },
  //发布招标需求
  submit(from){
    //获取当前时间
    this.isloading=true
    var d = new Date();
    var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.demand.userid=this.$store.state.user.id;
    this.demand.communityid=2;
    this.demand.titme = str;
    this.demand.status= '招标中'
    console.log(this.demand)
     this.$refs[from].validate((valid) => {
          if (valid) {
             this.$Axios({
             url:'/users/bidd',
             method:'POST',
             data:this.demand,
             success:(result)=>{
               console.log(result)
               if(result.protocol41){
               this.imgdata.demandid = result.insertId;
               this.imgdata.userid = this.$store.state.user.id;
               this.imgdata.isdem = 1
               console.log(this.imgdata)
               this.$refs.upload.submit();
                 this.open3()
               }else{
                 this.open3()
               }
           }
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
  },
  open3() {
        this.$notify({
          title: '发布成功',
          position: 'top-right',
          offset: 100,
          type: 'success'
        });
      },
    getuser(){
        this.demands = this.$route.params;
        this.demand = this.demands;
    },
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
input:focus{
  outline: none;
}
.colbtn{
    height: 36px;
    line-height: 36px;
}
.colbtn:hover{
  opacity: 0.7;
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
