; (function () {
    'use strict';
let el_search_form = document.getElementById('search-form')
, el_search_input = document.getElementById('search-input')
, el_user_list = document.getElementById('user-list')
, el_pagination = document.getElementById('pagination')
, el_placeholder = document.getElementById('placeholder')
, el_first_page = document.getElementById('first-page')
, el_last_page = document.getElementById('last-page')
, user
, keyword
, stime
, no_more
, amount
, amount_page
, max_page = 5
, current_page = 1
, limit = 9;
;

init();

function init() {
    form_submit();
    first_page();
    last_page();
}

function form_submit() {
    el_search_form.addEventListener('submit', function (e) {
        e.preventDefault();
        keyword = el_search_input.value
        clearTimeout(stime);
        stime = setTimeout(function () {
            if (!el_search_input.value) {
                return;
            }
            reset_page();
            reset_user_list();
            finde_user(keyword);
            clear_pagination();
        }, 200);
    });
}


    //首页
    function first_page() {
        el_first_page.addEventListener('click', function (){
            reset_page();
            console.log(current_page);
            finde_user(keyword);
        });
    }

    //尾页
    function last_page() {
        el_last_page.addEventListener('click', function (){
            get_page_amout()
            current_page = amount_page;
            console.log(current_page);
            finde_user(keyword);
        });
    }


function finde_user() {
    let link = 'https://api.github.com/search/users?q=' + keyword + '&page=' + current_page + '&per_page=' + limit
    send(link, function (result) {
        user = result;
        amount = user.total_count;
        render();  
        render_pagination();
    });

}

function send(url, fn, method) {
    method = method || 'get';
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.send();
    http.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        if (fn)
            fn(data);
    });

}

function render() {
    let list = ' ';
    for (let key in user.items) {
        list +=
                `<div class="user">
                    <a class="avatar" href= "${user.items[key].html_url}" target="_blank"> 
                        <img src="${user.items[key].avatar_url}"> 
                    </a> 
                    <div class="info">
                        <div class="username"> ${user.items[key].login} </div>
                        <div>
                            <a  href= "${user.items[key].html_url}" target="_blank"> 
                                ${user.items[key].html_url}
                            </a>
                        </div>
                    </div>
                </div>`;
    }
    el_user_list.innerHTML = list;
    no_more = current_page * limit >= amount;
    el_placeholder.hidden = !no_more;
}

function render_pagination() {
    clear_pagination();
    get_page_amout();
        let start_page
            , end_page
            , middle = Math.ceil(max_page / 2)
            , reaching_left = current_page <= middle
            , reaching_right = current_page >= amount_page - middle
            , page_button 
            ;
    if (reaching_left) {
    start_page = 1;
    end_page = max_page;
    } 

    else if (reaching_right) {
        start_page = amount_page - max_page;
        end_page = amount_page;
    }

    else {
        start_page = current_page - middle + 1; 
        end_page = current_page + middle - 1;
    }

    if (start_page < 1) {
        start_page = 1;
    }

    if (end_page > amount_page) {
        end_page = amount_page;
    }

    for (let i = start_page; i <= end_page; i++) {
        page_button = document.createElement('button');
        page_button.innerHTML = i;
        page_button.dataset.page = i;
        if (current_page == i) {
            page_button.style.background = 'pink';
        }
        el_pagination.appendChild(page_button);

    }
}

el_pagination.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName.toUpperCase() == 'BUTTON') {
        current_page = parseInt(e.target.dataset.page);
        finde_user();
        console.log(current_page);
    }
    else {
        return;
    }   
});
    

/*总人数除以每页的数量得到总页数*/
    function get_page_amout() {
        amount_page = Math.ceil(amount / limit);
    }

//重置页数
    function reset_page() {
        current_page = 1;
    }

//切换当前页面的用户
    function reset_user_list() {
        el_user_list.innerHTML='';
    }

//重置搜索的内容
    function clear_pagination() {
        el_pagination.innerHTML = '';
        el_placeholder.hidden = true;
    }


})();