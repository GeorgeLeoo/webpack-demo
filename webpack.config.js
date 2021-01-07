const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    indanotherex: {
      import: './src/another-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 如果我们要在一个 HTML 页面上使用多个入口时，
  // 还需设置 optimization.runtimeChunk: 'single'
  optimization: {
    runtimeChunk: 'single'
  }
}