import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("./views/home/index.vue"),
      children: [
        {
          path: "films",
          component: () => import("./views/home/films.vue")
        },
        {
          path: "preference",
          component: () => import("./views/home/preference.vue")
        },
        {
          path: "cinemas",
          component: () => import("./views/home/cinemas.vue")
        },
        {
          path: "center",
          component: () => import("./views/home/center.vue")
        },
        {
          path: "",
          redirect: "/films"
        }
      ]
    },
    {
      path: "/film/:filmId",
      name: "film",
      component: () => import("./views/film/index.vue")
    },
    {
      path: "/city",
      component: () => import("./views/city/index.vue")
    },
    {
      path: "login",
      component: () => import("./views/login/index.vue")
    },
    {
      path: "card",
      component: () => import("./views/user/card.vue"),
      meta: {
        //isLogined ,这个路由要进去，必须要登录完成才行
        isLogined: true
      }
    },
    {
      path: "*",
      redirect: "/films"
    }
  ]
});
// // 全局前置守卫实现路由拦截功能
// router.beforeEach((to, from, next) => {
//   // 又要登录，而没有登录状态的时候，
//   if (to.meta.isLogined && !store.state.user.userInfo) {
//     return next({
//       path: "/login",
//       query: {
//         redirect: to.fullPath
//       }
//     });
//   }

//   next();
// });
