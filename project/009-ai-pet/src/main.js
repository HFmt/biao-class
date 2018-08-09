import "font-awesome/css/font-awesome.css"
import "normalize.css"
import "./rest.css"
import "./main.css"

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

import session from './lib/session'



import Home from "./page/Home"
import Search from "./page/Search"
import Detail from "./page/Detail"
import Cart from "./page/Cart"
import UserOrder from "./page/UserOrder"
import Setting from "./page/setting/Base"


import AdminBase from "./page/admin/Base"
import User from "./page/admin/User"
import Pet from "./page/admin/Pet"
import Order from "./page/admin/Order"
import Category from "./page/admin/Category"
import Breed from "./page/admin/Breed"
import focus from "./directive/focus"
import signInRoot from './hub/signInRoot'


Vue.use(VueRouter);

Vue.config.productionTip = false


// Vue.filter('only_day', function (value) {
//   if (!value)
//     return value;

//   return value.split(' ')[0];
// });

// Vue.filter('percentage', function (value) {
//   if (!value)
//     return 0;
//   return (value * 100).toFixed(2) + '%';
// });

const RouterConfig = {
    routes: [{
        path: '/',
        component: Home,
        meta: {
          title: '首页-pet'
        }
      },
      {
        path: '/search/:category',
        component: Search,
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
        path: '/setting',
        component: Setting
      },
      {
        path: '/setting',
        component: Setting,
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
        ]
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
    );

    router.beforeEach((to, from, next) => {
      let goAdmin = to.fullPath.startsWith('/admin/');
      let modalList = signInRoot.modalList();

      if (goAdmin && !session.signUped()) {
        alert('请先登入');
        modalList.modal = true;
        modalList.signIn = true;
        next(false);
        return
      } else next()
      document.title = to.meta.title;
    });


    new Vue({
      directives: {
        focus
      },
      render: h => h(App),
      router
    }).$mount('#app')