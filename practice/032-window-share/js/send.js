;(function (){
    'use strict';
    window.send = {
        send_user : send_user,
        get_repo : get_repo
    }

    function send_user(method, url, after_load) {
        var http = new XMLHttpRequest();
        http.open(method, url);
        http.send();
  
        http.addEventListener('load', function () {
          after_load(this.responseText);
        });
    }

    function get_repo(method, url, after_load) {
        var http = new XMLHttpRequest();
        http.open(method, url);
        http.send();
  
        http.addEventListener('load', function () {
          after_load(this.responseText);
        });
    }
})();