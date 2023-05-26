<template>
  <div class="place-items-center grid">
    <h1 class="text-4xl pb-10">Sign Up</h1>
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-md rounded px-8 pb-8 mb-4"
      ref="form"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          v-model="name"
          ref="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
      </div>
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
      <div class="pt-2">
        <button
          class="bg-red-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUpPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      try {
        let result = await axios.post("auth/register", data);

        if (result.status === 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        let errorData = JSON.parse(error.response.data);
        let errorMailParagraf = this.$refs.error_message_mail;
        let errorPasswordParagraf = this.$refs.error_message_password;
        let errorPasswordConfirmationParagraf =
          this.$refs.error_message_password_confirmation;

        if (errorData.email) {
          let emailInput = this.$refs.email;

          emailInput.classList.add("border-red-500");
          errorMailParagraf.textContent = errorData.email;
        }

        if (errorData.password) {
          let passwordInput = this.$refs.password;
          let passwordConfirmationInput = this.$refs.password_confirmation;

          passwordInput.classList.add("border-red-500");
          passwordConfirmationInput.classList.add("border-red-500");
          errorPasswordParagraf.textContent = errorData.password;
          errorPasswordConfirmationParagraf.textContent = errorData.password;
        }
      }
    },
  },
};
</script>
