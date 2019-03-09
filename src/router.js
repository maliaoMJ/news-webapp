import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Main/Home.vue";
import Login from "./views/login";
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/main/material"
    },
    {
      path: "/main",
      name: "main",
      component: Home,
      children: [
        {
          path: "/main/material",
          component: () => import("./views/Main/Material.vue")
        },
        {
          path: "/main/visitor",
          component: () => import("./views/Main/Visitor.vue")
        },
        {
          path: "/main/analyse",
          component: () => import("./views/Main/Analyse.vue")
        },
        {
          path: "/main/shop",
          component: () => import("./views/Main/Shop.vue")
        }
      ]
    },
    {
      path: "/shareMaterial",
      component: () => import("./views/ShareMaterial.vue")
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
router.beforeEach(function(to, from, next) {
  let token = localStorage.getItem("token") || "";
  if (to.path != "/login" && !token) {
    next("/login");
  } else {
    next();
  }
});
export default router;
