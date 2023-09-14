// 1、引入路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// 2、启用路由
Vue.use(VueRouter)

// 3、创建路由
let router = new VueRouter({
  routes: [{
      name: '首页',
      path: '/',
    },
    {
      path: '/hello',
      name: '你好',
      component: ()=>import("@/components/HelloWorld.vue")
    }
  ]
})

export default router