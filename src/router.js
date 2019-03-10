import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Main/Home.vue";
Vue.use(Router);
const router = new Router({
  mode: "hash",
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
      component: () => import("./views/Login.vue")
    },
    {
      path: "/401",
      component: () => import("./views/401.vue")
    },
    {
      path: "/403",
      component: () => import("./views/403.vue")
    },
    {
      path: "/500",
      component: () => import("./views/NoFound.vue")
    },
    {
      path: "*",
      component: () => import("./views/NoFound.vue")
    }
  ]
});
router.beforeEach(function(to, from, next) {
  // let token = localStorage.getItem("token") || "";
  // if (to.path != "/login" && !token) {
  //   next("/login");
  // } else {
  //   next();
  // }
  next();
});
export default router;
