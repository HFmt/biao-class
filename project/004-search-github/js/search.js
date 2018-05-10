
let send = require('./send')
  , el = require('./element')
  , pagination = require('./pagination')
  ;

let output = {
    sear_user: sear_user
}

pagination.init({
    pagination: el.pagination
  , max_page: el.max_page
  , set_page_amount: el.set_page_amount
  , get_page_amount: el.get_page_amount
});

function sear_user(keyword, config) {
    let def
      , url
      ;

    def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, el.config);

    el.ready_prompt_state();

    url = 'https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit ;
    send.send('get', url, function (data) {
        el.render_user_list(data);
        el.end_prompt_state(config.page, data);
        pagination.render_pagination(config.page, data);
        el.show_start_end_page_btn();
    },config);
   
}

module.exports = output;