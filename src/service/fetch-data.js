/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* Promise请求接口方法
* */
import Axios from './http'
import Router from '../router'
import BaseURL from './ip-config'
import ConfigInfo from '../utils/config'
import { _getSign } from '../assets/js/user-methods'

/*
 * 异步请求
 * api - 接口名称
 * bodyParams - 参数体
 * headParams - URL后参数
 * method - 请求类型
 * systemData - 系统数据
 * isNoLogin - 是否需要登录
 * */
export function fetchData (api = '', bodyParams = {}, headParams = '', method = 'post', systemData = {}, isNoLogin = false) {
    return new Promise((resolve, reject) => {
        let config = {
            method,
            url: BaseURL.basicApi + headParams
        }
        method === 'get' ? config.params = bodyParams : config.data = _getSign(api, bodyParams, systemData, isNoLogin) || ''
        Axios(config).then(res => {
            let result = res.data || {}
            if (!result) {
                reject(ConfigInfo.reqErrorMsg)
                switch (+result.code) {
                    case 0:
                        resolve(result.data)
                        break
                    case -1:
                        reject(result.msg || ConfigInfo.reqErrorMsg)
                        break
                    case -2:
                        sessionStorage.clear()
                        Router.push('/')
                        break
                    default:
                        reject(result.msg || ConfigInfo.reqErrorMsg)
                }
            }
        }, err => {
            console.log(err)
            reject(ConfigInfo.reqErrorMsg)
        }).catch(error => {
            console.log(error)
            reject(ConfigInfo.reqErrorMsg)
        })
    })
}
