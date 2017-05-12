import axios from 'axios'
import { user } from '../../../constants/api'

export default {
  create,
  remove,
  list
}

function create (newUser) {
  return axios.post(user.create(), newUser)
}

function remove (id) {
  return axios.delete(user.remove(id))
}

function list () {
  return axios.get(user.list())
}
