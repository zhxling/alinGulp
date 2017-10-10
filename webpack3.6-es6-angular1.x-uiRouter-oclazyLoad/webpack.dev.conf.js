const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

// 读取同一目录下的 base config
const config = require('./webpack.base.conf');

config.output.path = path.resolve(__dirname, '.tmp')

// 对于需要热加载的css的处理
config.module.rules.push(
  // 自定义的公共css
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!postcss-loader!less-loader',
    exclude: /node_modules/
  }
);

// 添加 webpack-dev-server 相关的配置项
config.devServer = {
  contentBase: './.tmp',
  hot: true
};

// 添加 Sourcemap 支持
config.plugins.push(
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    exclude: ['vendor.js'] // vendor 通常不需要 sourcemap
  })
);

// Hot module replacement
Object.keys(config.entry).forEach((key) => {
  // 这里有一个私有的约定，如果 entry 是一个数组，则证明它需要被 hot module replace
  if (Array.isArray(config.entry[key])) {
    config.entry[key].unshift(
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server'
    );
  }
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(['.tmp']),
  new WriteFilePlugin()
);

module.exports = config;
