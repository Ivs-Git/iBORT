import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/trending",
    name: "Trending",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" ahora es trending */ "../views/Trending.vue");
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: function () {
      return import("../views/SignIn.vue");
    },
  },
  {
    path: "/communities",
    name: "Communities",
    component: function () {
      return import("../views/Communities.vue");
    },
  },
  {
    path: "/articulo",
    name: "Articulo",
    component: function () {
      return import("../views/Articulo.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
