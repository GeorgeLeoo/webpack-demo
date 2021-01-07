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
  // webpack-dev-server 为你提供了一个简单的 web server，
  // 并且具有 live reloading(实时重新加载) 功能
  // npm install --save-dev webpack-dev-server
  //
  // 修改配置文件，告知 dev server，从什么位置查找文件
  //
  // 以下配置告知 webpack-dev-server，
  // 将 dist 目录下的文件 serve 到 localhost:8080 下。
  //（译注：serve，将资源作为 server 的可访问文件）
  //
  // webpack-dev-server 在编译之后不会写入到任何输出文件。
  // 而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，
  // 就好像它们是挂载在 server 根路径上的真实文件一样。
  // 如果你的页面希望在其他不同路径中找到 bundle 文件，
  // 则可以通过 dev server 配置中的 publicPath 选项进行修改。
  devServer: {
    contentBase: './dist',
  },
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
