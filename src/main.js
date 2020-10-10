import Vue from 'vue'
import App from './App'

import piui from './piui'
// config 可选，覆盖默认配置，达到全局配置的效果
Vue.use(piui, {
  navbar: {
    statusBarBackground: 'red',
    homePage: 'pages/base-style/index'
  }
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
