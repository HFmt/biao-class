import "font-awesome/css/font-awesome.css"
import "normalize.css"
import "./rest.css"
import "./main.css"

import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'


import Home from "./page/Home"
import Detail from "./page/Detail"

Vue.use(VueRouter);

Vue.config.productionTip = false


const RouterConfig = {
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    },
  ]
}

const router = new VueRouter(
  RouterConfig
)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')