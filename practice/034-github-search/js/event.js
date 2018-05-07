/*事件处理*/

let el = require('./element.js')
  , search = require('./search.js')
  , time_out
  , keyword
  ;


function add_events() {
    detect_submit();
    detect_next_page();
}

/*监听搜索表单事件*/
function detect_submit() {
    el.form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearInterval(time_out);
        time_out = setTimeout(function () {
            keyword = el.input.value;
            if(el.replace_value(keyword)){
                return;
            }
            el.reset_page();
            el.reset_user_list();  
            search.sear_user(keyword);
        },400);
    });
}

function detect_next_page() {
    // el.next.addEventListener('click', function () {
    //     let config = {
    //         page: ++el.page,
    //         limit: el.limit,
    //     }
    //     search.sear_user(keyword, config);
    // });
}

module.exports = {
    add_events: add_events,
}