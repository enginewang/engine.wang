const path = require('path');
const webpack = require('webpack')
function resolve(_path) {
    return path.join(__dirname, _path);
}

const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
// module.exports = {
//   publicPath: './',
//   productionSourceMap: false,
//   configureWebpack: {...},
//   chainWebpack: config => {
//     config.resolve.alias.set('@', resolve('src'));
//     if (process.env.NODE_ENV === 'production') {
//       config.plugin('compressionPlugin')
//           .use(new CompressionPlugin({
//             filename: '[path].gz[query]',
//             algorithm: 'gzip',
//             test: productionGzipExtensions,
//             threshold: 10240,
//             minRatio: 0.8,
//             deleteOriginalAssets: true, //是否删除原资源
//           }));
//     }
//   },
// };

// vue.config.js
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
    },
    lintOnSave: true,
    // configureWebpack: {
    //   // Set up all the aliases we use in our app.
    //   resolve: {
    //     alias: {
    //       assets: resolve('src/assets')
    //     }
    //   }
    // },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    },
    configureWebpack: config => {
        config.resolve.alias = {
        '@': resolve('src')
        }
        // if (process.env.NODE_ENV === 'production') {
        //     config.plugins.push(
        //         new CompressionPlugin({
        //             filename: '[path][base].gz',
        //             algorithm: 'gzip',
        //             test: new RegExp('\.(js|css)$'),
        //             // 只处理大于xx字节 的文件，默认：0
        //             threshold: 10240,
        //             // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
        //             minRatio: 0.8, // 默认: 0.8
        //             deleteOriginalAssets: true
        //         })
        //     )
        //
        // }
    },
};

// 'use strict'
// const path = require('path')
// // const defaultSettings = require('./src/settings.js')
//
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
//
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//
// const name = 'engine导航' // page title
// // gzip压缩文件配置
// const productionGzipExtensions = ['js','css'];
// // 判断是否是生产环境
// const isProduction = process.env.NODE_ENV !== "development";
// // 本地环境是否需要使用cdn
// const devNeedCdn = false;
// // cdn 配置
// const cdn = {
//     externals: {
//         'vue': 'Vue',
//         'vuex': 'Vuex',
//         'vue-router': 'VueRouter',
//         'axios': 'axios',
//         "moment/moment": "moment",
//         'element-ui': 'ELEMENT',
//         "echarts": "echarts",
//         // "@wangeditor/editor": "wangEditor",
//     },
//     css: [
//         'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.12/theme-chalk/index.min.css',
//         'https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css',
//     ],
//     js: [
//         'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
//         'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js',
//         'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.6/vue-router.min.js',
//         'https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js',
//         'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment.min.js',
//         // 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.12/locale/zh-CN.min.js',
//
//         'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/index.min.js',
//         // 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/locale/zh-CN.min.js',
//
//         'https://cdn.jsdelivr.net/npm/echarts@4.9.0/dist/echarts.min.js',
//         // 'https://unpkg.com/@wangeditor/editor@latest/dist/index.js',
//     ]
// };
//
// // If your port is set to 80,
// // use administrator privileges to execute the command line.
// // For example, Mac: sudo npm run
// // You can change the port by the following methods:
// // port = 9528 npm run dev OR npm run dev --port = 9528
// const port = process.env.port || process.env.npm_config_port || 9528 // dev port
//
// // All configuration item explanations can be find in https://cli.vuejs.org/config/
// module.exports = {
//     /**
//      * You will need to set publicPath if you plan to deploy your site under a sub path,
//      * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
//      * then publicPath should be set to "/bar/".
//      * In most cases please use '/' !!!
//      * Detail: https://cli.vuejs.org/config/#publicpath
//      */
//     publicPath: '/',
//     outputDir: 'dist',
//     assetsDir: 'static',
//     // lintOnSave: process.env.NODE_ENV === 'development',
//     lintOnSave: false,
//     productionSourceMap: false,
//     configureWebpack(config) {
//         config.name = name;
//         config.resolve.alias = {
//             '@': resolve('src')
//         };
//         // 若是生产环境，则执行以下代码
//         if (isProduction) {
//             config.externals = cdn.externals;
//
//             config.plugins.push(
//                 new CompressionWebpackPlugin({
//                     algorithm: 'gzip',
//                     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//                     threshold: 10240, // 只有大小大于该值的资源会被处理 10240
//                     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
//                     // deleteOriginalAssets: false, // 删除原文件
//                 })
//             );
//             config.plugins.push(
//                 new UglifyJsPlugin({
//                     uglifyOptions: {
//                         //生产环境自动删除console
//                         compress: {
//                             drop_debugger: true,
//                             drop_console: true,
//                             pure_funcs: ['console.log']
//                         }
//                     },
//                     sourceMap: false,
//                     parallel: true
//                 })
//             );
//         }
//     },
//     chainWebpack(config) {
//         // ============注入cdn start============
//         if (isProduction || devNeedCdn) {
//             config.plugin('html').tap((arg) => {
//                 arg[0].cdn = cdn
//                 return arg
//             });
//         }
//         // it can improve the speed of the first screen, it is recommended to turn on preload
//         config.plugin('preload').tap(() => [
//             {
//                 rel: 'preload',
//                 // to ignore runtime.js
//                 // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
//                 fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
//                 include: 'initial'
//             }
//         ])
//
//         // when there are many pages, it will cause too many meaningless requests
//         config.plugins.delete('prefetch')
//
//         // set svg-sprite-loader
//         config.module
//             .rule('svg')
//             .exclude.add(resolve('src/icons'))
//             .end()
//         config.module
//             .rule('icons')
//             .test(/\.svg$/)
//             .include.add(resolve('src/icons'))
//             .end()
//             .use('svg-sprite-loader')
//             .loader('svg-sprite-loader')
//             .options({
//                 symbolId: 'icon-[name]'
//             })
//             .end()
//
//         config
//             .when(process.env.NODE_ENV !== 'development',
//                 config => {
//                     config
//                         .plugin('ScriptExtHtmlWebpackPlugin')
//                         .after('html')
//                         .use('script-ext-html-webpack-plugin', [{
//                             // `runtime` must same as runtimeChunk name. default is `runtime`
//                             inline: /runtime\..*\.js$/
//                         }])
//                         .end()
//                     config
//                         .optimization.splitChunks({
//                         chunks: 'all',
//                         cacheGroups: {
//                             libs: {
//                                 name: 'chunk-libs',
//                                 test: /[\\/]node_modules[\\/]/,
//                                 priority: 10,
//                                 chunks: 'initial' // only package third parties that are initially dependent
//                             },
//                             commons: {
//                                 name: 'chunk-commons',
//                                 test: resolve('src/components'), // can customize your rules
//                                 minChunks: 3, //  minimum common number
//                                 priority: 5,
//                                 reuseExistingChunk: true
//                             }
//                         }
//                     })
//                     // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
//                     config.optimization.runtimeChunk('single')
//                 }
//             )
//     }
// }