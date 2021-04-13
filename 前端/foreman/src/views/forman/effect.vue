<template>
  <div class="mm" :style="{height:`${height}px`}">
      <vimg :imgsArr="imgsArr" @click="clickFn"  :gap='10'>
          <div class="title">
            <p class="p">装修案例</p>
          </div>
          <div slot="waterfall-head">
              <div class="header">
                  <div class="title ">
           <div class="huo">
             <span class="sp">户型</span>
             <div class="li">
               <a class="a"  href="">全部</a>
               <a class="a"  href="">小户型</a>
               <a class="a"  href="">二居</a>
               <a class="a"  href="">三居</a>
               <a class="a"  href="">四居</a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">面积</span>
             <div class="li">
               <a class="a" href="">全部</a>
               <a class="a" href="">40㎡以下</a>
               <a class="a" href="">41-60㎡</a>
               <a class="a" href="">61-90㎡</a>
               <a class="a" href="">91-120㎡ </a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">风格</span>
             <div class="li">
               <a class="a"   href="">全部</a>
               <a class="a"   href="">中式</a>
               <a class="a"   href="">欧式</a>
               <a class="a"   href="">美式</a>
               <a class="a"   href="">现代</a>
             </div>
           </div>
           <div class="huo">
             <span class="sp">总价</span>
             <div class="li">
               <a class="a" href="">全部</a>
               <a class="a" href="">1-5万</a>
               <a class="a" href="">5-10万</a>
               <a class="a" href="">10-20万</a>
               <a class="a" href="">20-30万</a>
             </div>
           </div>
         </div>
              </div>
          </div>
           <div slot="waterfall-over">waterfall-over</div>
      </vimg>
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
            ]
        }
    },
    components:{
        vimg,
    },
    methods:{
    clickFn(event, { index,value}) {
    // 阻止a标签跳转
    event.preventDefault()
    // 只有当点击到图片时才进行操作
    if (event.target.tagName.toLowerCase() == 'img') {
        console.log(index,value.__ob__.value.src)
    }
  }
    }
}
</script>

<style scoped>
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
  color: #444444;
  display: block;
  text-align: left;
  width: 30px;

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
    border: 1px solid #eee;
    overflow-y: hidden;
}
</style>