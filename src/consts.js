const STATIC_BASE_URL = 'https://m.sadais.com/sadais-lydx/static' // /static

const DEFAULT_CONSTS = {
  NAME: 'SADAIS-LYDX', // 应用名称
  WX_APPID: 'wxbc8a1a3f5ae9f2ae', // 微信APPID
  SYSTEM: 'MA', // 系统
  VERSION: '1.0.0', // 版本号
  API_BASE_URL: 'https://lydx.sadais.com/', // 接口baseURL
  STATIC_BASE_URL, // 静态资源baseURL
  STATIC_IMG_URL: STATIC_BASE_URL + '/img/',
  RET_CODE: { SUCCESS: 0, FAIL: 1, TOKEN_UNDEFINED: 19, TOKEN_EXPIRED: 2 }, // 返回RET状态码解析
  LOGIN_PATH: 'pages/login/index',
  TOKEN_API: '/lydx/v1/login/refreshtoken'
}
export default DEFAULT_CONSTS
