import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import Vuex from 'vuex';
import A from "./page/A"
import B from "./page/B"


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false


const RouterConfig = {
  routes: [
    {
    path: '/a',
    component: A
  },
    {
    path: '/b',
    component: B
  },
]
}

const router = new VueRouter(
  RouterConfig
)

const store = new Vuex.Store({
  state: {
    count: 0,
    totle: 10,
    timer: null
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    totle(state) {
      return state.count * state.totle;
    }
  },
  actions: {
    incrementTimers(store) {
      store.dispatch('clearIncrementTimers');
      store.state.timer = setInterval(() => {
        store.commit('increment');
      }, 1000);
    },
    clearIncrementTimers(store) {
      clearInterval(store.state.timer)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
