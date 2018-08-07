import "font-awesome/css/font-awesome.css"
import "normalize.css"
import "./rest.css"
import "./main.css"

import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'


import Home from "./page/Home"
import Search from "./page/Search"
import Detail from "./page/Detail"
import Cart from "./page/Cart"
import UserOrder from "./page/UserOrder"


import AdminBase from "./page/admin/Base"
import User from "./page/admin/User"
import Pet from "./page/admin/Pet"
import Order from "./page/admin/Order"
import Category from "./page/admin/Category"
import Breed from "./page/admin/Breed"



Vue.use(VueRouter);

Vue.config.productionTip = false


const RouterConfig = {
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/search/:category',
      component: Search
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/userOrder',
      component: UserOrder
    },
    {
      path: '/admin',
      component: AdminBase,
      children: [{
          path: 'user',
          component: User
        },
        {
          path: 'pet',
          component: Pet
        },
        {
          path: 'order',
          component: Order
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'breed',
          component: Breed
        },
      ]
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