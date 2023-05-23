import SignUpPage from "./components/Auth/SignUpPage.vue";
import HomePage from "./components/Dashboard/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "SignUpPage",
    component: SignUpPage,
    path: "/sign-up",
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
