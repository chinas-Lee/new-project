/**
 * Created by LCQ on 2019-05-13,0013.
 */
import axios from './http'
import baseURL from './ip-config'

export function fetchData (url, params, method = 'get') {
    return new Promise((resolve, reject) => {
        let config = {
            method: method,
            url: url
        }
        method === 'get' ? config.params = params : config.data = params
        axios(config).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

// 接口列表
const interfaceList = {
    // 登录
    login (params) {
        return fetchData(baseURL.basicApi + '/login', params, 'post')
    }
}

export default {
    install (Vue) {
        Vue.prototype.$ajax = interfaceList
    }
}