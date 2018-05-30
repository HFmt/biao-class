;(function () {
    'use strict';

    let outout = {
     user_list: document.getElementById('user-list'),
     form : document.getElementById('search-form'),
     input : document.getElementById('search-input'),
     top : document.getElementById('top'),
     placeholer : document.getElementById('placeholer'),
     pagination_container : document.getElementById('pagination-container'),
     pagination : document.getElementById('pagination'),
     pagination_start : document.getElementById('pagination-start'),
     pagination_end : document.getElementById('pagination-end'),
     history_list : document.getElementById('history-list'),
     keyword: null,
     no_more: null,
     amount: null,
     page_amount: null,
     MAX_LIMIT : 999,
     max_page_btn : 7,
     current_page : 1,
     limit : 5,
    }

module.exports = outout;
})();