/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Routes from './route'
import BeforeEach from './before-each'

Vue.use(Router)

const router = new Router({
    mode: 'history', // history 模式，去掉地址栏中的#号
    routes: Routes
})

router.beforeEach(BeforeEach)

export default router
