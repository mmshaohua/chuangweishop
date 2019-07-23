import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import home from "./home";
import mine from "./mine";
import general from "./general";
import classify from "./classify";
import cart from "./cart";
export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("../views/goods/all"),
      children: [...home, ...mine, ...general, ...classify, ...cart]
    },
    {
      path: "/search",
      component: () => import("../views/goods/Home/search")
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
