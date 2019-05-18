/**
 * Created by LCQ on 2019-05-13,0013.
 */
export default {
    install (Vue) {
        let VuePrototype = Vue.prototype
        // 工具函数
        VuePrototype.$tools = {
            // 获取数据类型
            getDataType (item) {
                try {
                    let res = ''
                    switch (Object.prototype.toString.call(item)) {
                        case '[object Array]':
                            res = 'Array'
                            break
                        case '[object Object]':
                            res = 'Object'
                            break
                        case '[object String]':
                            res = 'String'
                            break
                        case '[object Number]':
                            res = 'Number'
                            break
                        case '[object Boolean]':
                            res = 'Boolean'
                            break
                        case '[object Undefined]':
                            res = 'Undefined'
                            break
                        case '[object Null]':
                            res = 'Null'
                            break
                        default:
                            res = false
                    }
                    return res
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
        }
        // 配置公共信息
        VuePrototype.$configInfo = {
            reqErrorMsg: 'The server is busy, please try again later !', // 网络接口请求错误提示
            closeMessageBoxTime: 3
        }
    }
}