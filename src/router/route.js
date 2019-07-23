/**
 * Created by LCQ on 2019-05-25,0025.
 */
const route = [
    {
        path: '/',
        name: 'Index',
        component: resolve => require(['../views/index'], resolve),
        meta: {
            title: '首页'
        }
    }
]

export default route
