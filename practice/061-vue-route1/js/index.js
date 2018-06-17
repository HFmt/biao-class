
const Home = Vue.component('home', {
    template : 
    `
        <div>
            <h2>首页</h2>
            <router-link 
        </div>
    `
    ,
    data() { 
        return {
            acticleList:[]
        }
    } ,
    methods: {
        read() {
            http.post('article/read', {only:['title', 'id']})
        }
    }
});












new Vue({
    el: '.root',
    router: new VueROuter({
        routers: [
            { path: '/', component: Home},
            { path: 'aritcle/new', component: ArticleNew},
            { path: 'aritcle/:id', component: ArticleDetail},

        ]
    })
});