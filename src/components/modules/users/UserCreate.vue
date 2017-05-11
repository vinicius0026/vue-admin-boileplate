<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <form>
          <LabelledInput label="Username"
                         placeholder="Username"
                         v-model="username">
          </LabelledInput>
          <LabelledInput label="Password"
                         placeholder="Password"
                         type="password"
                         v-model="password">
          </LabelledInput>
          <div class="field">
            <label class="label">Scope</label>
            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="isUser"> user
              </label>
              <label>
                <input type="checkbox" v-model="isAdmin"> admin
              </label>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary" @click="create()">Submit</button>
            </p>
            <p class="control">
              <button class="button is-link" @click="cancel()">Cancel</button>
            </p>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import router from '../../../router'
import usersService from './usersService'
import LabelledInput from '../../util/LabelledInput'

export default {
  data () {
    return {
      username: '',
      password: '',
      isUser: true,
      isAdmin: false
    }
  },
  computed: {
    scope: function () {
      const _scope = []
      if (this.isAdmin) {
        _scope.push('admin')
      }

      if (this.isUser) {
        _scope.push('user')
      }

      return _scope
    }
  },
  methods: {
    create () {
      const user = {
        username: this.username,
        password: this.password,
        scope: this.scope
      }

      usersService.create(user)
        .then(() => {
          router.push({ name: 'users.list' })
        })
    },
    cancel () {
      return router.push({ name: 'users.list' })
    }
  },
  components: {
    LabelledInput
  }
}
</script>
