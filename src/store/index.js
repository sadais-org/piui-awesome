import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  theme: 'light'
}

const mutations = {
  changeState(state, { key = '', value = '' }) {
    state[key] = value
  },

  changeTheme(state, payload) {
    state.theme = payload
  }
}

const actions = {}

const getters = {}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters
})

export default store
