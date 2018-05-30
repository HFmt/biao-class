;(function (){
    'use strict';
let el_form = document.getElementById('search-form')
  , el_input = document.getElementById('search-ipt')
  , el_button = document.getElementById('search-btn')
  ;

  init();

  function init() {
      el_form.addEventListener('submit', function(e){
          e.preventDefault();
          search.get_user(el_input.value);
          search.get_repo(el_input.value);
      });
  }

})();

