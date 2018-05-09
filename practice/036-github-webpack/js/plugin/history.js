;(function () {
    'use strict';
    let store = require('../util/store.js')
      , helper = require('../util/helper.js')
      ;

    let list_history = []
      , el
      , on_history
      , on_delete
      ;

    function init(config){
        el = document.getElementById(config.el);
        on_history = config.on_history ;
        on_delete = config.on_delete;
    }

    function hide_history() {
        
    }

    function show_history() {
        
    }

    

    function clear_history() {
        
    }

    function remove_history(keyword) {
        helper.find_and_delete(list_history, keyword);
        sync_to_store();
        reander_history();
    }

    function add_history(keyword) {
        sync_to_ladle();
        helper.find_and_delete(list_history, keyword);
        list_history.unshift(keyword);
        sync_to_store();
        reander_history();
    }

    function reander_history() {
        el.innerHTML = '';
        list_history.forEach(function (item){
            let history = document.createElement('div');
            history.innerHTML = 
                `
                <div class="text">${item}</div>
                <div class="tool">
                <span class="delete">删除</span>
                </div>
                `
            ;
            el.appendChild(history);
            let delete_history = history.getElementsByClassName('delete')[0];

            history.addEventListener('click', function (e){
                if(on_history)
                on_history(item, e);
            });

            delete_history.addEventListener('click', function (e) {
                if(on_delete)
                on_delete(item, e);

                remove_history(item);
            })
        });
    }

    function sync_to_ladle() {
        list_history = store.store_get('history', list_history) || [];
    }

    function sync_to_store() {
        store.store_set('history', list_history);
    }
    module.exports = {
        add_history: add_history
      , remove_history: remove_history
      , clear_history: clear_history
      , reander_history: reander_history
      , show_history: show_history
      , hide_history: hide_history
      , init: init
    }
})();