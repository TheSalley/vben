import { createApp } from "vue";

import App from "./App.vue";
import { router, setupRouter } from "@/router";
import "@/assets/css/style.css"

const app = createApp(App);

app.mount("#app");
setupRouter(app);
