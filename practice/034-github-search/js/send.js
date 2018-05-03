
let el = require('./element.js');


function send(me, url, on_success) {
    let http = new XMLHttpRequest();
    http.open(me, url);
    http.send();
    http.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        on_success(data);
        el.show_next()
    });
}

module.exports = {
    send: send
}