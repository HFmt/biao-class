 
 let pagination = require('./pagination')
 
 let pagination_wrap = document.getElementById('pagination-wrap');

pagination.init({
    pagination: pagination_wrap
  , amount: 100
  , limit: 10
  , page_range: 5
  , page_current: 1
  , on_change_page_current: on_change_page_current
 });

 function on_change_page_current(current_page, e){
     console.log(current_page);
 }
 