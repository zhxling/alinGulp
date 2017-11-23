const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractVendor = new ExtractTextPlugin('css/vendor.css');


const source = `${__dirname}/src/`;
// set the environment by npm lifecycle event , `npm run build` npm_lifecycle_event is build
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

let vendor = [
    'angular',
    'angular-cookies',
    'angular-sanitize',
    'angular-animate',
    'angular-ui-router',
    'angular-messages',
    'angular-resource',
    'angular-loading-bar',
    'ng-dialog',
    'snapsvg',
    'snap.svg.zpd',
    'snap.svg.ele.zpdr',
    'three'
]

module.exports = {
    // TODO hash plugin
    entry: {
        vendor,
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // where to load chunk file
        filename: 'js/[name].[hash:5].js',
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components'),
            path.resolve(__dirname, 'web_modules'),
        ],
        alias: {
            components: `${source}components`,
            router: `${source}router`,
            views: `${source}views`
        }
    },
    module: {
        rules: [
            // {
            //   enforce: 'pre', // ESLint 优先级高于其他 JS 相关的 loader
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   loader: 'eslint-loader'
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // 外部引入的css
            {
                test: /\.css$/,
                use: extractVendor.extract({
                    use: 'css-loader'
                }),
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10,
                    name: 'assets/images/[name].[ext]'
                }
            },
            {
            // 视频加载
                test: /\.(mp4|flv|swf|ogg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=assets/video/[name].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        extractVendor,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // materialize-css rely on this to support velocity
            'window.jQuery': 'jquery',
            eve: 'eve',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: isProd ? 'js/vendor.[hash].js' : 'js/vendor.js'
        }),
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico', // favicon路径
            title: 'angular1.x-es6-webpack3.6-oclazyLoad',
            template: './src/index.html',
            minify: {
                removeComments: true
            }
        })
    ]
};
