<template>
  <div class="mm" :style="{height:`${height}px`}">
      <vimg :imgsArr="imgsArr" @click="clickFn"  :gap='10' class="effect">
        <div class="img-info" slot-scope="props">
         <p class="some-info">{{props.value.title}}</p>
        </div>
        <div slot="waterfall-over">waterfall-over</div>
          <div slot="waterfall-head">
              <div class="header">
                  <div class="title ">
           <div class="huo">
             <span class="sp">户型</span>
             <div class="li">
               <a class="a"  v-for="item in huxing" :key=item @click="select(item)">{{item}}</a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">布局</span>
             <div class="li">
                 <a class="a"   v-for="item in layout" :key=item @click="select(item)">{{item}}</a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">风格</span>
             <div class="li">
               <a class="a"   v-for="item in style" :key=item @click="select(item)">{{item}}</a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">空间</span>
             <div class="li">
                <a class="a"   v-for="item in space" :key=item @click="select(item)">{{item}}</a>
             </div>
           </div>
         </div>
              </div>
          </div>
           <div slot="waterfall-over">waterfall-over</div>
      </vimg>
      <el-dialog
          title=""
          :visible.sync="dialogVisible"
          width="60%"
          :before-close="handleClose"
          append-to-body=true
          >
          <viewer :images="typeimglist"> 
            <img
                v-for="(item,index) in typeimglist"
                :src="item.src"
                :key="index"
                :onerror="errorImg"
                style="width:100%;height:100%"
              >
           </viewer>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭</el-button>
          </span>
     </el-dialog>
  </div>
</template>
<script>
//图片懒加载和瀑布流插件
import vimg from 'vue-waterfall-easy'
export default {
    data(){
        return{
            height:document.documentElement.clientHeight,
            imgsArr:[
                { id:'22',   src: require('../../assets/imgs/照片墙/07.jpg')},
                { id:'2',   src: require('../../assets/imgs/照片墙/02.jpg')},
                { id:'3',   src: require('../../assets/imgs/照片墙/03.jpg')},
                { id:'4',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'5',   src: require('../../assets/imgs/照片墙/01.jpg')},
                { id:'6',   src: require('../../assets/imgs/照片墙/02.jpg')},
                { id:'7',   src: require('../../assets/imgs/照片墙/01.jpg')},
                { id:'8',   src: require('../../assets/imgs/照片墙/02.jpg')},
                { id:'9',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'20',   src: require('../../assets/imgs/照片墙/05.jpg')},
                { id:'11',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'12',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'13',   src: require('../../assets/imgs/照片墙/03.jpg')},
                { id:'14',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'15',   src: require('../../assets/imgs/照片墙/01.jpg')},
                { id:'16',   src: require('../../assets/imgs/照片墙/02.jpg')},
                { id:'17',   src: require('../../assets/imgs/照片墙/01.jpg')},
                { id:'18',   src: require('../../assets/imgs/照片墙/02.jpg')},
                { id:'19',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'20',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'21',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'22',   src: require('../../assets/imgs/照片墙/04.jpg')},
                { id:'20',   src: require('../../assets/imgs/照片墙/05.jpg')},
                { id:'21',   src: require('../../assets/imgs/照片墙/06.jpg')},
                { id:'22',   src: require('../../assets/imgs/照片墙/07.jpg')},
            ],
            typeimglist:[],//类型字图片列表
            //户型
            huxing:['一室','两室','三室','复式','别墅','阁楼','小户型'],
            style:['简约','韩式','中式','欧式','田园','地中海','日式','现代'],
            space:['客厅','卧室','厨房','儿童房','卫生间','书房'],
            layout:['背景墙','玄关','阳台','吊顶','卫橱柜','衣柜','吧台'],
            dialogVisible:false,
        }
    },
    components:{
        vimg,
    },
    created(){
      this.gettypeeffect('客厅')
    },
    methods:{
      //查询选择
      select(data){
        this.gettypeeffect(data)
        console.log(data)
      },
      //根据类型获取不同类型的效果图
      gettypeeffect(data){
        this.$Axios({
          url:'/geteffimg',
          method:'GET',
          data:{type:data},
          success:(result=>{
            this.imgsArr = result
          })
        })
      },
    //获取所有分组图片
    gettypeimglist(id){
      this.$Axios({
        url:'/gettypeimglist',
        method:'GET',
        data:{id:id},
        success:(result=>{
          this.typeimglist = result
          console.log(result)
        })
      })

    },
    clickFn(event, { index,value}) {
    // 阻止a标签跳转
    event.preventDefault()
    // 只有当点击到图片时才进行操作
    if (event.target.tagName.toLowerCase() == 'img') {
      this.dialogVisible=true
        console.log(index,value)
        this.gettypeimglist(value.id)
    }
  }
    }
}
</script>

<style scoped>
.effect{
  transition:all .2s;
 
}
.img-box:hover{
   transform:scale(1.2);
}
.some-info{
  font-size: 12px;
  line-height: 31px
}
.a{
  color: inherit;
  line-height: 47px;
  padding: 5px;
  margin: 2px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 6px;
  font-size: 14px;
}
.li{
  position: absolute;
  top: 0;
  left: 45px;
}
.li a:hover{
  background: #ff552e;
  color: white;
  text-decoration: none;
}
.title{
  margin: 15px 0;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  margin-top: -20px;
}
.title .huo{
  font-size: 14px;
  line-height: 50px;
  cursor: default;
  color: #888888;
  position: relative;
}
.huo .sp{
  font-size: 14px;
  color: #ff552e;
  display: block;
  text-align: left;
  width: 30px;
  font-weight: bold;

}
.header{
    width: 100%;
    height: 220px;
}
vimg:hover{
    text-decoration: none;
}
.p{
    display: block;
    height: 10px;
    position: absolute;
    top: -66px;
    width: 100%;
    font-size: 12px;
}
.title{
    height: 27px;
    position: relative; 
}
.mm{
    width: 1200px;
    margin: 10px auto;
    overflow-y: hidden;
}
</style>