<template>
  <div id="header" class="header">
    <div class="logo">
      <font-awesome-icon icon="fa-brands fa-html5" />
    </div>
    <div class="header-text">
      Zadanie <span>rekrutacyjne</span> <br>
      <span v-if="showName" style="font-weight: lighter">Kamil Smyk</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return{
      showName: false
    }
  },
  methods: {
    toggleName() {
      this.showName = !this.showName
    }
  }
}

</script>


<<style lang="sass">
@import "assets/header.sass"
</style>
