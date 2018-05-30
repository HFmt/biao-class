;(function (){
    'use strict';


    window.search = {
        get_user : get_user,
        get_repo : get_repo
    }
    
    function get_user(keyword) {
        send.send_user('get', 'https://api.github.com/search/users?q='+keyword, function (data) {
            console.log(data);
        });
    }

    function get_repo(keyword) {
        send.send_user('get', 'https://api.github.com/search/repositories?q='+keyword, function (data) {
            console.log(data);
        });
    }
})();
