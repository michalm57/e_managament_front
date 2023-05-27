<template>
  <div class="text-center">
    <h1 v-if="user" class="text-4xl pb-5">Hi, {{ user.name }}</h1>
    <h1 v-if="!user" class="text-4xl pb-5">You are not logged in!</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapGetters(["user"]),
  }
};
</script>
