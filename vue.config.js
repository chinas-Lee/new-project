/**
 * Created by LCQ on 2019-05-14,0014.
 */
const CompressionPlugin = require('compression-webpack-plugin')
const IsProduction = process.env.NODE_ENV === 'production'

module.exports = {
    // 是否使用eslint
    lintOnSave: 'error',
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
    // Gzip加速
    configureWebpack: () => {
        if (IsProduction) {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /.(js|css|svg|woff|ttf|json|html)$/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false // 不删除源文件
                    })
                ]
            }
        }
    }
}
