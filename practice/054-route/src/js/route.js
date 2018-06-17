
let instance;

class Route{
    constructor(config){
        this.current = {};  // 赋值为空对象，避免报错

        this.state = Object.assign({}, config);

        this.initRouteTpl();

        this.detectHashChange();
    }

    // 直接加载
    initRouteTpl() {
        // if(!location.hash)
        //     return;
        
        let routesName = this.parseHash(location.hash);
        if(!routesName)
            routesName = this.state.default;
        this.goRoutePath(routesName);
    }

    detectHashChange() {
        window.addEventListener('hashchange', () => {
            //将当前浏览器 hash 记录在 this.current.hash, 方便后续调用
            this.current.hash = location.hash;
            let routesName = this.parseCurrentHash();
            this.goRoutePath(routesName);
        });
    }

    //返回当前解析后的地址栏 hash
    parseCurrentHash() {
        return this.parseHash(this.current.hash);
    }

    //  去除多余的符号: #/xxx => xxx
    parseHash(hash) {
        hash = trim(hash, '#/');
        let re = new RegExp('^#?\/?'+ hash + '\/?$');
        for(let key in this.state.routes){
            let item = this.state.routes[key];
            if (re.test(item.path))
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
        console.log('el:', el);
        
        // if (location.hash == el)
        if (!element)
            return
        element.hidden = true;
        element.innerHTML = '';
    }

    renderCurrentTpl() {
        return this.renderTpl(this.current);
    }

    // 通过路由渲染 tpl
    renderTpl(route) {
        let element = document.getElementById(route.el);        
        //判断是否缓存
        if(element)
            element.hidden = false;
        if (route._tpl){
            this.compile(route)
            // element.innerHTML = route._tpl;
            return;
        }
        this.getTpl(route.tplUrl, (tpl) => {

            //缓存 tpl
            route._tpl = tpl;

            this.compile(route)
        });
    }

    compile(route) {
        let element = document.getElementById(route.el);
        element.innerHTML = parseElement(route._tpl, route.data);
    }

    getTpl(url, onSucceed){
        
        let http = new XMLHttpRequest();
        http.open('get', url);
        http.send();

        http.addEventListener('load', () => {
            onSucceed(http.responseText);
        });
    }

    setData(routeName, keys, val) {
        let layers = keys.split('.');

        let data = this.state.routes[routeName].data;

        if(!data)
            data = this.state.routes[routeName].data = {};

        for(let i = 0; i<layers.length; i++) {
            let key = layers[i];
            let isLast = i+1 == layers.length;            
            let nest = data;

            if(isLast){
                nest[key] = val;
            } else {
                if(!nest[key])
                    nest[key] = {};
                nest = nest[key];
            }
        }
        this.compile(this.state.routes[routeName]);
    }
}



const init = (config) => {
    if(!instance)
        instance = new Route(config);
}

const data = {
    default: 'about',
    //路由
    routes: {
        home: {
            path: '#/home',
            el: 'home',
            tplUrl: 'src/tpl/home.html',
            data: {
                name: 'asam'
            }
        },
        about: {
            path: '#/about',
            el: 'about',
            tplUrl: 'src/tpl/about.html',
            data: {
                name: '徐锦樟',
                age: 0,
            }
        }
    },

    //访问前后阶段可以执行自定义函数(全局钩子，可以在单路由作局部钩子)
    hook: {
        before: function () {
            
        },
        after: function () {
            
        }
    }
}

const trim = (str, capList) => {
    let arr = capList.split('');

    arr.forEach( (cap) => {
        if(str.startsWith(cap)) {            
            str = str.substring(1);
            str = trim(str, cap);
        }
        
        if(str.endsWith(cap)){
            str = str.substring(1, str.length + 1);
            str = trim(str, cap);
        }
    });

    return str;
}


init(data);

let count = 1;

(function () {
    instance.removePreviousTpl('about');
    setInterval(() => {
        instance.setData('about', 'age', count);
        count++;
    },1000);
})();