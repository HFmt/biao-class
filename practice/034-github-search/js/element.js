
/*定义页面中元素*/

let form = document.getElementById('search-form')
  , input = document.getElementById('search-input')   
  , next = document.getElementById('next')   
  , user_list = document.getElementById('user-list')
  , placeholer = document.getElementById('placeholer')
  , page = 1
  , limit = 5
  ;
 

/*渲染用户列表*/
function render_user_list(user_list_result) {
  let html = user_list.innerHTML;

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

function end_prompt_state(page, amount) {
  if(page * limit < amount.total_count){
    next.hidden = false;
    placeholer.hidden = true;
  }
  else{
    next.hidden = true;
    placeholer.hidden = false;
  }
  next.disabled = false;
  next.innerHTML = '加载更多';
}

function ready_prompt_state() {
  next.disabled = true;
  next.hidden = false;
  placeholer.hidden = true;
  next.innerHTML = '加载中';
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

module.exports = {
  form: form,
  input: input,
  next: next,
  page: page,
  limit: limit,
  user_list: user_list,
  placeholer: placeholer,

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

  //重置页码和用户列表HTML
  reset_page: reset_page,
  reset_user_list: reset_user_list,
}
