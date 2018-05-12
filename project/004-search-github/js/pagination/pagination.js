
let pagination_wrap
  , config
  , amount_page
  , range_page
  , pagination_list
  ; 

  let default_config = {
      amount: null
    , limit: 5
    , range_page:5
    , current_page: 1
  }



let output = {
    init: init
}

function init(init_config){
    pagination_wrap = init_config.pagination;
    config =Object.assign({}, default_config, init_config);
    
    render_pagination_structure();
    calc_amount_page();
    change_current_page(config.current_page);
    render_pagination_list();
    // disable();
}

function enable(){
    pagination_fieldset.disabled = true;
}

function disable(){
    pagination_fieldset.disabled = true;
}

function render_pagination_structure(){
    pagination_wrap.classList.add('pagination');
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
                change_current_page(1);
            else if(prev_btn)
                change_current_page(config.current_page-1);
            else if(item_btn)
                change_current_page(parseInt(e.target.dataset.page));
            else if(next_btn)
                change_current_page(config.current_page+1);
            else if(last_btn)
                change_current_page(amount_page);

        render_pagination_list();
    }) ;
}

function render_pagination_list(){
    pagination_list.innerHTML = '';

    let between = calc_start_and_end_page()
      , start_page = between.start_page
      , end_page = between.end_page
      ;
 
    for(let i = start_page; i <= end_page; i++){
        let btn = document.createElement('button');
        btn.innerHTML = i;
        btn.classList.add('pagination-item');
        btn.dataset.page = i;
        if(config.current_page == i)
        btn.classList.add('active');
        
        pagination_list.appendChild(btn);
    }
}

function calc_start_and_end_page(){
    let start_page 
      , middle = Math.ceil(config.range_page / 2)
      , end_page
  ;
  
  //可视页码在左边
  if(config.current_page <= middle){ 
    start_page = 1;
    end_page = config.range_page;
  }

  //可视页码在右边
  else if(config.current_page >= amount_page - middle){ 
    start_page = amount_page - config.range_page + 1;
    end_page = amount_page;
  }

  //可视页码在中间
  else{   
    start_page = config.current_page - middle + 1;
    end_page = config.current_page + middle - 1;
  }

  return {start_page: start_page, end_page: end_page}
}

function change_current_page(current_page){
    let flag_page = config.current_page;

    config.current_page = current_page;

    if(config.current_page > amount_page)
        config.current_page = amount_page;
    else  if(config.current_page < 1)
        config.current_page = 1; 

    if(config.current_page == flag_page)
        return; 
       
    if(config.on_change_current_page)
        config.on_change_current_page(config.current_page);
}

function calc_amount_page(){
   return amount_page =Math.ceil(config.amount / config.limit) ;
}

module.exports = output;