import _MessageBox from './index.vue'

export default {
  install(Vue) {
    let messageBox = null
    Vue.component(_MessageBox.name, _MessageBox)
    Vue.prototype.$messageBox = {
      show,
      hide
    }

    function show(props) {
      if (!messageBox) {
        const MessageBox = Vue.extend({
          render(h) {
            return h('message-box', {
              props
            })
          }
        })
        //创建新实例
        messageBox = new MessageBox()
        //$mount() 方法用于将该组件实例挂载到 DOM 上
        this.vm = messageBox.$mount()
        document.body.appendChild(this.vm.$el)
      }
    }

    function hide() {
      document.body.removeChild(this.vm.$el)
      messageBox.$destroy()
      messageBox = null;
      this.vm = null
    }
  }
};
