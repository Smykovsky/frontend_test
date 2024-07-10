<template>
  <div class="app">
    <Header ref="header"/>
    <Nuxt />
    <Footer @show-my-name="displayName"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    displayName() {
      this.$refs.header.toggleName()
    }
  }
}
</script>


<style lang="sass">
@import "assets/app.sass"
</style>
