import Vue from "vue";
import Vuex from "vuex";
import film from "./modules/films";
import city from "./modules/city";
import user from "./modules/user";
import citySite from "./modules/citySite";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    film,
    city,
    user,
    citySite
  }
});
