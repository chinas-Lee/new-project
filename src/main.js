import Vue from './init'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(store)

Vue.config.productionTip = false

let events = new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
