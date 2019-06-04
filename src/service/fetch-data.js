/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* Promise请求接口方法
* */
import Vue from 'vue'
import Axios from './http'
import Router from '../router'
import BaseURL from './ip-config'
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
            url: BaseURL.basicApi + headParams
        }
        method === 'get' ? config.params = bodyParams : config.data = _getSign(api, bodyParams, systemData, isNoLogin) || ''
        Axios(config).then(res => {
            let result = res.data || {}
            if (!result || _isNullObj(result)) {
                reject(VuePrototype.$config.reqErrorMsg)
            }
            switch (+result.code) {
                case 0:
                    resolve(result.data)
                    break
                case -1:
                    message.error(result.msg || VuePrototype.$config.reqErrorMsg, VuePrototype.$config.closeMessageBoxTime)
                    reject(result.msg || VuePrototype.$config.reqErrorMsg)
                    break
                case -2:
                    localStorage.clear()
                    sessionStorage.clear()
                    Router.push('/')
                    break
                default:
                    message.error(result.msg || VuePrototype.$config.reqErrorMsg, VuePrototype.$config.closeMessageBoxTime)
                    reject(result.msg || VuePrototype.$config.reqErrorMsg)
            }
        }, err => {
            console.log(err)
            reject(VuePrototype.$config.reqErrorMsg)
        }).catch(error => {
            console.log(error)
            reject(VuePrototype.$config.reqErrorMsg)
        })
    })
}
