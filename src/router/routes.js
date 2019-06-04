/**
 * Created by LCQ on 2019-05-25,0025.
 */
const Login = resolve => require(['@/views/login/login'], resolve)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    }
]

export default routes