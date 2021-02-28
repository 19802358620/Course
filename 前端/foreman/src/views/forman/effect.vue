<template>
  <div class="mm" :style="{height:`${height}px`}">
      <vimg :imgsArr="imgsArr" @click="clickFn"  :gap='10'>
          <div class="title">
            <p class="p">装修案例</p>
          </div>
          <div slot="waterfall-head">筛选条件</div>
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
    border: 1px solid red;
    overflow-y: hidden;
}
</style>