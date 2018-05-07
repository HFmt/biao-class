
let el = require('./element.js')
  , send = require('./send.js')
  ;  

function sear_user(keyword, config) {
    let def
      , url
      ;

    def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, config);
    el.ready_prompt_state();

    url = 'https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit ;
    send.send('get', url, function (data) {
        el.render_user_list(data);
        el.end_prompt_state(config.page, data);
        console.log(url);
    },config);
   
}




module.exports = {
    sear_user: sear_user,
}