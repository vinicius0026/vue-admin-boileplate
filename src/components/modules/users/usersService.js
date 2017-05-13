import axios from 'axios'
import { user } from '../../../constants/api'

export default {
  create,
  read,
  update,
  remove,
  list
}

function create (newUser) {
  return axios.post(user.create(), newUser)
}

function read (id) {
  return axios.get(user.read(id))
}

function update (id, payload) {
  return axios.put(user.update(id), payload)
}

function remove (id) {
  return axios.delete(user.remove(id))
}

function list () {
  return axios.get(user.list())
}
