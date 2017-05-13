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
        <DataTable :columns="columns"
                   :fetch="fetch"
                   :remove="remove"
                   :view="view"></DataTable>
      </article>
    </div>
  </div>
</template>

<script>
import router from '../../../router'
import usersService from './usersService'
import DataTable from '../../util/DataTable'

export default {
  name: 'users',
  data () {
    return {
      users: [],
      columns: [
        { label: 'id', field: 'id' },
        { label: 'username', field: 'username' },
        { label: 'roles', field: 'scope' }
      ],
      fetch: usersService.list,
      remove: usersService.remove
    }
  },
  methods: {
    view (id) {
      return router.push({ name: 'users.details', params: { id } })
    }
  },
  created () {
    this.fetch()
  },
  components: {
    DataTable
  }
}
</script>

<style lang="scss">
</style>
