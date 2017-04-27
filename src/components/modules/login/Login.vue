<template>
  <div class="content has-text-centered">
    <h1 class="is-title is-bold">Login</h1>

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <form v-on:submit.prevent="doLogin">
            <label class="label">Username</label>
            <p class="control">
              <input v-model="username" class="input" type="text" placeholder="username">
            </p>
            <label class="label">Password</label>
            <p class="control">
              <input v-model="password" class="input" type="password" placeholder="password">
            </p>
            <br>
            <p class="control">
              <button type="submit" class="button is-primary">Login</button>
              <button class="button is-default">Cancel</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: null,
      password: null,
      rememberMe: false
    }
  },
  methods: {
    ...mapActions(['login']),
    doLogin () {
      return this.login({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>
