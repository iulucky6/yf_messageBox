// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入配置文件
import router from './router'

import {MessageBox} from './components'

Vue.config.productionTip = false

//会调用install方法
Vue.use(MessageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注入
  router,
  components: { App },
  template: '<App/>'
})
