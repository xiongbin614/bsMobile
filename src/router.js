import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Index.vue'),
      children:[
        {
          path:'index',
          name:'index',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Index/Index.vue')
       },
       {
          path: '',
         redirect:'index'
       },
        //二级分类页面
        {
          path: '/class',
          name: 'class',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Class/Index.vue')
        },
        // 订单页面
        {
          path: '/find',
          name: 'find',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Find/Index.vue')
        },
        // 购物车
        {
          path: '/cart',
          name: 'cart',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Cart/Index.vue')
        },
        // 我的
        {
          path: '/center',
          name: 'center',
          component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Center/Index.vue')
        }
      ]
    },
    // 商品详细展示分类页面
    {
      path: '/ware',
      name:'ware',
      component: () => import(/* webpackChunkName: "about" */ './views/Ware/Index.vue')

    },
    // list页面
    {
      path:"/list/:id",
      name:"list",
      component:()=>import('@/views/List/Index.vue')
    },
    // deatil页面
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import('@/views/details/index.vue')
    },
    // 登录页面
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/Login/index.vue')
    },
    // 注册页面
    {
      path: "/register",
      name: "register",
      component: () => import('@/views/Register/index.vue')
    },
    // 设置页面
    {
      path: "/set",
      name: "set",
      component: () => import('@/views/Set/index/index.vue')
    },
    // 地址
    {
      path: "/adress",
      name: "adress",
      component: () => import('@/views/Set/adress/index.vue')
    },
    // 编辑地址
    {
      path: "/eidtAdress",
      name: "eidtAdress",
      component: () => import('@/views/Set/eidtAdress/index.vue')
    },
    // 个人信息
    {
      path: "/personInfo",
      name: "personInfo",
      component: () => import('@/views/Set/personInfo/index.vue')
    },
    // 确认订单
    {
      path: "/order",
      name: "order",
      component: () => import('@/views/order/index.vue')
    },
    // 付款页面
    {
      path: "/payMoney",
      name: "payMoney",
      component: () => import('@/views/order/payMoney.vue')
    }
  ]
})
