// vue.config.js
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.NODE_ENV === 'production'
    }
  }
}
