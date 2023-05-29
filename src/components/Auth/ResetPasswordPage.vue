<template>
  <div class="place-items-center grid">
    <h1 class="text-4xl pb-10">Reset Password</h1>
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-md rounded px-8 pb-8 mb-4"
      ref="form"
    >
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
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password_confirmation"
        >
          Password Confirmation
        </label>
        <input
          v-model="password_confirmation"
          minlength="6"
          ref="password_confirmation"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password_confirmation"
          type="password"
          placeholder="******************"
          name="password_confirmation"
          required
        />
        <p
          ref="error_message_password_confirmation"
          class="text-red-500 text-xs italic"
        ></p>
      </div>
      <p ref="error_message" class="text-red-500 text-xs italic"></p>
      <p ref="success_message" class="text-green-500 text-xs italic"></p>
      <div class="pt-2">
        <button
          class="bg-red-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
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
  name: "ResetPasswordPage",
  data() {
    return {
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let successMessageParagraph = this.$refs.success_message;
        const response = await axios.post("auth/reset", {
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.$route.params.token,
        });
        successMessageParagraph.textContent = response.data.message;
        this.$router.push("/login");
      } catch (error) {
        let errorMessageParagraph = this.$refs.error_message;
        errorMessageParagraph.textContent = error.response.data.message;
      }
    },
  },
};
</script>
