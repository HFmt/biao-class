 
 let module_pagination = require('./pagination')
 
 let pagination = document.getElementById('pagination');

 module_pagination.init({
    pagination: pagination
  , amount: 100
  , limit: 10
  , range: 5
  , current: 6
  , on_change_page: on_change_page
 });

 function on_change_page(page, e){
     console.log(page);
 }