import SignUpPage from "./components/Auth/SignUpPage.vue";
import LoginPage from "./components/Auth/LoginPage.vue";
import HomePage from "./components/Dashboard/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "SignUpPage",
    component: SignUpPage,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
