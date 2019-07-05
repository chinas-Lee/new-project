/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Vue from 'vue'
import { Message, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

let VuePrototype = Vue.prototype
Message.install = function () {
    VuePrototype.$message = Message
    VuePrototype.$loading = Loading.service
}

Vue.use(Message)
Vue.use(Loading)

export default Vue
