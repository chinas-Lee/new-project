/**
 * Created by LCQ on 2019-05-13,0013.
 */
import Utils from './utils'
import Config from './config'
import InterfaceList from './../service'

export default {
    install (Vue) {
        let VuePrototype = Vue.prototype
        // 工具函数
        VuePrototype.$utils = Utils
        // 配置公共信息
        VuePrototype.$config = Config
        // 接口
        VuePrototype.$ajax = InterfaceList
    }
}