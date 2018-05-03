; (function () {
    'use strict';
let search_form = document.getElementById('search-form')
, search_input = document.getElementById('search-input')
, search_btn = document.getElementById('search-button')
, user_list = document.getElementById('user-list')
, pagination = document.getElementById('pagination')
, placeholder = document.getElementById('placeholder')
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
    form_submit()
}

function form_submit() {
    search_form.addEventListener('submit', function (e) {
        e.preventDefault();
        keyword = search_input.value
        clearTimeout(stime);
        stime = setTimeout(function () {
            if (!search_input.value) {
                return;
            }
            reset_page();
            reset_user_list();
            finde_user(keyword);
            clear_pagination();
        }, 200);
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
    user_list.innerHTML = list;
    no_more = current_page * limit >= amount;
    placeholder.hidden = !no_more;
}

function render_pagination() {
    clear_pagination();
    get_page_amout();
        let start_page = 1
            , end_page
            , middle = Math.ceil(max_page / 2)
            , reaching_left = current_page <= middle
            , reaching_right = current_page >= amount_page - middle
            , btn 
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
        btn = document.createElement('button');
        btn.innerHTML = i;
        btn.dataset.page = i;
        if (current_page == i) {
            btn.style.background = 'pink';
        }
        pagination.appendChild(btn);

    }

}

pagination.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName.toUpperCase() == 'BUTTON') {
        current_page = parseInt(e.target.dataset.page);
        finde_user();
        console.log(current_page);
    }
    else {
        return;
    }   
});
    

/*总人数除以每页的数量*/
function get_page_amout() {
amount_page = Math.ceil(amount / limit);
}

//重置页数
function reset_page() {
    current_page = 1;
}

//切换当前页面的用户
function reset_user_list() {
user_list.innerHTML='';
}

//重置搜索的内容
function clear_pagination() {
pagination.innerHTML = '';
placeholder.hidden = true;
}


})();