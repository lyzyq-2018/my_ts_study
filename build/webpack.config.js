const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'
  },

  output: {
    path:resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      // tsloader针对ts文件进行处理
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    // 自动清除原有的dist文件
    new CleanWebpackPlugin({
    }),
// 页面模板文件
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
//指定打包文件扩展名
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    contentBase: './dist', // 服务器加载资源的基础路径
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}