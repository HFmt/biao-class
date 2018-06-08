
let instance;

class Route{
    constructor(config){
        this.current = {};  // 赋值为空对象，避免报错

        this.state = Object.assign({}, config);

        this.detectHashChange();
    }

    detectHashChange() {
        window.addEventListener('hashchange', () => {
            //将当前浏览器 hash 记录在 this.current.hash, 方便后续调用
            this.current.hash = location.hash;

            let routesName = this.parseCurrentHash();
            console.log(routesName)
            this.goRoutePath(routesName);
        });
    }

    //返回当前解析后的地址栏 hash
    parseCurrentHash() {
        return this.parseHash(this.current.hash);
    }

    //  去除多余的符号: #/xxx => xxx
    parseHash(currentHash) {
        // return currentHash.split('#')[1];
        currentHash = trim(currentHash, '#/');

        for(let key in this.state.routes){
            let item = this.state.routes[key];
            if (item.path == currentHash)
                return key;
        }
    }

    goRoutePath(routesName) {
        let currentRoute = this.state.routes[routesName];

        let previous = this.current;

        //当前路由地址 : home{}
        this.current = currentRoute;

        this.removePreviousTpl(previous.el);

        this.renderCurrentTpl();
    }

    //删除之前渲染的 tpl
    removePreviousTpl(el) {
        let element = document.getElementById(el);
        if (!element)
            return
        element.innerHTML = '';
    }

    renderCurrentTpl() {
        return this.renderTpl(this.current);
    }

    // 通过路由渲染 tpl
    renderTpl(route) {
        
        this.getTpl(route.tplUrl, (tpl) => {
            document.getElementById(route.el).innerHTML = tpl;
        });
    }

    getTpl(url, onSucceed){
        
        let http = new XMLHttpRequest();
        http.open('get', url);
        http.send();

        http.addEventListener('load', () => {
            onSucceed(http.responseText);
        });
    }
}

function init(config) {
    if(!instance)
        instance = new Route(config);
}

let data = {
    //路由
    routes: {
        home: {
            path: '#/home',
            el: 'home',
            tplUrl: 'src/tpl/home.html'
        },
        about: {
            path: '#/about',
            el: 'about',
            tplUrl: 'src/tpl/about.html'
        },
    },

    //访问前后阶段可以执行自定义函数(全局钩子，可以在单路由作局部钩子)
    hook: {
        before: function () {
            
        },
        after: function () {
            
        }
    }
}

function trim(str, capList) {
    let arr = capList.split('');

    arr.forEach(function (cap) {
        if(str.starsWith(cap)){
            str = str.substr(1);
            str = trim(str, cap);
        }

        if(str.endWith(cap)){
            str = str.substr(str.length);
            str = trim(str, cap)
        }
    })
}


init(data);