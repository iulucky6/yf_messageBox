import _MessageBox from './index.vue'

export default {
    install(Vue){
        let messageBox = null
        Vue.component(_MessageBox.name,_MessageBox)
        Vue.prototype.$messageBox = {
            show,
            hide
        }

        function show(props){
            if (!messageBox) {
                const MessageBox = Vue.extend({
                    render(h){
                        return h('message-box',{props})
                    }
                })
                messageBox = new MessageBox()
                this.vm = messageBox.$mount()
                document.body.appendChild(this.vm.$el)
            }
        }
        function hide(){
            document.body.removeChild(this.vm.$el)
            
        }
    }
};