const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    pathinfo: true,
  },
  performance: {
    hints: 'warning',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            },
          },
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                require('autoprefixer'),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/dist'),
    // 域名
    host: '127.0.0.1',
    // 端口号
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    // 自动打开浏览器
    // open: true,
    compress: true,
    proxy: {
      '/api/': {
        target: '/api/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
})