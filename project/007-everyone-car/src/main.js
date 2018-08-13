import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "./main.css";


import Vue from 'vue';
import Root from './root.vue';
import VueRouter from 'vue-router';
import session from './lib/session'



import Home from './page/home.vue';
import Login from './page/login.vue';
import SignUp from './page/signUp.vue';
import Publish from './page/publish.vue';
import SearchResult from './page/searchResult.vue';
import Detail from './page/detail.vue';

import AdminBase from './page/admin/base.vue';
import AdminUser from './page/admin/user.vue';
import AdminVehicle from './page/admin/vehicle.vue';
import AdminBrand from './page/admin/brand.vue';
import AdminModel from './page/admin/model.vue';
import AdminSeries from './page/admin/series.vue';
import AdminReport from './page/admin/report.vue';

import AdminLocation from './page/admin/location.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const RouterConfig = {
    routes: [{
            path: '/',
            component: Home,
            meta: {
                title: '首页'
            }

        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: '登入页'
            }
        },
        {
            path: '/signUp',
            component: SignUp,
            meta: {
                title: '注册页'
            }
        },
        {
            path: '/publish',
            component: Publish,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/searchResult',
            component: SearchResult,
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
            path: '/admin',
            component: AdminBase,
            children: [{
                    path: 'user',
                    component: AdminUser,
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: 'vehicle',
                    component: AdminVehicle,
                    meta: {
                        title: '上架管理'
                    }
                },
                {
                    path: 'location',
                    component: AdminLocation
                },
                {
                    path: 'brand',
                    component: AdminBrand,
                    meta: {
                        title: '品牌管理'
                    }
                },
                {
                    path: 'model',
                    component: AdminModel,
                    meta: {
                        title: '车型管理'
                    }
                },
                {
                    path: 'series',
                    component: AdminSeries,
                    meta: {
                        title: '车系管理'
                    }
                },
                {
                    path: 'report',
                    component: AdminReport,
                    meta: {
                        title: '检测报告'
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
    if (goAdmin && !session.loginedIn()) {
        alert('请先登入');

        next('/login');
        return
    } else next();
    document.title = to.meta.title;
});

new Vue({
    render: h => h(Root),
    router: router
}).$mount('#root');