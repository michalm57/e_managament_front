<template>
  <nav class="bg-white bg-red-200 dark:bg-gray-900 bg-slate-50 mb-10">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/" class="flex items-center">
        <img
          src="https://images.freeimages.com/images/previews/09e/moon-art-1641879.png"
          class="h-8 mr-3"
          alt="Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >E-Managament</span
        >
      </router-link>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 border-gray-100 md:flex-row md:space-x-8"
        >
          <li>
            <router-link
              li
              v-if="user"
              to="/"
              href="#"
              class="block text-gray-900 md:hover:text-red-400"
              aria-current="page"
              :class="{ 'text-red-400': currentRouteName === 'HomePage' }"
            >
              Home</router-link
            >
          </li>
          <li v-if="user">
            <a
              href="javascript:void(0)"
              class="block text-gray-900 md:hover:text-red-400"
              aria-current="page"
              @click="handleClick"
            >
              Logout</a
            >
          </li>
          <li v-if="!user">
            <router-link
              to="/login"
              class="block text-gray-900 md:hover:text-red-400"
              :class="{ 'text-red-400': currentRouteName === 'LoginPage' }"
              >Login</router-link
            >
          </li>
          <li v-if="!user">
            <router-link
              to="/sign-up"
              href="#"
              class="block text-gray-900 md:hover:text-red-400"
              :class="{ 'text-red-400': currentRouteName === 'SignUpPage' }"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
      <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-gray-500 hover:text-red-400"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="hidden mobile-menu">
        <ul>
          <li class="active">
            <router-link
              li
              v-if="user"
              to="/"
              href="#"
              class="block text-sm px-2 py-4 text-white font-semibold"
              aria-current="page"
              :class="{ 'text-red-400': currentRouteName === 'HomePage' }"
            >
              Home</router-link
            >
          </li>
          <li v-if="user">
            <a
              href="javascript:void(0)"
              class="block text-sm px-2 py-4 transition duration-300"
              aria-current="page"
              @click="handleClick"
            >
              Logout</a
            >
          </li>
          <li v-if="!user">
            <router-link
              to="/login"
              class="block text-sm px-2 py-4 transition duration-300"
              :class="{ 'text-red-400': currentRouteName === 'LoginPage' }"
              >Login</router-link
            >
          </li>
          <li v-if="!user">
            <router-link
              to="/sign-up"
              href="#"
              class="block text-sm px-2 py-4 transition duration-300"
              :class="{ 'text-red-400': currentRouteName === 'SignUpPage' }"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBarComponent",
  data() {
    return {
      currentRoute: "",
    };
  },
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    const initializeMenu = () => {
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    };

    initializeMenu();
  },
};
</script>
