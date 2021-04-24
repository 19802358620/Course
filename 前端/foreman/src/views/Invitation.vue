<template>
  <div>
         <el-row type="flex" justify='center' :gutter="20">
             <el-col :span="8">
                 <div class="item">
                     <div class="title">
                         <span class="i"></span>
                         <h5>业主最新招标</h5>
                         <a href="#" class="it">更多>></a>
                     </div>
                     <div class="cont" >
                         <div class="ie"  v-for="(item,i) in bidlist" :key="i" @click="hand(item)">
                             <a href="#">{{item.title}}</a>
                             <span>01.10</span>
                         </div>
                     </div>
                 </div>
             </el-col>
             <el-col :span="8">
                 <div class="item">
                     <div class="title"><span class="i1"></span> <h5>最新入驻工长</h5>
                         <a href="#" class="it">更多>></a>
                     </div>
                     <div class="cont">
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                     </div>
                 </div>
             </el-col>
             <el-col :span="8">
                 <div class="item">
                     <div class="title">
                         <span class="i2"></span>
                         <h5>装修小区案例</h5>
                         <a href="#" class="it">更多>></a>
                     </div>
                     <div class="cont">
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                         <div class="ie">
                             <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod?</a>
                             <span>01.10</span>
                         </div>
                     </div>
                 </div>
             </el-col>
         </el-row>
           <div class="foter"></div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            bidlist:[],//招标列表
            
        }
    },
    methods:{
        hand(item){
            this.$router.push({name:'bidding',params:item})
        },
        getbiddList(){
            this.$Axios({
                url:'/bidlist',
                method:'GET',
                data:{area:'重庆'},
                success:(result=>{
                    console.log(result)
                    this.bidlist = result
                })
            })
        }
    },
    created(){
        this.getbiddList();
    }

}
</script>

<style scoped>
.cont{
    padding: 6px 0;
    text-align: left;
    font-size: 14px;
    margin: 0 15px;
    color: #8b8b8b;
}
.cont .ie{
    height: 20px;
    padding: 8px 0;
    line-height: 20px;
    height: 20px;
}
.cont .ie:hover{
    background-color: hotpink;
    opacity: 0.9;
}
.cont .ie a{
    float: left;
    width: 80%;
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #8b8b8b;
}
.cont .ie span{
    float: right;
}
.item .it{
   font-size: 14px;
   display: inline-block;
   position: absolute;
   top: -61px;
   right: 0;
   color: #aaa;
   margin-top: 10px;
}
.item{
    width: 100%;
    height: 400px;
    outline: 1px solid #ececec;
}
.item .title{
    width: 100%;
    height: 60px;
    position: relative;
    border-bottom: 1px solid #ececec;
}
.item .i{
    width: 40px;
    height: 60px;
    background: url('../assets/imgs/小图标/pc_icon.png');
    display: inline-block;
    float: left;
    background-position: -95px -23px;
    margin-top: 10px;
    margin-left: 20px;
}
.item .i1{
    width: 40px;
    height: 60px;
    background: url('../assets/imgs/小图标/pc_icon.png');
    display: inline-block;
    float: left;
    background-position: -138px -22px;
    margin-top: 10px;
    margin-left: 20px;
}
.item .i2{
    width: 40px;
    height: 60px;
    background: url('../assets/imgs/小图标/pc_icon.png');
    display: inline-block;
    float: left;
    background-position: -184px -23px;
    margin-top: 10px;
    margin-left: 20px;
}
.title h5{
    position: absolute;
    position: absolute;
    top: -61px;
    display: inline-block;
    left: 39px;
    margin-top: 10px;
    margin-left: 20px;
}

</style>>

