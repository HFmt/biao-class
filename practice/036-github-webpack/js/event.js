;(function () {
    'use strict';

    let el = require('./element.js')
      , search = require('./search.js')
      , pagination = require('./pagination.js')
      , history = require('./history.js')

   

    function bind_events() {
      detect_submit();
      detect_click_top();
      detect_click_pagination();
      detect_click_input();
      detect_click_document();
      // detect_blur_input();
      //@1 detect_click_history_list();
    }


    function detect_click_document() {
        /*给html元素加点击事件*/
        document
          .documentElement
          .addEventListener('click', function (e) {
            var target = e.target;
  
            var in_search_input = target.closest('#search-input')
              , in_history_list = target.closest('#history-list')
            ;
  
            if (in_search_input || in_history_list)
              return;
  
              history.hide_history_list();
          });
      }


        /*绑定表单提交事件*/
    function detect_submit() {
        el.form.addEventListener('submit', function (e) {
          e.preventDefault();
  
          /*获取输入的关键词*/
          el.keyword = el.input.value;
  
          if (!el.keyword) {
            alert('你闹呢');
            return;
          }
  
          /*重置页码*/
          reset_page();
  
          /*重置用户列表HTML*/
          reset_user_list();
  
          /*隐藏两个只有得到结果才有意义的组件*/
          el.placeholer.hidden = true;
  
          search.search(el.keyword);
  
          pagination.clear_pagination();
          pagination.hide_pagination();
        });
      }


      function detect_click_pagination() {
        el.pagination_start.addEventListener('click', function () {
          search.goto_page(1);
        });
        el.pagination_end.addEventListener('click', function () {
          search.goto_page(el.page_amount);
        });
      }
  
      function detect_click_input() {
        el.input.addEventListener('click', function () {
          history.show_history_list();
        });
      }
  
    
  
      function detect_blur_input() {
        el.input.addEventListener('blur', function () {
  
        });
      }

        /*监听点击回到顶部*/
    function detect_click_top() {
      el.top.addEventListener('click', function () {
        window.scrollTo(0, 0);
      });
    }

       /*重置页码为1*/
       function reset_page() {
        el.current_page = 1;
      }

       /*清空已渲染内容*/
    function reset_user_list() {
      el.user_list.innerHTML = '';
    }

    module.exports = {
      bind_events: bind_events
    }
})();