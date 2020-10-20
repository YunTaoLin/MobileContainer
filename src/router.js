import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Index.vue";
import test1 from "./views/test1.vue";
import test2 from "./views/test2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test1",
    name: "test1",
    component: test1,
  },
  {
    path: "/test2",
    name: "test2",
    component: test2,
  },
];
console.log(process.env.BASE_URL);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
