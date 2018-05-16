let send = require('./send');



let output = {
    search_user: search_user
}

function search_user(on_succeed){
    let url = 'https://api.github.com/search/users?q=' + 'biaoyansu';

    send.send('get', url, function (data){
        if(on_succeed)
        on_succeed(data);
    });
}

module.exports = output;