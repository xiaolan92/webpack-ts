const Webpack = require('webpack'),
  path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  /**
   *   打包动态链接库,实际项目时可根据需要打包不同的第三方库，
   *   这里为了方便,打包了常用的第三方库
   *
   */
  entry: {
    lib: ['@babel/polyfill', 'react','react-dom', 'axios', 'antd','react-redux','react-router-dom','three']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/lib'),
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist/lib/*')],
      verbose: true,
      dry: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    }),
    new Webpack.DllPlugin({
      path: path.resolve(__dirname, '../dist/lib/[name].manifest.json'),
      name: '_dll_[name]',
      context: path.resolve(__dirname, '../')
    })
  ]
}
