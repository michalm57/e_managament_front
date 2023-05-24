<template>
  <nav-bar-component/>  
  <router-view />
</template>

<script>
import NavBarComponent from './components/Navigation/NavBarComponent.vue';
export default {
  name: "App",
  components: {
    NavBarComponent,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>