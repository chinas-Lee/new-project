/**
 * Created by LCQ on 2019-05-14,0014.
 */
module.exports = {
    //是否使用eslint
    lintOnSave: true,
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // 配置代理
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
    },
    //配置全局样式变量
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: `@import "@/assets/style/index.scss";`
    //         }
    //     }
    // }
}