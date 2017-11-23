const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin'); // 自动注入注解插件,解决angularjs压缩混淆无法找到provider问题

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin('css/style.css');
const extractIndex = new ExtractTextPlugin('css/index.css');

// 读取同一目录下的 base config
const config = require('./webpack.base.conf');

config.output.publicPath = 'http://127.0.0.1:8008/'; // 会在资源前面统一加上该路径,需要替换为相应的服务路径

// 对于需要热加载的css的处理
config.module.rules.push(
  // 自定义的公共css
  {
    test: /less[a-zA-z0-9]*\.less$/,
    use: extractStyle.extract({
      loader: 'css-loader!postcss-loader!less-loader'
    })
  },

  // 功能页面自定义css
  {
    test: /(?=modules|components).+\.less$/,
    use: extractIndex.extract({
      loader: 'css-loader!postcss-loader!less-loader'
    })
  }
);

config.plugins.push(
  extractStyle,
  extractIndex,
  // 官方文档推荐使用下面的插件确保 NODE_ENV
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
  new CleanWebpackPlugin(['dist']),
  new NgAnnotatePlugin({
    add: true
  }),
  // 压缩js
  new UglifyJSPlugin({
    uglifyOptions: {
      ie8: false,
      ecma: 8,
      output: {
        comments: false, // 去掉注释
      },
      compress: {
        drop_console: true, // 去掉console.log
      },
      warnings: false
    }
  })
);

module.exports = config;
