/**
 * Created by LCQ on 2019-05-13,0013.
 */
import axios from './http'
import baseURL from './ip-config'
import { _getToken } from '../assets/js/user-methods'

export function fetchData (url, params, method = 'get') {
    return new Promise((resolve, reject) => {
        let config = {
            method,
            url
        }
        if (method === 'get') {
            config.params = params
        } else {
            config.data = Object.assign(params, {

            })
        }
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
    login (headParams, bodyParams) {
        return fetchData(`${baseURL.basicApi}/login${headParams}`, bodyParams, 'post')
    }
}

export default {
    install (Vue) {
        Vue.prototype.$ajax = interfaceList
    }
}