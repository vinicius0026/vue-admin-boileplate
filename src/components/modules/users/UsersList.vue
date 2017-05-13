<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="level">
          <div class="level-left">
            <h4 class="title">Users</h4>
          </div>
          <div class="level-right">
            <router-link :to="{ name: 'users.create' }" class="button">
              Create User
            </router-link>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>roles</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.scope }}</td>
              <td>
                <Tooltip label="User details" placement="top">
                  <button class="button is-small" @click="view(user.id)">
                    <span class="icon is-small"><i class="fa fa-search"></i></span>
                  </button>
                </Tooltip>
                <Tooltip label="Remove user" placement="top">
                  <button class="button is-small is-danger" @click="remove(user.id)">
                    <span class="icon is-small"><i class="fa fa-remove"></i></span>
                  </button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
</template>

<script>
import router from '../../../router'
import usersService from './usersService'
import Toastr from '../../util/Toastr'
import Tooltip from 'vue-bulma-tooltip'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetch () {
      return usersService.list()
        .then(res => {
          this.users = res.data
        })
        .catch(err => {
          Toastr.error('Unable to fetch users', 'Error')
          console.error(err)
        })
    },
    view (id) {
      return router.push({ name: 'users.details', params: { id } })
    },
    remove (id) {
      return usersService.remove(id)
        .then(() => {
          Toastr.success('User removed successfully', 'Success')
          this.fetch()
        })
        .catch(err => {
          Toastr.error('Failed to remove user', 'Error')
          console.error(err)
        })
    }
  },
  created () {
    this.fetch()
  },
  components: {
    Tooltip
  }
}
</script>

<style lang="scss">
</style>
