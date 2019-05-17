/**
 * Created by LCQ on 2019-05-17,0017.
 */
/*
* 用户信息
*/
import { _getSessionStorageObject, _getLocalStorage, _setLocalStorage } from './storage-methods'
import projectConfig  from '../../../project-config.json'

// 获取用户toKen
const _getToken = () => {
    let resData = {
        toKen: ''
    }
    try {
        const USER_DATA = _getSessionStorageObject('userData') || {}
        USER_DATA.toKen ? resData.toKen = USER_DATA.toKen : resData.toKen = projectConfig.DEFAULT_TOKEN
    } catch (e) {
        console.log(e)
    }
    return resData
}

// 获取SN
const _getSN = () => {
    let resData = {
        SN: ''
    }
    try {
        resData.SN = _getLocalStorage('sn') || ''
        if (!resData.SN) {
            const SN = `web_${Math.random().toString(36).substr(2, 15)}`
            _setLocalStorage('sn', SN)
        }
    } catch (e) {
        console.log(e)
    }
    return resData
}

// 获取签名
const _getSign = (method, data, systemData = {}) => {
    let token = _getToken()
}

export {
    _getToken,
    _getSign,
    _getSN
}
