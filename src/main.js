import { createApp } from "vue";
import { store } from './vuex.js';
import App from "./App.vue";
import router from "./routers.js";
import './axios.js'

import "./assets/style.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
