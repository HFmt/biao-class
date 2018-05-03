
let el2 = require('./element.js')
 
  ;  

function send(me, url, on_load) {
    let http = new XMLHttpRequest();
    http.open(me, url);
    http.send();
    http.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        on_load(data);
    });
}

function find_user(keyword, config) {
    let def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, config);
    send('get','https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit, function (data) {
        el2.render_user_list(data.items);
    },config);
}


module.exports = {
    find_user: find_user
}