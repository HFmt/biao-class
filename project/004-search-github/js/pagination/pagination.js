

let pagination
  , amount_page
  , pagination_list
  , config
  ;

  let default_config = {
      amount: null,
      limit: null,
      range: 5,
      current: 5
  }
let output = {
    init: init
}

function init(user_config){
    pagination = user_config.pagination;
    config = Object.assign({}, default_config, user_config);

    change_page(config.current);
    calc_amount_page();
    render_pagination_structure();
    render_pagination_list();
}   

function render_pagination_structure(){
    pagination.innerHTML = 
    `
    <div class="pagination-pre">
        <button class="pagination-first">首页</button>
        <button class="pagination-prev">上一页</button>
    </div>
    <div class="pagination-list"></div>
    <div class="pagination-post">
        <button class="pagination-next">下一页</button>
        <button class="pagination-last">尾页</button>
    </div>
    `
    ;
    pagination_list = pagination.getElementsByClassName('pagination-list')[0];

    pagination.addEventListener('click', function (e){
        let first_btn = e.target.classList.contains('pagination-first')
          , prev_btn = e.target.classList.contains('pagination-prev')
          , item_btn = e.target.classList.contains('pagination-item')
          , next_btn = e.target.classList.contains('pagination-next')
          , last_btn = e.target.classList.contains('pagination-last')
        if(item_btn){
            let page = parseInt(e.target.dataset.page)
            change_page(page)
        }
        render_pagination_list();
    });
}

function render_pagination_list(){
    pagination_list.innerHTML = '';

    between = calc_start_and_end_page();
    let start_page = between.start_page
      , end_page = between.end_page
      ;
      console.log(start_page);
      console.log(end_page);

    for(let i = start_page; i <= end_page; i++){
        let btn = document.createElement('button');
        btn.classList.add('pagination-item')
        btn.innerHTML = i;
        btn.dataset.page = i;
        pagination_list.appendChild(btn);

        if(config.current == i)
        btn.classList.add('active');
    }
}

function calc_start_and_end_page(){
    let start_page 
    , middle = Math.ceil(config.range / 2)
    , end_page = config.range
  ;
  
  if(config.current <= middle){ //左边
    start_page = 1;
    end_page = config.range;
  }

  else if(config.current >= amount_page - middle){ //右边
    start_page = amount_page - config.range + 1;
    end_page = amount_page;
  }

  else{   //正常状态（在中间）
    start_page = config.current - middle + 1;
    end_page = config.current + middle - 1;
  }

  return {start_page: start_page, end_page: end_page}

}


function change_page(current){
  config.current = current;

   if(current < 1)
    config.current = 1;

    if(current > amount_page)
    config.current = amount_page

    if(config.current < 1)
    config.current = 1;

    if(config.on_change_page)
    config.on_change_page(config.current);



//   config.current = page;

//   /*如果大于最大页面，就强制等于最后一页*/
//   if (page > amount_page)
//     config.current = amount_page;

//   /*如果小于最小页面，就强制等于第一页*/
//   if (page < 1)
//     config.current = 1;

//   /*通知使用者*/
//   if (config.on_page_change)
//     config.on_page_change(config.current);
}

function current_page(config){
    
}

function calc_amount_page(){
    return amount_page = Math.ceil(config.amount / config.limit);
}

module.exports = output;