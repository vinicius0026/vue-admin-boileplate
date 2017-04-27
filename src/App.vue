<template>
  <div id="app">
    <div v-if="isAuthenticated">
      <Navbar :show="true"></Navbar>
      <Sidebar :show="true"></Sidebar>
      <MainContent></MainContent>
    </div>
    <div v-if="!isAuthenticated">
      <router-view class="animated"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainContent from './components/layout/MainContent'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
export default {
  name: 'app',
  components: {
    MainContent,
    Navbar,
    Sidebar
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style lang="scss">
@import '~animate.css';

.animated {
  animation-duration: .377s;
}

@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';

</style>
