;(function (){
'use strict';
 let history = require('./history');

 history.init({
     el: 'history-list',
     on_history: function (key, e) {
         console.log(key);
     },
     on_delete: function (key, e) {
        console.log(key);
    }
 })


  
        history.add_history('Asam1');
        history.add_history('Asam2');
        history.add_history('Asam1');
        history.add_history('Asam2');
      
      ;
        // history.show_history();
        // history.hide_history();
        // history.clear_history();
})();