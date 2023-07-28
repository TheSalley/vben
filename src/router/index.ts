import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { basicRoutes } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
});

export function setupRouter(app: App) {
  app.use(router);
}
