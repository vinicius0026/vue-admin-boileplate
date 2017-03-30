<template>
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link :to="{ name: 'hello' }">
          <span class="icon is-small"><i class="fa fa-dashboard"></i></span>
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'users.list' }">
          <span class="icon is-small"><i class="fa fa-user"></i></span>
          Users
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/variables";
@import "~bulma/sass/utilities/mixins";

.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  };

  .icon {
    vertical-align: baseline;
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
    li a + ul {
      margin: 0 10px 0 15px;
    }
  }
}
</style>
