/*
 * @Author: zhangzhenfei
 * @Date: 2020-11-13 10:25:49
 * @LastEditTime: 2022-01-11 16:40:05
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
    statusBarBackground: '#EDF0F4',
    background: '#EDF0F4',
    homePage: 'pages/base-style/index'
  },
  popup: {
    closeIcon: {
      color: '#5a7dff'
    }
  }
})

// 安装utils快捷调用方式
import utils from '@/utils'

Vue.prototype.$utils = utils
console.log('已安装$utils，使用方式：this.$utils', utils)

Vue.config.productionTip = false

App.mpType = 'app'

// vuex
import store from '@/store'
Vue.prototype.$store = store

Vue.mixin({
  computed: {
    theme() {
      return store.state.theme
    }
  }
})

const app = new Vue({
  ...App
})
app.$mount()
