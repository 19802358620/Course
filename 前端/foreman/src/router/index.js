import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: () => import('../components/Home.vue') },
  { path: '/pr', name: 'proc', component: () => import('../views/Process.vue') },
  { path: '/foremin', name: 'foremin', component: () => import('../views/forman/forman.vue') },
  { path: '/bidding', name: 'bidding', component: () => import('../views/forman/Bidding.vue') },
  // 学装修
  { path: '/learn', name: 'learn', component: () => import('../views/学装修/Learn.vue') },
  {
    path: '/shop/:id/', name: 'shop', component: () => import('../views/Shop.vue'), children: [
      { path: 'index', name: 'index', component: () => import('../views/工长详情/home.vue'), },
      { path: 'frominfo', name: 'frominfo', component: () => import('../views/forman/formainInfo.vue'), }
  ]},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
