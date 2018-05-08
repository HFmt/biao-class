;(function () {
    'use strict';
    let store = require('../util/store.js')
      , helper = require('../util/helper.js')
      ;

    let list = []
      , el
      , config
      , on_history
      , on_delete
      ;

    function init(config) {
        el = document.getElementById(config.el);
        on_history = config.on_history;
        on_delete = config.on_delete;
    }

   
   
  

    

    function render_history() {
       el.innerHTML  = '';

       list.forEach(function (item){
            let el_history = document.createElement('div');

            el_history.innerHTML = 
                `
                <div class="text">${item}</div>
                <div class="tool">
                <span class="delete">删除</span>
                </div>
                `
            ;
            el.appendChild(el_history);

            el_history.addEventListener('click', function (e) {
                if (on_history)
                on_history(item, e);
            });
            let delete_histoty = el_history.getElementsByClassName('delete')[0];

            delete_histoty.addEventListener('click', function (e){
                if(on_delete)
                on_delete(item, e);

                remove_history(item);
            });
       });
    }

  

    
    function remove_history(keyword) {
        helper.find_and_delete(list, keyword); //判断是否有重复的值
        
        sync_to_store();  //把值重新添加到历史纪录

        render_history();   //重新渲染页面历史纪录
    }

   
    function clear_history() {
        list = [];

        render_history();
    }

    function add_history(keyword) {
        
        helper.find_and_delete(list, keyword); //判断是否有重复的值
      
        list.unshift(keyword);   //从头部添加历史纪录
       
        sync_to_store();  //把值重新添加到历史纪录

        render_history();   //重新渲染页面历史纪录
    }
    
    function sync_to_ladle() {
        list = store.store_get('history', list) || [];
    }

    function sync_to_store() {
        store.store_set('history', list);
    }

    module.exports = {
        init: init,
        sync_to_ladle: sync_to_ladle,
        sync_to_store: sync_to_store,
        add_history: add_history,
        remove_history: remove_history,
        clear_history: clear_history,
    }
})();