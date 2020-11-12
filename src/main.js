import Vue from 'vue'
import App from './App'

import piui from 'sadais-piui'
// config 可选，覆盖默认配置，达到全局配置的效果
Vue.use(piui, {
  navbar: {
    homePage: 'pages/base-style/index'
  }
})

// 安装utils快捷调用方式
import utils from '@/utils'
Vue.prototype.$utils = utils
console.log('已安装$utils，使用方式：this.$utils', utils)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
