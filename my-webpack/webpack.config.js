const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const VENDOR = [
    "angular",
    "angular-ui-router"
]

module.exports = {
    entry: {
        bundle: "./app/js/index.js",
        vendor: VENDOR
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        // publicPath: "dist/",
    },
    devServer: {
        port: 8084
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              // 写法和之前基本一致
              loader: ExtractTextPlugin.extract({
                    // 必须这样写，否则会报错
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { 
                                modules: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    // 配置 url-loader 的可选项
                    options: {
                    // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                      limit: 200000,
                    // 超出限制，创建的文件格式
                    // build/images/[图片名].[hash].[图片格式]
                      name: 'images/[name].[hash].[ext]'
                   }
                  }
                ]
            }
        ]
    },
    // 插件列表
    plugins: [
        // 输出的文件路径
        new ExtractTextPlugin("css/[name].[hash].css"),
        new webpack.optimize.CommonsChunkPlugin({
            // vendor 的意义和之前相同
            // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
            names: ['vendor', 'manifest'],
            // 配合 manifest 文件使用
            minChunks: Infinity
        }),
        new CleanWebpackPlugin(['dist/bundle.*.js','dist/manifest.*.js'], {
            // 打印 log
            verbose: true,
            // 删除文件
            dry: false
        }),
        new HtmlWebpackPlugin({
            favicon:'./favicon.ico', //favicon路径
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("process.env.NODE_ENV")
        })
    ]
}