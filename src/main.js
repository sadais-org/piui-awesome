/*
 * @Author: zhangzhenfei
 * @Date: 2020-11-13 10:25:49
 * @LastEditTime: 2021-03-05 11:27:37
 * @LastEditors: zhangzhenfei
 * @Description:
 * @FilePath: /piui-awesome/src/main.js
 */
import Vue from 'vue'
import App from './App'

import piui from '@/piui'
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

// #ifdef H5
// 如果是美信云浏览器环境，加载美信云uniapp适配器
import { isMissonWebKit } from '@/utils/misson'

// 调试
import vconsole from 'vconsole'

if (isMissonWebKit()) {
  require('@/plugins/misson-uniapp-adapter')
  Vue.prototype.$vconsole = new vconsole() // 使用vconsole
}

// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
