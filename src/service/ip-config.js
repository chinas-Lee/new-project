/**
 * Created by LCQ on 2019-05-13,0013.
 */
let baseUrl = {
    basicApi: '' // 接口API
}
// 开发环境使用开发配置，生产环境根据不同命令走不同环境配置
process.env.NODE_ENV === 'development' ? baseUrl = { basicApi: 'http://mh.yigemed.com/dev/crm' } : baseUrl = { basicApi: process.env.VUE_APP_BASEURL }

export default baseUrl

