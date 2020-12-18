<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne"> add 4</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>

import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/changeCounter.vue';
import favoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    favoriteValue
  },
  
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  methods:{
    addOne(){
      //this.$store.commit('increment');
      this.$sotre.dispatch('increment')
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>