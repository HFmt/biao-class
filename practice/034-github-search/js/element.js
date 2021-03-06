
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
  , page_amount = null
  , max_page = 5
  , config = {
    page: 1,
    limit: 5,
    }
  ;

    


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


function render_pagination(config_page, amount, fn) {

  pagination.innerHTML = '';

  set_page_amount(amount);
        let start_page 
          , middle = Math.ceil(max_page/2)
          , end_page = max_page
        ;
        
        if(config_page <= middle){
          start_page = 1;
          end_page = max_page;
        }

        else if(config_page >= page_amount - middle){
          start_page = page_amount - max_page;
          end_page = page_amount;
        }

        else{
          start_page = config_page - middle + 1;
          end_page = config_page + middle - 1;
        }

        if(start_page < 1){
          start_page = 1;
        }
        if(end_page > page_amount){
          end_page = page_amount;
        }

        for (let i = start_page; i<=end_page; i++){
          
          let btn = document.createElement('button');
          btn.innerText = i;
          pagination.appendChild(btn);

          if(config_page == i){
            btn.classList.add('active');
          }

          btn.addEventListener('click', (function make_function() {
            return function () {  
              config.page = i;
              fn(input.value, config_page);
            }
          })());
        }
}

function set_page_amount(amount) {
  return page_amount = Math.ceil(amount.total_count / config.limit);
  
}

function get_page_amount(){
  return page_amount;
}


function ready_prompt_state() {
  // next.hidden = true;
  placeholer.disabled = true;
}

function end_prompt_state(page, amount) {
  if(page * config.limit < amount.total_count){
    if(config.page > 1){
      previous.hidden = false;
      next.hidden = false;
      placeholer.hidden = true;
    }
    else{
      previous.hidden = true;
      next.hidden = false;
      placeholer.hidden = true;
    }
  }
  else{
    if(Math.ceil(amount.total_count/config.limit) == get_page_amount()){
      previous.hidden = false;
      next.hidden = true;
      placeholer.hidden = false;
    }
    else {
      previous.hidden = false;
      next.hidden = false;
      placeholer.hidden = false;
    }
  }
}

function replace_value(val) {
  let str = val.replace(/(^\s*)|(\s*$)/g, '');
  return  (str == '' || str == null || str == undefined);
}

function reset_page(params) {
  page = 1;
}

function reset_user_list() {
  user_list.innerHTML = '';
}

function show_start_end_page_btn() {
    pagination_start.hidden = false;
    pagination_end.hidden = false;
}

module.exports = {
  form: form,
  input: input,
  next: next,
  user_list: user_list,
  placeholer: placeholer,
  page_amount: page_amount,
  previous: previous,
  pagination_start: pagination_start,
  pagination_end: pagination_end,

  //函数体

  //渲染搜索到的用户列表
  render_user_list: render_user_list,

  // //显示或隐藏加载更多按钮
  // show_next: show_next,

  //搜索加载时和加载后反馈的信息
  ready_prompt_state: ready_prompt_state,
  end_prompt_state: end_prompt_state,

  //判断输入框是否为无效值（空格，空字符）
  replace_value: replace_value,
  //得到搜索到的总页数
  set_page_amount: set_page_amount,
  get_page_amount: get_page_amount,
  //重置页码和用户列表HTML
  reset_page: reset_page,
  reset_user_list: reset_user_list,

  //渲染页码
  render_pagination: render_pagination,

  //初始页面对象
  config: config,

  show_start_end_page_btn: show_start_end_page_btn,
}
