<template>
  <div>
      <div class="title">
          <div class="name">
              我的评价
              <span>共<span style="color: #01af63;">(0)</span>条</span>
              </div>
      </div>
      <div class="content">
          <div class="item" v-for="(item,i) in usereval" :key="i">
            <div class="title">
                <div class="list">
                   <img :src="item.header" alt="业主头像">
                </div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>工长姓名：<em style="color:#01af69;">{{item.name}}</em></h5></div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>时间：<em style="color:#01af69;">{{item.time.slice(0,10)}}</em></h5></div>
                <div class="name" style="margin-left: 30px;font-size: 12px;"><h5>星级：<el-rate v-model="item.grade" show-text style="display: inline-block;"></el-rate></h5></div>
                <div class="name" style="margin-left: 30px;font-size: 12px;margin-top: 3px;"><h5>印象：<em style="color:#01af69;">{{item.impression}}</em></h5></div>
            </div>
            <div class="cont">
                <span style="font-weight: bold;">评价内容：</span>
                <p style="display: inline-block;color:#01af69;font-weight: bold;">{{item.content}}</p>
            </div>
            <el-popconfirm
             title="您确定要删除这条评论吗？"
             @confirm="deletelist(item)"
            >
            <a slot="reference" class="edit" style="color: red;">删除</a>
            </el-popconfirm>
            <!-- <a href="#" class="edit" style="color: red;" >删除</a> -->
            <a href="#" class="edit" style="color: black;" @click="editeval(item)">修改</a>
          </div>
      </div>
       <el-dialog
             width="40%"
             title="修改评价"
             :visible.sync="innerVisible"
             append-to-body
             top='30vh'
             >
              <el-form :model="eval" :rules="rules2" ref="eval">
          <el-row>
            <el-col :span="10">
              <el-form-item label="星级：" label-width="100px" prop="grade">
                <div style="margin-top: 10px;">
                  <el-rate
                    v-model="eval.grade"
                    show-text>
                  </el-rate>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="您对工长的印象：" prop="impression">
                <el-select v-model="eval.impression" multiple placeholder="请选择您的认为符合的印象" >
                  <el-option label="效率高" value="效率高"></el-option>
                  <el-option label="专业性强" value="专业性强"></el-option>
                  <el-option label="服务周到" value="服务周到"></el-option>
                  <el-option label="参考好" value="参考好"></el-option>
                 </el-select>
              </el-form-item>
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="24">
             <el-form-item label="评价内容：" label-width="100px" prop="content">
               <el-input v-model="eval.content" type="textarea" placeholder="输入你对该工长的评价"></el-input>
             </el-form-item>
            </el-col>
        </el-row>
        </el-form>
               <span slot="footer" class="dialog-footer">
              <el-button @click="innerVisible = false">取消修改</el-button>
              <el-button type="success" @click="selectforeman">提交修改</el-button>
          </span>
       </el-dialog>
  </div>
</template>
<script>
export default {
    data(){
        return{
            usereval:[],//评价列表
            url:'http://localhost:3000/foreman/getforamnimg/?img=',
            imgurl:'',
            innerVisible:false,
            eval:{//业主评价信息
              time:'',
              grade:'',
              impression:'',
              content:''
            },
        }
    },
    methods:{
        //获取评价列表
        getusereval(){
            this.$Axios({
                url:'/users/getallusereval',
                method:'GET',
                data:{userid:this.$store.state.user.id},
                success:(result=>{
                    this.usereval = result;
                    for(let i in result){
                        let url = 'http://localhost:3000/foreman/getforamnimg/?img=';
                        let img = result[i].header.slice(-6)
                        result[i].header = `${url}`+`${img}`;
                    }
                    this.usereval =result
                    console.log(this.usereval)
                })
            })
        },
        //修改评价
        editeval(item){
            this.innerVisible=true;
            console.log(item)
            this.eval = item;

        }
    },
    created(){
        this.getusereval()
    }


}
</script>

<style scoped>
.edit{
    font-size: 12px;
    line-height: 12px;
    float:right;
    padding-right: 5px;
   
    
}
.cont{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
    
}
img{
    width: 30px;
    height: 30px;
     border-radius: 50%;
}
.title .list{
    width: 30px;
    height: 30px;
    border: 1px solid red;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    margin-left: 10px;
    border-radius: 50%;
    margin-top: -8px;
}
.item .title{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    justify-items: left;
    position: relative;
}
.content .item{
    width: 98%;
    margin: 10px;
    height: 100px;
    border: 1px dashed #eee;
}
.content{
    width: 98%;
    height: 600px;
    margin: 10px;
    border: 1px solid #eee;
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