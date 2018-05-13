
/*定义页面中元素*/

let form = document.getElementById('search-form')
    , input = document.getElementById('search-input')   
    , user_list = document.getElementById('user-list')
    , placeholer = document.getElementById('placeholer')
    , pagination_wrap = document.getElementById('pagination-wrap')
    , history_list = document.getElementById('history-list')
    , config = {page: 1, limit: 5}
    , page_amount = null
    ;

let output = {
    form :form 
  , input :input   
  , history_list: history_list
  , user_list :user_list  
  , placeholer :placeholer  
  , pagination_wrap :pagination_wrap  
  , config:config
  , ready_prompt_state: ready_prompt_state
  , end_prompt_state: end_prompt_state
  , reset_page: reset_page
  , reset_user_list: reset_user_list
  }




// 设置 page_amount （总页数）
function set_page_amount(data) {
  return page_amount = Math.ceil(data.total_count / config.limit);
}

// 返回 page_amount （总页数）
function get_page_amount(){
  return page_amount;
}


//搜索前状态显示
function ready_prompt_state() {
  placeholer.hidden = true;
}

//搜索后状态显示
function end_prompt_state(page, amount) {
  pagination_wrap.hidden = false;
  placeholer.hidden = false;
}


//重置页码页码
function reset_page() {
  return config.page = 1;
}

//重置搜索列表
function reset_user_list() {
  user_list.innerHTML = '';
}

module.exports = output;
