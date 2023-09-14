// 1、引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2、启用路由
Vue.use(VueRouter)

// 3、创建路由
export default new VueRouter({
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

