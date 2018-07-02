import './main.css'

import Vue from 'vue'

import VueRouter from 'vue-router'
import iView from 'iview'

import 'iview/dist/styles/iview.css' // 使用 CSS


import Layout from './components/Layout.vue'
import Grid from './components/Grid.vue'

import App from './App.vue'


Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false

const RouterConfig = {
  routes: [
        {
          path: '/Layout',
          component: Layout,
        },
        {
          path: '/Grid',
          component: Grid,
        },
  ]
}

const router = new VueRouter(
  RouterConfig
)


new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')
