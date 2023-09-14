import _MessageBox from './index.vue'

export default {
    install(Vue){
        Vue.component(_MessageBox.name,_MessageBox)
        Vue.prototype.$messageBox = {
            show,
            hide
        }

        function show(){

        }
        function hide(){

        }
    }
};