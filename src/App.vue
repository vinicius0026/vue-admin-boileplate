<template>
  <div id="app">
    <TopMenu></TopMenu>
    <SideMenu></SideMenu>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import TopMenu from '@/components/TopMenu'

export default {
  name: 'app',
  components: {
    SideMenu,
    TopMenu
  }
}
</script>

<style>
body {
  margin: 0;
}

.wrapper {
  margin-left: 200px;
  padding: 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
