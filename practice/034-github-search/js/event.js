/*事件处理*/


let el = require('./element.js')
  , search = require('./search.js')
  , page = 1
  , limit = 10
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
        keyword= el.input.value;
        console.log('page',page, 'limit',limit)
        search.find_user(keyword)
    });
}

function detect_next_page() {
    el.next.addEventListener('click', function () {

        let config = {
            page: page++,
            limit: limit,
        }
        console.log('page',page, 'limit',limit)
        search.find_user(keyword, config)
    });
}

module.exports = {
    add_events: add_events
}