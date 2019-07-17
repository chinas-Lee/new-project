/**
 * Created by LCQ on 2019-05-14,0014.
 */
module.exports = {
    // 是否使用eslint
    lintOnSave: true,
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // 配置全局样式变量
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/style/index.scss";`
            }
        }
    },
    chainWebpack: config => {
        console.log(process.env.VUE_APP_NODE_ENV)
        process.env.VUE_APP_NODE_ENV === 'production' && config.optimization.minimize(true)
    }
}
