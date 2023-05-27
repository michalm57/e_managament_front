<template>
  <nav-bar-component/>
  <router-view/>
</template>

<script>
import NavBarComponent from "./components/Navigation/NavBarComponent.vue";
export default {
  name: "App",
  components: {
    NavBarComponent,
  }
};
</script>
