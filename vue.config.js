/**
 * Created by LCQ on 2019-05-14,0014.
 */
module.exports = {
    lintOnSave: true, //是否使用eslint
    productionSourceMap: false, // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false,
        open: false,
        proxy: {
            '/crm': {
                target: 'http://mh.yigemed.com/dev/crm', //对应自己的接口
                changeOrigin: true
            }
        }
    }
}