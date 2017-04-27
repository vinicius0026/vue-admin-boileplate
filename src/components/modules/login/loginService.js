'use strict'

import axios from 'axios'
import { auth } from '../../../constants/api'

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
