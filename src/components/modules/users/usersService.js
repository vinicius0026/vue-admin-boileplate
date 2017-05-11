import axios from 'axios'
import { user } from '../../../constants/api'

export default {
  create,
  list
}

function create (newUser) {
  return axios.post(user.create(), newUser)
}

function list () {
  return axios.get(user.list())
}
