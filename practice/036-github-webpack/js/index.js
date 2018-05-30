;(function (){
    'use strict';

    let event = require('./event.js')
      , history = require('./history.js')
      ;

    init();

    /*初始化*/
    function init() {
      history.reload_history_list();
      history.render_history_list();
      event.bind_events();
    }
})();