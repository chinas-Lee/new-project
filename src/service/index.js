/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Vue from 'vue'
import axios from './http'
import router from '../router/index'
import baseURL from './ip-config'
import { _getSign } from '../assets/js/user-methods'
import { _isNullObj } from '../assets/js/check-methods'
import { message } from 'ant-design-vue'

const VuePrototype = Vue.prototype

/*
* 异步请求
* api - 接口名称
* bodyParams - 参数体
* headParams - URL后参数
* method - 请求类型
* systemData - 系统数据
* isNoLogin - 是否需要登录
* */
export function fetchData (api = '', bodyParams = {}, headParams = '', method = 'get', systemData = {}, isNoLogin = false) {
    return new Promise((resolve, reject) => {
        let config = {
            method,
            url: baseURL.basicApi + headParams
        }
        method === 'get' ? config.params = bodyParams : config.data = _getSign(api, bodyParams, systemData, isNoLogin) || ''
        axios(config).then(res => {
            let result = res.data || {}
            if (!result || _isNullObj(result)) {
                reject(VuePrototype.$configInfo.reqErrorMsg)
            }
            switch (+result.code) {
                case 0:
                    resolve(result.data)
                    break
                case -1:
                    message.error(result.msg || VuePrototype.$configInfo.reqErrorMsg, VuePrototype.$configInfo.closeMessageBoxTime)
                    reject(result.msg || VuePrototype.$configInfo.reqErrorMsg)
                    break
                case -2:
                    localStorage.clear()
                    sessionStorage.clear()
                    router.push('/')
                    break
                default:
                    message.error(result.msg || VuePrototype.$configInfo.reqErrorMsg, VuePrototype.$configInfo.closeMessageBoxTime)
                    reject(result.msg || VuePrototype.$configInfo.reqErrorMsg)
            }
        }, err => {
            console.log(err)
            reject(VuePrototype.$configInfo.reqErrorMsg)
        }).catch(error => {
            console.log(error)
            reject(VuePrototype.$configInfo.reqErrorMsg)
        })
    })
}

// 接口列表
const interfaceList = {
    // 获取当前医院
    getMyHospital (bodyParams = {}, headParams = '') {
        return fetchData(`crm.common.hospital`, bodyParams, headParams, 'post')
    },
    // 获取系统配置
    getSystemConfig (bodyParams = {}, headParams = '') {
        return fetchData(`crm.common.sysConf`, bodyParams, headParams, 'post')
    }
}

export default {
    install (Vue) {
        Vue.prototype.$ajax = interfaceList
    }
}