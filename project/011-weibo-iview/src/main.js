import "normalize.css";
import "./main.css";
import "./rest.css";
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";


import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

import Home from "./page/Home";
import UserPage from "./page/UserPage";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";

Vue.use(VueRouter);
Vue.use(iView);


const routerConfig = {
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/userPage',
      component: UserPage
    },
    {
      path: '/signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      component: SignUp
    },
  ]
};

const router = new VueRouter(
  routerConfig
)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')