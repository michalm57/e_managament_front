<template>
  <div class="place-items-center grid">
    <h1 class="text-4xl pb-10">Login</h1>
    <form
      v-on:submit="signUp"
      class="bg-white shadow-md rounded px-8 pb-8 mb-4"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          ref="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          v-model="password"
          minlength="6"
          ref="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          name="password"
          required
        />
      </div>
      <p ref="error_message" class="text-red-500 text-xs italic"></p>
      <div class="pt-2">
        <button
          class="bg-red-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          v-on:click="login"
        >
          Login
        </button>
      </div>
      <router-link
      to="/forgot"
      href="#"
      class="block text-gray-900 md:hover:text-red-400 mt-5"
    >
      Forgot password?
    </router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("auth/login", data);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.access_token);
          this.$store.dispatch("user", response.data.user);
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        let errorParagraph = this.$refs.error_message;

        let emailInput = this.$refs.email;
        let passwordInput = this.$refs.password;

        emailInput.classList.add("border-red-500");
        passwordInput.classList.add("border-red-500");
        errorParagraph.textContent = "Invalid credentials";
      }
    },
  },
};
</script>
