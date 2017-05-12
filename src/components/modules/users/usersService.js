import axios from 'axios'
import { user } from '../../../constants/api'

export default {
  create,
  read,
  remove,
  list
}

function create (newUser) {
  return axios.post(user.create(), newUser)
}

function read (id) {
  return axios.get(user.read(id))
}

function remove (id) {
  return axios.delete(user.remove(id))
}

function list () {
  return axios.get(user.list())
}
