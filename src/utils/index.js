/**
 * Created by LCQ on 2019-05-13,0013.
 */
export default {
    install (Vue) {
        let VuePrototype = Vue.prototype
        VuePrototype.$getData = function (data) {
            console.log(data)
        }
        // 配置公共信息
        VuePrototype.$configInfo = {

        }
    }
}