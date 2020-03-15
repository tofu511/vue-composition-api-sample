<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloCompositionApi></HelloCompositionApi>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import HelloCompositionApi from './components/HelloCompositionApi.vue'

Vue.use(VueCompositionApi)

export default {
  name: 'App',
  components: {
    HelloCompositionApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
