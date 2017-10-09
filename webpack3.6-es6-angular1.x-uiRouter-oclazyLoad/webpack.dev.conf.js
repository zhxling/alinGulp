const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const source = __dirname + '/src/';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/[name]-one.css');
const extractLESS = new ExtractTextPlugin('css/[name]-two.css');
const extractLESS1 = new ExtractTextPlugin('css/[name]-three.css');

function assetsPath(_path) {
  return path.posix.join('assets', _path)
}

module.exports = {
  // TODO hash plugin
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // where to load chunk file
    // publicPath: '/dist/',
    filename: 'js/[name].[hash:5].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ],
    alias: {
      components: source + 'components',
      router: source + 'router',
      views: source + 'views'
    }
  },
  // devtool: 'inline-source-map',
  devServer: {
    hot: true,
    compress: true,
    contentBase: './dist',
    port: 7070
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: 'css-loader'
        })
      },
      {
        test: /style\.less$/,
        use: extractLESS.extract({
          loader: 'css-loader!postcss-loader!less-loader'
        })
      },
      {
        test: /[^style]*\.less$/,
        use: extractLESS1.extract({
          loader: 'css-loader!postcss-loader!less-loader'
        })
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
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
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new WriteFilePlugin(),
    extractCSS,
    extractLESS,
    extractLESS1,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico', // favicon路径
      title: 'angular1.x-es6-webpack3.6-oclazyLoad',
      template: './src/index.html'
    })
  ]
};
