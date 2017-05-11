<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a href="#" class="nav-item">
            <img src="../../assets/logo.png">
          </a>
        </div>
        <div class="nav-right is-flex">
          <a href class="nav-item" @click="logout">logout</a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    show: Boolean
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
