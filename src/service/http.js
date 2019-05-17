/**
 * Created by LCQ on 2019-05-13,0013.
 */
import axios from 'axios'

// 默认超时1H
axios.defaults.timeout = 1000 * 600
// 配置请求头
Object.assign(axios.defaults.headers, {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
})
// request
axios.interceptors.request.use((req) => {
    // 参数序列化处理
    req.data && (req.data = JSON.stringify(req.data))
    console.log(req)
    return req
}, (error) => {
    return Promise.reject(error)
})

// response
axios.interceptors.response.use((res) => {
    if (!res) {
        return Promise.reject(res)
    }
    console.log(res)
    return res
}, (error) => {
    return Promise.reject(error)
})

export default axios


