import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.css'
import './assets/style/glob.css'
import VDistpicker from 'v-distpicker'
import vRegion from 'v-region'
import axios from 'axios'
import vGallery from 'v-gallery'



Vue.use(vRegion)
Vue.use(vGallery)
Vue.component('v-distpicker', VDistpicker)
Vue.use(ElementUI);

Vue.config.productionTip = false
//页面跳转后回到顶部
// router.afterEach((to,from,next) => {
//   window.scrollTo(0, 0);
//   next();
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.basePath="http://localhost:3000";
axios.defaults.baseURL = 'http://localhost:3000';
/**
 * 封装axios方法
 */
let futurAxios = (options) => {
  options.data.token = window.localStorage.token;
  axios({
    url: options.url,
    method: options.method || 'POST',
    data: options.data,
    params:options.data
  }).then(result => {
    if (options.success) {
      options.success(result.data)
    }
  }).catch(err => {
    let msg = err.response ? err.response.data : '请求异常'
    if (options.error) {
      options.error(msg)
      Message.error({ message: msg, offset: 150 });
    } else {
      Message.error({message:msg,offset:150})
    }
  })
}
/**
 * 封装axios方法，为不需要登录操作是使用
 * @param {封装} options 
 */
let Axios=(options)=>{
    axios({
        url:options.url,
        method:options.method||'POST',
        data: options.data,
        params: options.data
    }).then(result=>{
      if (options.success) {
           options.success(result.data)
        }
    }).catch(err => {
      console.log(err)
        let msg = err.response ? err.response.data:'请求异常'
        if (options.error){
            options.error(msg)
            Message.error({message: msg, offset: 150});
        }else {
            Message.error({message: msg, offset: 150});
        }
    })
}
//需要添加拦截器的
Vue.prototype.$axiosjwt = futurAxios
//不拦截的
Vue.prototype.$Axios = Axios
