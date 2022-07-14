import VueRouter from "vue-router";

import Collection from "../components/Collection";
import Home from "../components/Home";
import Square from "../components/Square";
import Setting from "../components/Setting";
import About from "../components/About";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/about",
      component: About,
      name: "about",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/square",
      component: Square,
      name: "square",
    },
    {
      path: "/collection",
      component: Collection,
      name: "collection",
    },
    {
      path: "/setting",
      component: Setting,
      name: "setting",
    },
  ],
});
