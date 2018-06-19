const Home = Vue.component('home', {
    template: `
    <div>
        <h2>Home</h2>
        <router-link  v-for="item in articleList" :key="item.id" :to="'article/' + item.id">
        {{item.title}}
        </router-link>
    </div>
    `,
    data() {
        return {
            articleList: []
        };
    },
    methods: {
        read () {
            http.post('article/read', {only: ['title', 'id']})
                .then( (res) => {
                    this.articleList = res.data.data;
            });
        }
    },
    mounted() {
        this.read();
    }
});

const ArticleDetail = Vue.component('article-detail', {
    template: `
    <div>
        <h1>{{current.title}}</h1>
        <h2>{{current.author}}</h2>
        <div>{{current.content}}</div>
    </div>
    `,
    data() {
        return {
            current: {}
        };
    },
    mounted() {
        http.post('article/find', { id: this.$route.params.id })
            .then((res) => {
                this.current = res.data.data;
        });
    }
});

const ArticleNew = Vue.component('article-new', {
    template: `
    <div>
        <h1>New</h1>
        <form @submit="onSubmit($event)">
            <input v-model="current.title" placeholder="title"><br>
            <input v-model="current.author" placeholder="author"><br>
            <textarea v-model="current.content" placeholder="content"></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
    `,
    data () {
        return {
            current: {}
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            
            http.post('article/create', this.current)
            .then( (res) => {
                if(res.data.succeed)
                    this.current = {};
            });
        }
    }
});


new Vue({
    el: '#root',
    router: new VueRouter({
        routes: [
            {path: '/', component: Home},
            {path: '/article/new', component: ArticleNew},
            {path: '/article/:id', component: ArticleDetail},
        ]
    })
});

