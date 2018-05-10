
/*定义页面中元素*/

let form = document.getElementById('search-form')
    , input = document.getElementById('search-input')   
    , previous = document.getElementById('previous')   
    , next = document.getElementById('next')   
    , user_list = document.getElementById('user-list')
    , placeholer = document.getElementById('placeholer')
    , pagination_start = document.getElementById('pagination-start')
    , pagination = document.getElementById('pagination')
    , pagination_end = document.getElementById('pagination-end')
    , history_list = document.getElementById('history-list')
    , config = {page: 1, limit: 5}
    , page_amount = null
    ;

let output = {
    form :form 
  , input :input   
  , previous :previous  
  , history_list: history_list
  , next :next  
  , user_list :user_list  
  , placeholer :placeholer  
  , pagination_start :pagination_start  
  , pagination :pagination  
  , pagination_end :pagination_end  
  , config:config
  , max_page: 7

  , render_user_list: render_user_list
  , ready_prompt_state: ready_prompt_state
  , end_prompt_state: end_prompt_state
  , set_page_amount: set_page_amount
  , get_page_amount: get_page_amount
  , reset_page: reset_page
  , reset_user_list: reset_user_list
  , show_start_end_page_btn: show_start_end_page_btn
  }

    


/*渲染用户列表*/
function render_user_list(user_list_result) {
  let html = '';

  user_list_result.items.forEach(function (user) {
    html+=
      `<div class="user">
        <a class="avatar" target="_blank" href="${user.html_url}">
          <img src="${user.avatar_url}">
        </a>
        <div class="info">
          <div class="username">${user.login}</div>
          <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
        </div>
      </div>
      `
    ;
    user_list.innerHTML = html;
  });
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
  if(page * config.limit < amount.total_count){
    if(config.page > 1){
      previous.hidden = false;
    }
    else{
      previous.hidden = true;
      next.hidden = false;
      placeholer.hidden = true;
    }
  }
  else if(Math.ceil(amount.total_count/config.limit) == 1){
    previous.hidden = true;
    next.hidden = true;
    placeholer.hidden = false;
  }
  else{
    previous.hidden = false;
    next.hidden = true;
    placeholer.hidden = false;
  }
}


//重置页码页码
function reset_page() {
  return config.page = 1;
}

//重置搜索列表
function reset_user_list() {
  user_list.innerHTML = '';
}

//显示首页和尾页按钮
function show_start_end_page_btn() {
    pagination_start.hidden = false;
    pagination_end.hidden = false;
}

module.exports = output;
