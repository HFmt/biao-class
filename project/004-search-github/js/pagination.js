
let pagination_wrap
, config
, page_amount
, page_range
, pagination_list
; 

let default_config = {
    amount: null
  , limit: 5
  , page_range: 5
  , page_current: 1
}



let output = {
   init: init
 , enable: enable
 , disable: disable
 , set_amount_and_limit: set_amount_and_limit
 , show: show
 , hide: hide
}

function init(init_config){
  pagination_wrap = init_config.pagination_wrap;
  config = Object.assign({}, default_config, init_config);

  render_pagination_structure();
if(!init_config.amount || !init_config.limit)
  return;
  calc_page_amount();
  change_page_current(config.page_current); 

}

function enable(){
    pagination_fieldset.disabled = false;
  }
  
function disable(){
    pagination_fieldset.disabled = true;
}

function hide(){
    pagination_wrap.hidden = true;
}

function show(){
    pagination_wrap.hidden = false;
}
  
function render_pagination_structure(){

  pagination_wrap.innerHTML = `
  <fieldset class="pagination-fieldset">
      <div class="pagination-pre">
          <button class="pagination-first">First</button>
          <button class="pagination-prev">Prev</button>
      </div>
      <div class="pagination-list"></div>
      <div class="pagination-post">
          <button class="pagination-next">Next</button>
          <button class="pagination-last">Last</button>
      </div>
  </fieldset>
  `;

  pagination_fieldset = pagination_wrap.getElementsByClassName('pagination-fieldset')[0];
  pagination_list = pagination_wrap.getElementsByClassName('pagination-list')[0];
  
  pagination_wrap.addEventListener('click', function (e){
      let   first_btn = e.target.classList.contains('pagination-first')
          , prev_btn = e.target.classList.contains('pagination-prev')
          , item_btn = e.target.classList.contains('pagination-item')
          , next_btn = e.target.classList.contains('pagination-next')
          , last_btn = e.target.classList.contains('pagination-last')
          ;
          if(first_btn)
              change_page_current(1);
          else if(prev_btn)
              change_page_current(config.page_current-1);
          else if(item_btn)
              change_page_current(parseInt(e.target.dataset.page));
          else if(next_btn)
              change_page_current(config.page_current+1);
          else if(last_btn){
              change_page_current(page_amount);
          }

      render_pagination_list();
  }) ;
}

function set_amount_and_limit(amount, limit){
    config.amount = amount;
    config.limit = limit;
    calc_page_amount();

    render_pagination_list();
}

function render_pagination_list(){
  pagination_list.innerHTML = '';

  let between = calc_page_range()
    , start_page = between.start_page
    , end_page = between.end_page
    ;
    console.log(start_page);
    console.log(end_page);
  for(let i = start_page; i <= end_page; i++){
      let btn = document.createElement('button');
      btn.innerHTML = i;
      btn.classList.add('pagination-item');
      btn.dataset.page = i;
      if(config.page_current == i)
      btn.classList.add('active');
      
      pagination_list.appendChild(btn);
  }
}


function calc_page_range(){
  let start_page 
    , middle = Math.ceil(config.page_range / 2)
    , end_page
;

//可视页码在左边
if(config.page_current <= middle){ 
  start_page = 1;
  end_page = config.page_range;
}

//可视页码在右边
else if(config.page_current >= page_amount - middle){ 
  start_page = page_amount - config.page_range + 1;
  end_page = page_amount;
}

//可视页码在中间
else{   
  start_page = config.page_current - middle + 1;
  end_page = config.page_current + middle - 1;
}

if(page_amount == 1){
    start_page = page_amount
    end_page = page_amount
}

return {start_page: start_page, end_page: end_page}
}

function change_page_current(page_current){
  let flag_page = config.page_current;

  config.page_current = page_current;

  if(config.page_current > page_amount)
      config.page_current = page_amount;
  else  if(config.page_current < 1)
      config.page_current = 1; 

  if(config.page_current == flag_page)
      return; 
     
  if(config.on_change_page_current)
      config.on_change_page_current(config.page_current);
}

function calc_page_amount(){
 return page_amount = Math.ceil(config.amount / config.limit) ;
}

module.exports = output;