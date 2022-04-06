import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import HomeView from "./views/home-view.vue";
import RegisterView from "./views/register-view.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/register"
    },
    {
      path: "/home",
      component: HomeView
    },
    {
      path: "/register", 
      component: RegisterView
    },
    {
      path: "/logout", 
      component: RegisterView
    },

  ]
});
