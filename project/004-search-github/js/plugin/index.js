 let history = require('./history');


 let search_form = document.getElementById('search-form')
   , search_input = document.getElementById('search-input')
   , history_list = document.getElementById('history-list');
   ;
   
 // 传入回调函数
 history.init({
    el: history_list
//   , click_history: click_history
//   , click_delete: click_delete
 });

 search_submit();
 click_input();
 click_DOM();

 function replace_value() {
    let str = search_input.value.replace(/(^\s*)|(\s*$)/g, '');
    return  str == '' || str == null || str == undefined;
}

function search_submit(){
    search_form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(replace_value())
            return;

        history.add(search_input.value);
        history.show_histoty();
    });
}


function click_input(){
    search_input.addEventListener('click', function (e) {
        if(history_list.innerHTML == ''){
            history.hide_histoty();
            return;
        }
        history.show_histoty();
    });
}

function click_DOM(){
    document.addEventListener('click', function (e) {
            if(e.target.closest('#search-form') || e.target.closest('#history-list'))
            return;
            history.hide_histoty();
       
    });
}

function click_history(key, e){
    console.log(key);
}

function click_delete(key, e){
    console.log(key);
}



 