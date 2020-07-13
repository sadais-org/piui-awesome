import Vue from 'vue'
import App from './App'

import piui from './piui'
Vue.use(piui)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
