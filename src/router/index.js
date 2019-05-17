/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['@/views/login/login'], resolve)

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    }
]

const router = new Router({
    mode: 'history', // history 模式，去掉地址栏中的#号
    routes
})

router.beforeEach((to, from, next) => {
    console.log(from)
    next()
})

export default router