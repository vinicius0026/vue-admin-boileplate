<template>
  <div id="app">
    <Navbar :show="true"></Navbar>
    <Sidebar :show="true"></Sidebar>
    <MainContent></MainContent>
  </div>
</template>

<script>
import MainContent from './components/layout/MainContent'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
export default {
  name: 'app',
  components: {
    MainContent,
    Navbar,
    Sidebar
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
