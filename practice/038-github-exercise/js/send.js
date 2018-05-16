let output = {
    send: send
}

function send(method, url, fn){
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.send();

    http.addEventListener('load', function(){
        let data = JSON.parse(this.responseText);

        fn(data);
    });
}

module.exports = output;