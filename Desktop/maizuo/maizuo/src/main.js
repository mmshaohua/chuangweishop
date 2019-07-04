import Vue from "vue";
import "./plugins/axios";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./assets/styles/base.scss";
import { Swipe, SwipeItem, Search, NavBar } from "vant";
import "vant/lib/index.css";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .use(NavBar);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
