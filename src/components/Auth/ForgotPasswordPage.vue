<template>
  <div class="place-items-center grid">
    <h1 class="text-4xl pb-10">Forgot Password</h1>
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
      <p ref="error_message" class="text-red-500 text-xs italic"></p>
      <p ref="success_message" class="text-green-500 text-xs italic"></p>
      <div class="pt-2">
        <button
          class="bg-red-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          v-on:click="login"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ForgotPasswordPage",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let successMessageParagraph = this.$refs.success_message;
        const response = await axios.post("auth/forgot", {
          email: this.email,
        });
        successMessageParagraph.textContent = response.data.message;
      } catch (error) {
        let errorMessageParagraph = this.$refs.error_message;
        errorMessageParagraph.textContent = error.response.data.message;
      }
    },
  },
};
</script>
