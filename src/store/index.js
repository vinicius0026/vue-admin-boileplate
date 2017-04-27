import Vue from 'vue'
import Vuex from 'vuex'
import pkg from '../../package.json'
import * as getters from './getters'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    login
  },
  state: {
    pkg
  },
  mutations: {
  }
})
