;(function (){
'use strict';
    let history = require('./history.js');

    let search_form = document.getElementById('search-form')
      , search_input = document.getElementById('search-input')
      ;
    history.init({
        el: 'history-list'
      , on_history: function (key, e) {
            console.log(key);
      }
      , on_delete: function (key, e) {
            console.log(key);
      }
    });
    
    search_form.addEventListener('submit', function (e) {
        e.preventDefault();

        history.add_history(search_input.value);
    });

    search_input.addEventListener('click', function (e) {

        history.add_history(search_input.value);
    });
    
    // remove_history();
    // clear_history();
    // reander_history();
    // show_history();
    // hide_history(); 
})();