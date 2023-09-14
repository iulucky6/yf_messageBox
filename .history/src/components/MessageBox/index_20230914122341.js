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
        //将 messageBox 组件实例手动挂载到 DOM 上，并将挂载后的实例保存在 this.vm 变量中以供后续使用。
        // 挂载时，如果不传入参数，则会创建一个新的 DOM 元素并将组件挂载到该元素上。如果传入一个选择器字符串或一个现有的 DOM 元素，则会将组件挂载到该选择器所匹配的元素上
        this.vm = messageBox.$mount()
        //this.vm.$el 表示挂载后的 Vue 实例的根元素。这个根元素就是组件模板所渲染出来的 DOM 元素
        document.body.appendChild(this.vm.$el)
      }
    }

    function hide() {
        console.log(this.vm,"this.vm");
      document.body.removeChild(this.vm.$el)
      messageBox.$destroy()
      messageBox = null;
      this.vm = null
    }
  }
};
