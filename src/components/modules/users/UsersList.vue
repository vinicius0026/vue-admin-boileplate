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
              <td><a class="delete"></a></td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
</template>

<script>
import usersService from './usersService'
import Toastr from '../../util/toastr'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  created () {
    usersService.list()
      .then(res => {
        this.users = res.data
      })
      .catch(err => {
        Toastr.error('Unable to fetch users', 'Error')
        console.error(err)
      })
  }
}
</script>

<style lang="scss">
</style>
