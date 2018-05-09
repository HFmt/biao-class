 let history = require('./history');

 //回调
 history.init({
    el: 'history-list'
  , click_history: click_history
  , click_delete: click_delete
 });

function click_history(key, e){
    console.log(key);
}

function click_delete(key, e){
    console.log(key);
}

 history.add('Asam1');
 