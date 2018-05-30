  ;(function () {
      'use strict';
    let el = require('./element.js');


  function set_keyword(kwd) {
    el.input.value = kwd;
    el.keyword = kwd;
  }

     /*获取页面总数*/
     /*获取页面总数*/
     function get_page_amount() {
      /*总人数除以每页的数量*/
      el.page_amount = Math.ceil(el.amount / el.limit);
    }

  module.exports = {
    
    set_keyword: set_keyword,
    get_page_amount: get_page_amount,
  }
  })();
  