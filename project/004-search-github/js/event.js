
/*事件处理*/
let el = require('./element')
  , search = require('./search')
  , regular = require('./regular')
  , history = require('./history')
  , time_out
  , keyword
  ;


function add_events() {
    detect_submit();
    detect_next_page();
    detect_previous_page();
    detect_start_page();
    detect_end_page();
    detect_pageBtn()
    detect_input();
}

/*搜索表单事件*/
function detect_submit() {
    el.form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearInterval(time_out);
        time_out = setTimeout(function () {
            keyword = el.input.value;
            if(regular.replace_value(keyword)){
                return;
            }
            el.reset_page();
            el.reset_user_list();  
            history.add(el.input.value);
            history.show_histoty();
            search.sear_user(keyword);
        },400);
    });
}



//下一页事件
function detect_next_page() {
    el.next.addEventListener('click', function () {
        el.config.page++;
        search.sear_user(keyword, el.config);
    });
}

//上一页事件
function detect_previous_page() {
    el.previous.addEventListener('click', function () {
        if(el.config.page <= 1){
            return;
        }
        el.config.page--;
        search.sear_user(keyword, el.config);
    });
}

//首页事件
function detect_start_page() {
    el.pagination_start.addEventListener('click', function(){
        el.config.page = el.reset_page();
        search.sear_user(keyword, el.config);
    });
}

//尾页事件
function detect_end_page() {
    el.pagination_end.addEventListener('click', function (){
        el.config.page = el.get_page_amount();
        search.sear_user(keyword, el.config);
    });
}

//点击页面及显示隐藏 history-list 整合事件
function detect_pageBtn(){
    document.addEventListener('click', function (e){
        if (e.target.closest('#pagination')){
            el.config.page = parseInt(e.target.dataset.page);
            search.sear_user(keyword, el.config.page); 
        }
        if(!(e.target.closest('#search-form') || e.target.closest('#history-list')))
            history.hide_histoty();  
      });
}

// 导入 history 元素和事件 （回调）
history.init({
    el: el.history_list,
    input: el.input
   , click_history: click_history
 //   , click_delete: click_delete
 });
 
 // 点击 history 触发搜索事件
 function click_history(key) {
    search.sear_user(key);
 }
 
 // 点击 input 搜索框显示 history-list
 function detect_input(){
     el.input.addEventListener('click', function (e) {
        if(el.history_list.innerHTML == ''){
            history.hide_histoty();
            return;
        }
        history.show_histoty();
    });
 }
 



module.exports = {
    add_events: add_events,
}