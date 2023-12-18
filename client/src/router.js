import { createRouter, createWebHistory } from "vue-router";
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
