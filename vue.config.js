// vue.config.js
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
