<template>
  <h1 class="text-4xl pb-5">Login</h1>
  <div class="place-items-center grid">
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
        <p ref="error_message_mail" class="text-red-500 text-xs italic"></p>
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
        <p ref="error_message_password" class="text-red-500 text-xs italic"></p>
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
    </form>
  </div>
  <p><router-link to="/sign-up">Sign Up</router-link></p>
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
        password: this.password
      }
      try{
        const response = await axios.post("auth/login", data);
        localStorage.setItem('token', response.data.access_token);
      } catch (error) {
          alert(error);
      }
    },
  },
};
</script>
