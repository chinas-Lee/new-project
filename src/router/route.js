/**
 * Created by LCQ on 2019-05-25,0025.
 */
const Index = resolve => require(['../views/index'], resolve)

const route = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: '首页'
        }
    }
]

export default route
