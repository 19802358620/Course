<template>
  <div>
    <div class="title">
     <div class="name">
         项目投标情况
         <span>共<span style="color: #01af63;">(0)</span>条</span>
    </div>
      </div>
      <div class="content">
           <table class="table">
              <tbody>
                  <tr style=" line-height: 70px; border-bottom: 1px solid #eee;font-weight: bold;">
                      <th>序号</th>
                      <th>招标编号</th>
                      <th>承包方式</th>
                      <th>房屋现状</th>
                      <th>招标状态</th>
                      <th>装修预算</th>

                      <th>游览量</th>
                      <th>操作</th>
                  </tr>
                  <tr 
                  v-for="(item,i) in list" :key="i"
                  style="line-height: 60px;color: #01af63; font-weight: bold;border-bottom: 1px solid #eee;">
                      <td>{{i+1}}</td>
                      <td style="color:red">{{item.id}}</td>
                     
                      <td>{{item.contract}}</td>
                      <td>{{item.statusquo}}</td>
                       <td style="color:red">{{item.status}}</td>
                      <td>{{item.budget}}</td>
                      <td style="color:red">{{item.view}}</td>
                      <td style="width: 140px;">
                          <a class="btn" @click.stop="Details(item)">进入工程>></a>
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
            list:[]//业主招标信息列表
        }
    },
    methods:{
           //获得业主招标信息
      getlist(){
          this.$Axios({
            url:'/users/meang',
            method:'GET',
            data:{userid:this.$store.state.user.id},
            success:(result)=>{
                for(let i in result){
                    result[i].id = '第'+result[i].id +'号'
                }
                this.number= result.length
                this.list = result
                console.log(result)
            }
        })
      },
      //进入该工程
      Details(data){
           this.$router.push({name:'project',params:data})
      }
    },
    created(){
        this.getlist()
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
    margin: 10px auto;
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