/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
    mode: 'history', // history 模式，去掉地址栏中的#号
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router