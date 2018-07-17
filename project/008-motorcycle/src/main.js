
import 'normalize.css'
import './main.css';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';


const configRouter = {
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/SignUp',
      component: SignUp
    },
  ]
}

const router = new VueRouter( configRouter);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')