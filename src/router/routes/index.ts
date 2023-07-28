import { PageEnum } from "@/enums/pageEnum";

// 根路由
export const RootRoute = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
};

// 登录路由
export const LoginRoute = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
};

// 基本路由
export const basicRoutes = [RootRoute, LoginRoute];
