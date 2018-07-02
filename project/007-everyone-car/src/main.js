import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "./main.css";

import VueRouter from 'vue-router';

import Vue from 'vue';
import Root from './root.vue';



import Home from './page/home.vue';
import Login from './page/login.vue';
import SignUp from './page/signUp.vue';
import SearchResult from './page/searchResult.vue';
import Detail from './page/detail.vue';

import AdminBase from './page/admin/base.vue';
import AdminUser from './page/admin/user.vue';
import AdminVehicle from './page/admin/vehicle.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const RouterConfig = {
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signUp',
      component: SignUp
    },
    {
      path: '/searchResult',
      component: SearchResult
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/admin',
      component: AdminBase,
      children: [
        {
          path: 'user',
          component: AdminUser
        },
        {
          path: 'vehicle',
          component: AdminVehicle
        }
      ]
    },
  ]
}

const router = new VueRouter(
  RouterConfig
)

new Vue({
  render: h => h(Root),
  router: router
}).$mount('#root');