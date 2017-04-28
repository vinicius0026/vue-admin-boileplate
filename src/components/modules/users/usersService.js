import axios from 'axios'
import { user } from '../../../constants/api'

export default {
  list
}

function list () {
  return axios.get(user.list())
}
