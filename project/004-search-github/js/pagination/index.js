 
 let module_pagination = require('./pagination')
 
 let pagination = document.getElementById('pagination-wrap');

 module_pagination.init({
    pagination: pagination
  , amount: 100
  , limit: 10
  , range_page: 5
  , current_page: 4
  , on_change_current_page: on_change_current_page
 });

 function on_change_current_page(current_page, e){
     console.log(current_page);
 }
 