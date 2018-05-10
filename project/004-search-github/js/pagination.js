

let el = require('./element');

let pagination
  , max_page
  , set_page_amount
  , get_page_amount

let output = {
  init: init
, render_pagination: render_pagination
}

function init(config){
  pagination = config.pagination
, max_page = config.max_page
, set_page_amount = config.set_page_amount
, get_page_amount = config.get_page_amount
}

function render_pagination(config_page, data) {

  pagination.innerHTML = '';

  set_page_amount(data);
        let start_page 
          , middle = Math.ceil(max_page/2)
          , end_page = max_page
        ;
        
        if(config_page <= middle){
          start_page = 1;
          end_page = max_page;
        }

        else if(config_page >= get_page_amount() - middle){
          start_page = get_page_amount() - max_page;
          end_page = get_page_amount();
        }

        else{
          start_page = config_page - middle + 1;
          end_page = config_page + middle - 1;
        }

        if(start_page < 1){
          start_page = 1;
        }
        if(end_page > get_page_amount()){
          end_page = get_page_amount();
        }
        for (let i = start_page; i<=end_page; i++){
          let btn = document.createElement('button');
          btn.innerText = i;
          btn.dataset.page = i;

          if(config_page == i){
            btn.classList.add('active');
          }
          
          pagination.appendChild(btn);
        }
}



module.exports = output;