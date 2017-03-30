<template>
  <nav class="level app-levelbar">
    <div class="level-left">
      <div class="level-item">
        <h3 class="subtitle is-5">
          <strong>{{ title }}</strong>
        </h3>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      list: null
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss">
</style>
