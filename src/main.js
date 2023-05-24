import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers.js";
import './axios.js'

import "./assets/style.css";

createApp(App).use(router).mount("#app");
