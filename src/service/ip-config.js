/**
 * Created by LCQ on 2019-05-13,0013.
 */
let baseUrl = {}

console.log(process.env)

switch (process.env.NODE_ENV) {
    // dev环境
    case 'development':
        baseUrl = {
            basicApi: 'http://localhost:8080'
        }
        break
    default:
        baseUrl = {
            basicApi: process.env.VUE_APP_BASEURL
        }
}
export default baseUrl

