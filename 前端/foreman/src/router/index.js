import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //首页
  { path: '/', name: 'home', component: () => import('../components/Home.vue') },
  //服务流程
  { path: '/pr', name: 'proc', component: () => import('../views/Process.vue') },
  //诚信工长
  { path: '/foremin', name: 'foremin', component: () => import('../views/forman/forman.vue') },
  //投标信息
  { path: '/bidding', name: 'bidding', component: () => import('../views/forman/Bidding.vue') },
  // 学装修
  { path: '/learn', name: 'learn', component: () => import('../views/学装修/Learn.vue') },
  // 效果图
  { path: '/effect', name: 'effect', component: () => import('../views/forman/effect.vue') },
  //  装修问答
  { path: '/QA', name: 'QA', component: () => import('../views/forman/QA.vue') },
  // 同城装修
  { path: '/community', name: 'community', component: () => import('../views/同城装修/Community.vue') },
  //装修设计
   { path: '/design', name: 'design', component: () => import('../views/同城装修/design.vue') },
  {
    path: '/shop/:id/', name: 'shop', component: () => import('../views/Shop.vue'), children: [
      //工长详情
      { path: 'index', name: 'index', component: () => import('../views/工长详情/home.vue'), },
      { path: 'frominfo', name: 'frominfo', component: () => import('../views/forman/formainInfo.vue'), }
    ]
  },
  //查看方案
  {
    path: '/paogram/:paogramId/', name: 'paogram', component: () => import('../views/同城装修/Program.vue'), props: true,
    children: [
      //小区主页
      { path: '/inedx', name: 'ind', component: () => import('../views/同城装修/index.vue') },
      //户型图
      { path: '/Untype', name: 'type', component: () => import('../views/同城装修/Untype.vue') },
      
  ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
