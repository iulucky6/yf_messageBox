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
                    
                })
            }
        }
        function hide(){

        }
    }
};