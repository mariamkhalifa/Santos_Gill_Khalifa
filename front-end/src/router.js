import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import HomeView from "./views/home-view.vue";
import LoginView from "./views/login-view.vue";
import RegisterView from "./views/register-view.vue";
import WeatherView from "./views/weather-view.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: HomeView
    },
    {
      path: "/weather",
      component: WeatherView
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
