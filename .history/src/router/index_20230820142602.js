// 1、引入路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// 2、启用路由
Vue.use(VueRouter)

// 3、创建路由
const router = new VueRouter({
  routes:[
    {
      name:'首页',
      path:'/'
    },
    {
      name:'你好',
      path:'/hello'
    }
  ]
})

export default router