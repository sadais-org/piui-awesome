/*
 * @Author: zhangzhenfei
 * @Date: 2021-03-05 10:16:46
 * @LastEditTime: 2021-03-06 16:50:56
 * @LastEditors: zhangzhenfei
 * @Description: 美信云uniapp适配器
 * @FilePath: /misson-uniapp-adapter/index.js
 */

// #ifdef H5
import Vue from 'vue'
import { dynamicImport } from '@/piui/tools/common'

// 华发轻应用，判断是否为美信浏览器，嵌入cordova
const script = window.document.createElement('script')
script.type = 'text/javascript'
script.async = true // 异步加载

if (process.env.NODE_ENV === 'production') {
  // 生产环境使用本地包的方式，直接引入注入的cordova.js
  script.src = './cordova.js'
} else {
  // 非生产环境下，使用外链包的方式调试
  const userAgent = navigator.userAgent
  const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const flatform = isIOS ? 'ios' : 'android'
  const cordovaPath = './static/' + flatform + '/cordova.js'
  script.src = cordovaPath + '?version=' + new Date() * 1
}
window.document.head.appendChild(script)

// 魔改uni对应的api

const rewriteApis = dynamicImport(require.context('./misson', false, /\.js$/))

Vue.prototype.$uni = {
  ...Vue.prototype.$uni,
  ...rewriteApis
}

// #endif
