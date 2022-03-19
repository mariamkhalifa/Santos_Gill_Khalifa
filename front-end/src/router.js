import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import LoginView from "./views/login-view.vue";
import RegisterView from "./views/register-view.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component:  LoginView
    },
    {
      path: "/register", 
      component: RegisterView
    }
  ]
});
