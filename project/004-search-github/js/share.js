
let user_list = []
  , keyword
  , amount
  , limit = 5
  , current_page = 1
  ;

let output = {
    set_keyword: set_keyword
  , get_keyword: get_keyword
  , set_amount: set_amount
  , get_amount: get_amount
  , set_limit: set_limit
  , get_limit: get_limit
  , set_current_page: set_current_page
  , get_current_page: get_current_page
  , set_user_list: set_user_list
  , get_user_list: get_user_list
}

function set_user_list(val){
    return  user_list = val;
    }
      
    function get_user_list(){
    return  user_list;
    }


function set_current_page(val){
return  current_page = val;
}

function get_current_page(){
return  current_page;
}

function set_limit(val){
    return  limit = val;
  }
  
  function get_limit(){
    return  limit;
  }

function set_amount(data){
    return  amount = data;
    }
    
function get_amount(){
return  amount;
}

function set_keyword(val){
    return  keyword = val;
    }
    
function get_keyword(){
return  keyword;
}  

  



module.exports = output;