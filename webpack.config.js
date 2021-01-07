const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 将 mode 设置为 'development'
  mode: 'development',
  entry: {
    index:'./src/index.js',
    print:'./src/print.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    // 如果不想在 watch 触发增量构建后删除 index.html 文件，
    // 可以在 CleanWebpackPlugin 中配置 
    // cleanStaleWebpackAssets 选项来实现
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
