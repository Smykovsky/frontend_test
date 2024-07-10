<template>
  <div class="footer">
    <div class="footer-logo">
      CSS <br> IS <br> AWESOME
    </div>
    <div class="footer-text">
      nabthat
    </div>
    <div class="footer-button">
      <div id="frame" class="frame">
        <ul>
          <li><a href="#" > > ZRESETUJ USTAWIENIA</a> </li>
          <li @click="showMyName"> > POKAŻ DANE OSOBOWE </li>
        </ul>
      </div>
      <a id="frameButton" href="#frame">POKAŻ ^</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    showMyName() {
      this.$emit('show-my-name')
    }
  }
}
</script>

<style lang="sass">
@import "assets/footer.sass"
</style>
