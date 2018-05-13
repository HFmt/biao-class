 
 let module_pagination = require('./pagination')
 
 let pagination = document.getElementById('pagination-wrap');

 module_pagination.init({
    pagination: pagination
  , amount: 100
  , limit: 10
  , page_range: 5
  , page_current: 1
  , on_change_page_current: on_change_page_current
 });

 function on_change_page_current(current_page, e){
     console.log(current_page);
 }
 