


let el = require('./element.js')
  , send = require('./send.js')
  ;  

function find_user(keyword, config) {
    let def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, config);
    send.send('get','https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit, function (data) {
        el.render_user_list(data.items);
    },config);
}


module.exports = {
    find_user: find_user
}