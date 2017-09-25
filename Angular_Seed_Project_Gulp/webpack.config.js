var webpack = require('webpack');
var path = require('path');
var fs =require('fs');
var conf = require('./gulp/conf');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var BowerWebpackPlugin = require("bower-webpack-plugin");
// var AngularPlugin = require('angular-webpack-plugin');

const VENDOR = [
    "angular",
    "angular-ui-router"
];

module.exports = {
    devtool: "source-map",
    entry: {
        bundle: "./src/app/app.js",
        vendor: VENDOR
    },
    output: {
        path: path.join(__dirname, conf.paths.tmp + '/serve/app/scripts/'),
        filename: "[name].js",
        publicPath: conf.paths.tmp + "/serve/app/scripts/",
        chunkFilename: "[chunkhash].js"
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
                            "es2015"
                        ]
                    }
                },

                exclude: [path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "bower_components")]
            }
        ]
    },
    // 插件列表
    plugins: [
        new CommonsChunkPlugin({
            // vendor 的意义和之前相同
            // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
            names: ['vendor', 'manifest'],
            // 配合 manifest 文件使用
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("process.env.NODE_ENV")
        }),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        modules: ["web_modules", "node_modules", "bower_components"],
        descriptionFiles: ["package.json", "bower.json"]
    }
}