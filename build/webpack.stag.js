const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  performance: {
    hints: 'error',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
              plugins: [
                require('postcss-import')(),
                require('autoprefixer')({
                  overrideBrowserslist: ['last 30 versions', '> 2%', 'Firefox >= 10', 'ie 6-11'],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        // cssProcessorOptions: cssnanoOptions,
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
              normalizeUnicode: false,
            },
          ],
        },
        canPrint: true,
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true, // console
            drop_debugger: false,
            pure_funcs: ['console.log'], // 移除console
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        styles: {
          name: 'static/css/chunk-styles',
          test: /\.(css|scss|sass)$/,
          chunks: 'all',
          enforce: true,
        },
        commons: {
          name: 'static/js/chunk-commons',
          test: path.join(__dirname, '..', 'src/components'),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'static/js/chunk-react',
          priority: 20,
        },
        vendors: {
          name: 'static/js/chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[id].[hash:8].css',
    }),
  ]
})