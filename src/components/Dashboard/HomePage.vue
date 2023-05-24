<template>
  <div>
    <h1 v-if="user" class="text-4xl pb-5">Hi, {{ user.name }}</h1>
    <h1 v-if="!user" class="text-4xl pb-5">You are not logged in!</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const respone = await axios.get("user");

      this.user = respone.data;
    } catch (error) {
      this.$router.push({ name: "LoginPage" });
    }
  },
};
</script>
