/*
 * @Author: zhangzhenfei
 * @Date: 2021-03-05 10:20:57
 * @LastEditTime: 2021-03-05 11:33:21
 * @LastEditors: zhangzhenfei
 * @Description: 美信云相关api在此调用
 * @FilePath: /piui-awesome/src/utils/misson.js
 */

// #ifdef H5

export function isMissonWebKit() {
  const isMissonWebKit = window.navigator.userAgent.indexOf('MissonWebKit') > -1
  !isMissonWebKit && console.log('当前非美信云浏览器，无法调用基座api，请注意')
  return isMissonWebKit
}

/**
 * 调用美信云基座api
 * @param name {string} 方法组、类别
 * @param method {string} 方法名称
 * @param params {Array} 参数
 * @
 * @return {promise}
 */
export function invokeMissonApi(name, method, params, success, fail, complete) {
  return new Promise((resolve, reject) => {
    if (!isMissonWebKit()) return
    if (!window.cordova) return console.log('请检查是否注入cordova')
    window.cordova.exec(
      msg => {
        success && success(msg)
        complete && complete(msg)
        resolve(msg)
      },
      msg => {
        fail && fail(msg)
        complete && complete(msg)
        reject(msg)
      },
      name,
      method,
      params || []
    )
  })
}

// #endif
