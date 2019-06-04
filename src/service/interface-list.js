/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* 接口列表
* */
import { fetchData } from './fetch-data'


const interfaceList = {
    // 获取当前医院
    getMyHospital (bodyParams = {}, headParams = '', systemData = {}, isNoLogin = false) {
        return fetchData(`crm.common.hospital`, bodyParams, headParams, 'post', systemData, isNoLogin)
    },
    // 获取系统配置
    getSystemConfig (bodyParams = {}, headParams = '', systemData = {}, isNoLogin = false) {
        return fetchData(`crm.common.sysConf`, bodyParams, headParams, 'post', systemData, isNoLogin)
    }
}

export default interfaceList