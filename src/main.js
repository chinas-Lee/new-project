import Vue from './init/index'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.use(store)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
