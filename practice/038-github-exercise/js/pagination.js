

let output = {
    init: init
}

let pagination_wrap
  , pagination_list
  , page_amount
  , config

let default_config = {
    amount : null 
  , limit: null
  , page_range: 5
  , page_current: 1
}

function init(init_config){
    pagination_wrap = init_config.pagination_wrap;
    config = Object.assign({}, default_config,  init_config);
    rend_init();
    rend_list()
}



function rend_init(){
    pagination_wrap.innerHTML = `
    <fieldset class="pagination-fieldset">
        <div class="pagination-pre">
            <button class="pagination-first">首页</button>
            <button class="pagination-prev">上一页</button>
        </div>
        <div class="pagination-list"></div>
        <div class="pagination-post">
            <button class="pagination-next">下一页</button>
            <button class="pagination-last">尾页</button>
        </div>
    </fieldset>
    `;
    pagination_list = pagination_wrap.getElementsByClassName('pagination-list')[0];
}

function rend_list(){
    for(let i = 1; i <= 5; i++){
        let btn = document.createElement('button');
        btn.innerHTML = i;
        btn.dataset.page = i;
        pagination_list.appendChild(btn);
    }
}

module.exports = output;