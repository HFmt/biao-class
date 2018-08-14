import "normalize.css";
import "./main.css";

import iView from 'iview';
import 'iview/dist/styles/iview.css';


import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
Vue.config.productionTip = false;

import Home from "./page/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";

Vue.use(VueRouter);
Vue.use(iView, {
  transfer: true,
  size: 'default'
});

const routerConfig = {
  routes: [{
      path: '/',
      component: Home
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