;(function () {
    'use strict';
    let el = require('./element.js')
      , share = require('./share.js')
      , history = require('./history.js')
      , pagination = require('./pagination.js')
      ;
    let res;

    function search() {
        /*准备发射*/
        var http = new XMLHttpRequest();
        http.open('get', 'https://api.github.com/search/users?q=' + el.keyword + '&page=' + el.current_page + '&per_page=' + el.limit);
        http.setRequestHeader('Authorization', 'Basic ' + btoa('biaoyansu:94bfe1cf32b7aa3d0c2cbdd94958510841afece0'));
  
        /*发射*/
        http.send();
  
        /*返回后*/
        http.addEventListener('load', function () {
          /*解析（将JSON格式的字符串转换为JS能理解的数据）返回数据*/
          res = JSON.parse(http.responseText);
  
          /*拿到搜索结果总数*/
          el.amount = res.total_count;
          /*既然有了数据，不就可以渲染用户列表和页码组件了吗？*/
          render();
          render_pagination();
        });
   
        history.append_history(el.keyword);
      }


          /**
     * 通过数据生成HTML
     */
    function render() {
      /*初始化HTML*/
      var html = '';

      /*遍历用户列表*/
      res.items.forEach(function (user) {
        /*每个用户都追加到HTML后面*/
        html = html + `
      <div class="user">
        <a class="avatar" target="_blank" href="${user.html_url}">
          <img src="${user.avatar_url}">
        </a>
        <div class="info">
          <div class="username">${user.login}</div>
          <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
        </div>
      </div>
    `;
    });

      /*将生成的HTML写入模板床*/
      el.user_list.innerHTML = html;
      document
        .getElementById('amount')
        .innerHTML = `共有${res.total_count}条结果`;

      /*如果每页的数量乘以页数大于总数就说明当前页就是最后一页*/
      el.no_more = el.current_page * el.limit >= amount;

      /*
      .hidden = no_more;
      el.placeholer.hidden = !no_more;
      */

      /*如果没有更多*/
      if (el.no_more) {
        /*隐藏翻页按钮*/
        /*显示"谋了"*/
        el.placeholer.hidden = false;
      } else { // 否则正好相反
        el.placeholer.hidden = true;
      }
    }

      function goto_page(page) {

        var max_user_limit_reached = page * el.limit > el.MAX_LIMIT;
  
        if (max_user_limit_reached) {
          el.current_page = Math.floor(el.MAX_LIMIT / el.limit);
        } else {
          el.current_page = page;
        }
  
        search();
      }


    function render_pagination() {
        pagination.show_pagination();
        pagination.clear_pagination()
        share.get_page_amount();

        let start
        , end
        , middle = Math.ceil(el.max_page_btn / 2)
        , reaching_left = el.current_page <= middle
        , reaching_right = el.current_page >= el.page_amount - middle;
        ;


        if (reaching_left) {
        /*
        当前页在左边
        [...].....
        */
        /*设按钮开始为1*/
        start = 1;

        /*设结束为可视按钮最大值*/
        end = el.max_page_btn;
        } else if (reaching_right) {
        /*
        当前页在右边
        .....[...]
        */
        /*设按钮开始为总页数减去可视按钮最大值*/
        start = el.page_amount - el.max_page_btn;
        /*设按钮结束为总页数*/
        end = el.page_amount;
        } else {
        /*
        当前页在中间
        ...[...]...
        */

        /*加1或减1是为了排除中间按钮*/

        /*设按钮开始为当前页减去可视按钮最大值的一半*/
        start = el.current_page - middle + 1;
        /*设按钮结束为当前页加上可视按钮最大值的一半*/
        end = el.current_page + middle - 1;
        }

        /*如果出于任何诡异的原因导致开始按钮小于1就将其复位为1*/
        if (start < 1) {
        start = 1;
        }

        /*如果出于任何诡异的原因导致结束按钮大于页面总数就将其复位为总数*/
        if (end > el.page_amount) {
        end = el.page_amount;
        }

        /*通过指定开始和结束动态的追加翻页按钮*/
        for (var i = start; i <= end; i++) {
        var num = i;

        /*生成btn按钮*/
        var btn = document.createElement('button');
        /*指定它是第几页的按钮*/
        btn.innerText = num;

        /*给所有页码加pager类，方便以后指定样式*/
        btn.classList.add('pager');

        /*如果当前页等于正在迭代的按钮，就给按钮加一个激活的类，
        不然用户不知道自己当前在第几页*/
        if (el.current_page == num) {
            btn.classList.add('active');
        }

        /*追加到页码容器的后面*/
        el.pagination.appendChild(btn);

        btn.addEventListener('click', make_function_on_page_change(num));
        }
    }

    function make_function_on_page_change(num) {
        return function (e) {
        /*让current_page（当前页面）等于点击的按钮的序号*/
        el.current_page = num;
        /*然后再搜索，不然的话永远都在取第1页的数据*/
        search();
        };
    }
    

      module.exports = {
        search: search,
        render : render,
        goto_page: goto_page,
        render_pagination : render_pagination,
      }
})();