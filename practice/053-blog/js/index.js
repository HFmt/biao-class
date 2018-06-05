import artlcle  from "./api/artlcle";
import route  from "./route/route";

let config = {
    routes : {
        home: {
            path: '/home/a/b',
            el: '#home'
        },

        about: {
            path: '/about',
            el: '#about'
        },

        artlcle: {
            path: '/article/:author/:id', 
            el: '#article'
        },

        article_list: {
            path: '/article-list',
            el: '#article-list'
        },

        tag: {
            path: '/tag',
            el: '#tag'
        },
    },
    hook: {
        before: function () {
            return true;
        },
    }
}

route.init(config);
artlcle.read();