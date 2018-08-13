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
        title: '首页'
      }
    },
    {
      path: '/search/:category',
      component: Search,
      meta: {
        title: '搜索页'
      }
    },
    {
      path: '/detail/:id',
      component: Detail,
      meta: {
        title: '详情页'
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        title: '我的购物车'
      }
    },
    {
      path: '/userOrder',
      component: UserOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/setting',
      component: Setting,
      meta: {
        title: '设置'
      }
    },
    {
      path: '/setting',
      component: Setting,
      children: [{
          path: 'user',
          component: User,
          meta: {
            title: '设置'
          }
        },
        {
          path: 'pet',
          component: Pet,
          meta: {
            title: '设置'
          }
        },
        {
          path: 'order',
          component: Order,
          meta: {
            title: '设置'
          }
        },
      ]
    },
    {
      path: '/admin',
      component: AdminBase,
      children: [{
          path: 'user',
          component: User,
          meta: {
            title: '管理页'
          }
        },
        {
          path: 'pet',
          component: Pet,
          meta: {
            title: '管理页-宠物信息'
          }
        },
        {
          path: 'order',
          component: Order,
          meta: {
            title: '管理页-用户订单'
          }
        },
        {
          path: 'category',
          component: Category,
          meta: {
            title: '管理页-宠物分类'
          }
        },
        {
          path: 'breed',
          component: Breed,
          meta: {
            title: '管理页-宠物品种'
          }
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
    modalList.signUp = false;
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