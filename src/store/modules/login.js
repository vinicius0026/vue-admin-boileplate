'use strict'

import loginService from '../../components/modules/login/loginService'
import router from '../../router'

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../mutations-types'

const state = {
  processing: false,
  user: null,
  error: null
}

const getters = {
  user: state => state.user,
  isAuthenticated: state => !!state.user
}

const actions = {
  login ({ commit }, credentials) {
    commit(LOGIN)
    loginService.login(credentials)
      .then(res => commit(LOGIN_SUCCESS, res.data))
      .then(() => router.push({ name: 'hello' }))
  },
  setUser ({ commit }, user) {
    commit(LOGIN_SUCCESS, user)
  },
  logout ({ commit }) {
    commit(LOGOUT)
    loginService.logout()
  }
}

const mutations = {
  [LOGIN] (state) {
    state.processing = true
  },

  [LOGIN_SUCCESS] (state, user) {
    state.processing = false
    state.user = user
    state.error = null
  },

  [LOGIN_FAILURE] (state, error) {
    state.processing = false
    state.user = null
    state.error = error
  },

  [LOGOUT] (state) {
    state.processing = false
    state.users = null
    state.error = null
  }
}

export default {
  actions,
  getters,
  state,
  mutations
}
