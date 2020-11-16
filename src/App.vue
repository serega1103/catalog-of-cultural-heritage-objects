<template>
  <div id="app">
    <cho-main-wrapper />
  </div>
</template>

<script>
import choMainWrapper from './components/cho-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    choMainWrapper
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
