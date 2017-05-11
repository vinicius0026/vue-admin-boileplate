'use strict'

import axios from 'axios'
import router from '../../../router'
import store from '../../../store'
import { auth } from '../../../constants/api'

axios.interceptors.response.use(res => res, err => {
  if (err.response.status === 401 && store.getters.isAuthenticated) {
    store.dispatch('logout')
    router.push({ name: 'login' })
  }
  return Promise.reject(err)
})

export default {
  login,
  logout
}

function login (credentials) {
  return axios.post(auth.login(), credentials)
}

function logout () {
  return axios.get(auth.logout())
}
