<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>roles</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.scope }}</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
</template>

<script>
import usersService from './usersService'
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
  }
}
</script>

<style lang="scss">
</style>
