
/*定义页面中元素*/

let form = document.getElementById('search-form')
  , input = document.getElementById('search-input')   
  , next = document.getElementById('next')   
  , user_list = document.getElementById('user-list')
  , page = 1
  , limit = 5
  ;
 

/*渲染用户列表*/
function render_user_list(data) {
  let html = user_list.innerHTML;

  data.forEach(function (user) {
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

function show_next(limit_num) {
  if(limit_num > 1)
    next.hidden = false;
    else{
      next.hidden = true;
    }
}


module.exports = {
  form: form,
  input: input,
  next: next,
  page: page,
  limit: limit,
  user_list: user_list,
  render_user_list: render_user_list,
  show_next: show_next,
}
