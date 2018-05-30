;(function (){
    'use strict';
    let el =require('./element.js');

    function clear_pagination() {
        el.pagination.innerHTML = '';
      }
  
      function hide_pagination() {
        el.pagination_container.hidden = true;
      }
  
      function show_pagination() {
        el.pagination_container.hidden = false;
      }

    module.exports = {
        clear_pagination: clear_pagination,
        show_pagination: show_pagination,
        hide_pagination: hide_pagination,
    }
      
})();