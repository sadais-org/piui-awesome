// vue.config.js
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝插件，把build里面目录下的所有内容拷贝至dist中

module.exports = {
  productionSourceMap: true,
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.NODE_ENV === 'production'
    }
  },
  devServer: {
    hot: true,
    port: 31415
  },
  transpileDependencies: ['sadais-piui', 'sadais-core', 'luch-request'],
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'src/build'),
          to: path.join(
            __dirname,
            'dist',
            process.env.NODE_ENV === 'production' ? 'build' : 'dev',
            process.env.UNI_PLATFORM,
            ''
          )
        }
      ])
    ]
  }
}
