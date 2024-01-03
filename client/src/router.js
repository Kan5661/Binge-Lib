import { createRouter, createWebHistory } from "vue-router";
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";
import Register from "./screens/Register.vue";
import Settings from "./screens/Settings.vue";
import Profile from "./screens/Profile.vue";
import Browse from "./screens/Browse.vue";
import Search from "./screens/Search.vue";
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
  {
    path: "/settings",
    component: Settings,
    name: "Settings",
    beforeEnter: authMiddleware
  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",
    beforeEnter: authMiddleware
  },
  {
    path: "/browse",
    component: Browse,
    name: "Browse",
    beforeEnter: authMiddleware
  },
  {
    path: "/search",
    component: Search,
    name: "Search",
    beforeEnter: authMiddleware
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
