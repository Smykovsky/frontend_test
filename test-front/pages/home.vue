<template>
  <div class="home-container">
    <div class="home-header">
      <h1>Nagłówek H1</h1>
      <div class="line"></div>
    </div>
    <div class="blocks-content">
      <div class="block block-first">
        <div class="title">
          <h2>BLOK PIERWSZY</h2>
        </div>
        <div class="options">
          <label><input type="radio" name="option" value="option1" v-model="selectedOption"> Opcja pierwsza</label>
          <label><input type="radio" name="option" value="option2" v-model="selectedOption"> Opcja druga</label>
          <label><input type="radio" name="option" value="optionRandom" v-model="selectedOption"> Opcja losowa</label>
        </div>
      </div>
      <div class="block block-second">
        <div class="title">
          <h2>BLOK DRUGI</h2>
        </div>
        <div class="block-buttons">
          <button @click="replaceText">ZASTĄP</button>
          <button @click="innerText">DOKLEJ</button>
        </div>
      </div>
      <div class="block block-third">
        <div class="title">
          <h2>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h2>
        </div>
        <div class="block-text">
          <p id="display-text"> {{text}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Facilisi etiam dignissim diam quis enim lobortis. Mauris in aliquam sem fringilla. Nulla at volutpat diam ut venenatis. Nunc id cursus metus aliquam eleifend. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Mi in nulla posuere sollicitudin aliquam ultrices. Tincidunt eget nullam non nisi est sit.",
      messages: [],
      includeNewText: false,
      includeDoubleText: false,
      selectedOption: null
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch('/data.json');
        const data = await res.json();
        this.messages = Object.values(data);
        console.log(this.messages)
      } catch (error) {
        console.error(error);
      }
    },
    replaceText() {
      if(this.messages != null) {
        this.text = this.messages.join(' ')
      }
    },
    innerText() {
        switch (this.selectedOption) {
          case "option1":
            if (this.includeDoubleText === false) {
              this.text += this.text
              this.selectedOption = true
            } else return
            break
          case "option2":
            if (this.messages != null && this.includeNewText === false) {
              this.text += this.messages.join(' ')
              this.includeNewText = true;
            } else return;
            break
          case "optionRandom":

        }
    },
  },
}
</script>


<style lang="sass">
@import "assets/home.sass"
</style>
