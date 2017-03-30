import Vue from 'vue'
import Vuex from 'vuex'
import pkg from '../../package.json'
import * as getters from './getters'

console.log('pkg', pkg)

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    pkg
  },
  mutations: {
  }
})
