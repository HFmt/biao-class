
let el = require('./element.js');


function send(method, url, on_success) {
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.send();
    http.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        on_success(data);
        console.log(data.total_count/el.limit);
        el.show_next(data.total_count/el.limit);
    });
}

module.exports = {
    send: send
}