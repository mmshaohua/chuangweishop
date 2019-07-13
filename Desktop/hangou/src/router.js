import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("./views/home/index.vue"),
      children: [
        {
          path: "/wap",
          component: () => import("./views/home/wap.vue")
        },
        {
          path: "/specital",
          component: () => import("./views/home/specital.vue")
        },
        {
          path: "/member",
          component: () => import("./views/home/member.vue")
        },
        {
          path: "",
          redirect: "/wap"
        }
      ]
    },
    {
      path: "*",
      redirect: "/wap"
    }
  ]
});
