import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.css'
import './assets/style/glob.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
//页面跳转后回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0, 0);
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
