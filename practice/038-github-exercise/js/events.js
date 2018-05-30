let element = require('./element')
  , search = require('./search')
  , pagination = require('./pagination')
  , history = require('./history')
  , share = require('./share')

let output = {
    init: init
}


function init(){
    detect_submit();
}

function detect_submit(e){
    element.form.addEventListener('submit', function (e){
        e.preventDefault();
        console.log(1)
        search.search_user(on_succeed);
    });
}

function on_succeed(data){
    console.log(data);
}

pagination.init({
    pagination_wrap: element.pagination_wrap
});

history.init({
    history_list: element.history_list
});


module.exports = output;