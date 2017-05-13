<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <form>
          <LabelledInput label="Username"
                         placeholder="Username"
                         v-model="user.username"
                         disabled>
          </LabelledInput>
          <LabelledInput label="Password"
                         placeholder="New Password"
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
              <button class="button is-primary" @click="update()">Update</button>
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
import Toastr from '../../util/Toastr'
import LabelledInput from '../../util/LabelledInput'

export default {
  data () {
    return {
      id: '',
      user: {
        username: '',
        scope: []
      },
      isAdmin: false,
      isUser: true,
      password: ''
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
    update () {
      const updatePayload = {
        scope: this.scope,
        password: this.password ? this.password : undefined
      }

      return usersService.update(this.id, updatePayload)
        .then(() => {
          router.push({ name: 'users.list' })
          Toastr.success('User updated successfully', 'Success')
        })
        .catch(err => {
          Toastr.error('Unable to update user', 'Error')
          console.error(err)
        })
    },
    cancel () {
      router.push({ name: 'users.list' })
    }
  },
  created () {
    this.id = this.$route.params.id

    usersService.read(this.id)
      .then(res => {
        this.user = res.data
      })
      .catch(err => {
        Toastr.error('Unable to fetch user', 'Error')
        console.error(err)
      })
  },
  components: {
    LabelledInput
  }
}
</script>
