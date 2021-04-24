<template>
  <div>
       <div class="title">
          <div class="name">
              我的招标
              <span>共<span style="color: #01af63;">({{number}})</span>条</span>
              </div>
      </div>
      <div class="content">
          <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>发布时间</th>
                      <th>招标状态</th>
                      <th>承包方式</th>
                      <th>房屋现状</th>
                      <th>装修预算</th>
                      <th>游览量</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in list" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td>2021-04-15</td>
                      <td style="color:red">{{item.status}}</td>
                      <td>{{item.contract}}</td>
                      <td>{{item.statusquo}}</td>
                      <td>{{item.budget}}</td>
                      <td style="color:red">200次</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="Details(item)">详情/</a>
                          <a class="btn" @click="modify(item)">修改/</a>
                          <el-popconfirm
                             title="您确定要删除这条招标需求吗？"
                             @confirm="deletelist(item)"
                            >
                           <a slot="reference">删除</a>
                             </el-popconfirm>
                          <!-- <a class="btn" style="color:red" slot="reference">删除</a> -->
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            user:'',
            imageUrl:'',
            list:[],//业主需求列表
            number:0
        }
    },
    methods:{
        //删除记录
        deletelist(item){
            this.$Axios({
                url:'/users/deledemand',
                method:'DELETE',
                data:{id:item.id},
                success:(result=>{
                    if(result){
                        this.open1()
                        this.getlist()
                    }else{
                        this.open()
                    }
                })
            })
        },
      //获得业主招标信息
      getlist(){
          let id = this.user.id
          this.$Axios({
            url:'/users/meang',
            method:'GET',
            data:{userid:id},
            success:(result)=>{
                this.number= result.length
                this.list = result
                console.log(result)
            }
        })
      },
      //查看需求详情
        Details(item){
            console.log(item)
            this.$router.push({name:"bidding",params:item})
        },
        //修改招标信息
        modify(item){
            console.log(item)
            this.$router.push({name:"bidd",params:item})
        },
        getuser(){
            this.user = this.$route.params;
            console.log(this.user)
        },
        open1() {
        this.$notify({
          title: '删除成功',
          type: 'success',
          offset:100,
        });
      },
      open() {
        this.$notify({
          title: '删除失败',
          type: 'erroe',
          offset:100,
        });
      },

    },
    created(){
        this.getuser()
        this.getlist()

    }

}
</script>

<style scoped>
.btn{
    padding: 2px;

}
.title .t{
    line-height: 80px;
   
}
.table{
    width: 100%;
    font-size: 12px;
}
.title .tr{
    line-height: 90px;
}

.img{
    width: 100px;
    height: 100px;
}
.img img{
    width: 100%;
    height: 100px;
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