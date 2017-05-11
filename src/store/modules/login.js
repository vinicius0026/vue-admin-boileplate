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
      .then(res => res.data.data)
      .then(user => {
        commit(LOGIN_SUCCESS, user)
        return user
      })
      .then(user => window.localStorage.setItem('user', JSON.stringify(user)))
      .then(() => router.push({ name: 'dashboard' }))
  },
  setUser ({ commit }, user) {
    commit(LOGIN_SUCCESS, user)
  },
  logout ({ commit }) {
    commit(LOGOUT)
    window.localStorage.removeItem('user')
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
    state.user = null
    state.error = null
  }
}

export default {
  actions,
  getters,
  state,
  mutations
}
