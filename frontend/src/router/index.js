import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SupportView.vue"),
  },
  {
    path: "/contactus",
    name: "contactus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactusView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthView.vue"),
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
