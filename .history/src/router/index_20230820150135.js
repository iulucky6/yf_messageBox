// 1、引入路由
import Vue from 'vue'
import Router from 'vue-router'

// 2、启用路由
Vue.use(Router)

// 3、创建并导出路由
export default new Router({
  mock:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld.vue")
    },
    {
      path:'/about',
      name:'About',
      component:()=>import("@/components/About.vue")
    }
  ]
})
