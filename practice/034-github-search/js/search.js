
let el = require('./element.js')
  , send = require('./send.js')
  ;  

function sear_user(keyword, config) {
    let def
      , url
      ;
    el.ready_search_state();
    def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, config);

    url = 'https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit ;

    send.send('get', url, function (data) {
        el.end_search_state(data);
    },config);
}




module.exports = {
    sear_user: sear_user,
}