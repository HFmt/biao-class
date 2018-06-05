import helper from "../util/helper";

let instance;

class Route {
    constructor(config) {
        this.param = {};
        this.current = {};
        this.loadConfig(config);

        this.detectHashChange();
        this.detectClick();

        this.goPage(window.location.hash, {force: true});
    }

    loadConfig(config) {
        this.default = { hook: {}}

        this.config = Object.assign({}, this.default, config);

        this.loadRouteConfig();
    }

    loadRouteConfig() {
        let routes = this.config.routes;

        for (let key in routes){
            let route = routes[key];
            let path = this.trimHash(route.path);
            let pathArr = path.split('#');

            pathArr.forEach( (segment, index) =>{
                let isParam = segment.startWith(':');
                let key = isParam ? segment.substring(1, segment.length) : segment;

                route.$segment = route.$segment || {};
                route.$segment[index] = {
                    name: key,
                    positon: index,
                    isParam: isParam
                };
            }); 
        }
    }

    trimHash(hash) {
        return helper.trim(hash, '#');
    }

    //浏览器路径改变事件
    detectHashChange() {
        window.addEventListener('hashchange', () => {
            this.goPage(window.location.hash);
        });
    }

    // 点击事件（代理）
    detectClick() {
        document.addEventListener('click', e => {

            //设置点击的条件标签
            switch (e.target.nodeName) {
                case 'A':
                    if(e.target.host)
                        return;
                    this.goPage(e.target.href);
                    break;
                
                default:
                    break;
            }
        });
    }

    //获取当前页面 this.current
    goPage(hash, opt = null) {
        this.hidePage('#not-found');
        if(this.config.hook.before())
            if (!this.config.hook.before())
                return;

        hash = hash || 'home';

        let _dufault = {
            force: false
        }

        opt = Object.assign({}, _dufault, opt);

        let oldPage = this.current,
            newPage = this.parseHash(hash);

        this.previous = oldPage;

        if (!newPage){
            if(this.config.hook.notFount)
                this.config.hook.notFount();
            this.showPage('#not-found');
            return;
        }

        //设置当前名
        this.current = newPage;

        if(!this.current.el)
            throw new ReferenceError(`please config route ${this.current.name} el`);

    }

    //显示链接页面
    showPage(path) {
        path = path || this.current;
        document.getElementById(path).hidden = false;
    }

    //隐藏所有页面
    hidePage(path) {
        let el = document.querySelectorAll(path);
        if(!el)
            return;
        el.hidden = true;
    }

    // 用 '#'分割传进的字符串成数组，并获取最后一个键值
    parseHash(hash) {
        hash = this.trimHash(hash);
        let routes = this.config.routes;
        let hashArr = hash.split('#');

        for (let name in routes){
            let route = routes[name];
            let $segment = route.$segment;
            let matched = true;

            if(Object.keys($segment).length != hashArr.length){
                matched = false;
                continue;
            }

            hashArr.forEach((segment, index) =>{
                let $segment = route.$segment[index];
                let $name = $segment.name;

                if (!$segment) {
                    matched = false;
                    return;
                }

                if ($segment.isParam) {
                    if (!route.param)
                        route.param = {};
                    route.param[$name] = segment;
                } else {
                    if ($name != segment) {
                        matched = false;
                        return;
                    }
                }
            });
        }
    }
}

function init(config) {
    if(!instance)
        instance = new Route(config);
}


// class Route {
//     constructor(config) {

//         this.current = this.parseHash(window.location.hash) || 'home'; //设置链接页面的默认值
//         this.pageList = document.querySelectorAll('.page');
//         this.detectHashChange();
//         this.detectClick();
//         this.showPage();
//     }

//     loadRouteConfig() {
//         let routeList = this.config.routes;

//         for (let key in routeList) {
//             let route = routeList[key];
//             let path = this.tri
//         }
//     }

//     //浏览器路径改变事件
//     detectHashChange() {
//         window.addEventListener('hashchange', () => {
//             this.goPage(window.location.hash);
//         });
//     }

//     // 点击事件（代理）
//     detectClick() {
//         document.addEventListener('click', e => {

//             //设置点击的条件标签
//             switch (e.target.nodeName) {
//                 case 'A':
//                     if (e.target.host)
//                         return;
//                     this.goPage(e.target.href);
//                     break;

//                 default:
//                     break;
//             }
//         });
//     }

//     //获取当前页面 this.current
//     goPage(path) {
//         let old_page = this.current,
//             new_page = this.parseHash(path);
//         if (old_page == new_page)
//             return;
//         else this.current = new_page;

//         this.hidePageAll();
//         this.showPage();
//     }

//     //显示链接页面
//     showPage(path) {
//         path = path || this.current;
//         document.getElementById(path).hidden = false;
//     }

//     //隐藏所有页面
//     hidePageAll() {
//         this.pageList.forEach(page => {
//             page.hidden = true;
//         });
//     }

//     // 用 '#'分割传进的字符串成数组，并获取最后一个键值
//     parseHash(hash) {
//         let hashArr = hash.split('#');
//         return hashArr[hashArr.length - 1];
//     }
// }

// function init(config) {
//     if (!instance)
//         instance = new Route(config);
// }


export default {
    init
};