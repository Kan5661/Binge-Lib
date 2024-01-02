import { createRouter, createWebHistory } from "vue-router";
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";
import Register from "./screens/Register.vue";
import { authMiddleware } from "./store/authMiddleware";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    beforeEnter: authMiddleware
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
