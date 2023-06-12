import SignUpPage from "./components/Auth/SignUpPage.vue";
import LoginPage from "./components/Auth/LoginPage.vue";
import ForgotPasswordPage from "./components/Auth/ForgotPasswordPage.vue";
import ResetPasswordPage from "./components/Auth/ResetPasswordPage.vue";
import HomePage from "./components/Dashboard/HomePage.vue";
import ProjectsPage from "./components/Projects/ProjectsPage.vue";
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
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
    path: "/forgot",
  },{
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
    path: "/reset/:token",
  },
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },  
  {
    name: "ProjectsPage",
    component: ProjectsPage,
    path: "/projects",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
