/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import Base from "@/js/Base";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;

Vue.use(Base);
if (process.env.NODE_ENV == "dev" || process.env.NODE_ENV == "local") {
  Vue.config.devtools = true;
} else {
  Vue.config.debug = false;
  Vue.config.devtools = false;
}
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
