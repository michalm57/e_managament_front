<template>
  <nav-bar-component/>
  <router-view/>
</template>

<script>
import NavBarComponent from "./components/Navigation/NavBarComponent.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavBarComponent,
  },
  async created() {
    try {
      const respone = await axios.get("auth/user");

      if (respone.status === 200) {
        this.$store.dispatch("user", respone.data);
      }
    } catch (error) {
      this.$router.push({ name: "LoginPage" });
    }
  },
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
