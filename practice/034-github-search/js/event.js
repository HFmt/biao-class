/*事件处理*/

let el = require('./element.js')
  , search = require('./search.js')
  , time_out
  , keyword
  ;


function add_events() {
    detect_submit();
    detect_next_page();
    detect_previous_page();
    detect_start_page();
    detect_end_page();
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
    el.next.addEventListener('click', function(){
        console.log(1);
        el.config.page++;
        search.sear_user(keyword, el.config);
    });
}

function detect_previous_page() {
    el.previous.addEventListener('click', function () {
        if(el.config.page <= 1){
            return;
        }
        el.config.page--;
        console.log(el.config);
        search.sear_user(keyword, el.config);
    });
}

function detect_start_page() {
    el.pagination_start.addEventListener('click', function(){
        el.config.page = 1;
        search.sear_user(keyword, el.config);
    });
}

function detect_end_page() {
    el.pagination_end.addEventListener('click', function (){
        el.config.page = el.get_page_amount();
        search.sear_user(keyword, el.config);
    });
}



module.exports = {
    add_events: add_events,
}