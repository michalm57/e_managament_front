<template>
  <nav-bar-component />
  <router-view />
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
    } catch {
      console.log("test");
    }
  },
};
</script>
