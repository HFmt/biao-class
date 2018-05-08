  ;(function () {
      'use strict';
    let el = require('./element.js');
    /*往冰箱存*/
  function store_set(key, val) {
    /*加保鲜膜（JSON化）*/
    var json = JSON.stringify(val);
    /*存冰箱（状态稳定不轻易改变）*/
    localStorage.setItem(key, json);
  }

  /*从冰箱取*/
  function store_get(key) {
    /*从冰箱取到带保鲜膜的数据*/
    var json = localStorage.getItem(key);
    /*撕膜（将数据转化为JS可以理解的数据类型）*/
    return JSON.parse(json);
  }

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
    store_set: store_set,
    store_get: store_get,
    set_keyword: set_keyword,
    get_page_amount: get_page_amount,
  }
  })();
  