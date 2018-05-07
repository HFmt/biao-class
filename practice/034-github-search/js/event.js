/*事件处理*/

let el = require('./element.js')
  , search = require('./search.js')
  , keyword
  ;


function add_events() {
    detect_submit();
    detect_next_page();
}

/*监听搜索表达事件*/
function detect_submit() {
    el.form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(el.replace_value()){
            console.log(1)
            return;
        }
        el.page = 1;
        el.user_list.innerHTML='';
        keyword= el.input.value;   
        search.sear_user(keyword);
    });
}

function detect_next_page() {
    el.next.addEventListener('click', function () {
        let config = {
            page: ++el.page,
            limit: el.limit,
        }
        search.sear_user(keyword, config)
    });
}

module.exports = {
    add_events: add_events,
}