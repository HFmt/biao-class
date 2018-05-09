
let list= []
  , el
  , click_history
  , click_delete
  ;

let output = {
    init: init
  , add: add
}

function init(config){
    el = document.getElementById(config.el);
    click_history = config.click_history;
    click_delete = config.click_delete;

    // sync_to_ladle();
    // render();
}


function remove(keyword){
    if(list.indexOf(keyword) == -1)
        return false;

    list.splice(list.indexOf(keyword), 1);
    render();
    sync_to_sore();
}

function add(keyword){
    list.push(keyword);
    render();
    sync_to_sore();
}


function render(){
    el.innerHTML = '';
    list.forEach(function (keyword){
        let el_history = document.createElement('div');
        el_history.innerHTML = 
        `
        <div class="text">${keyword}</div>
        <div class="tool">
        <span class="delete">删除</span>
        </div>
        `
        ;
        el_history.classList.add('history');
        el.appendChild(el_history);

        let del_history = el_history.getElementsByClassName('delete')[0];

        el_history.addEventListener('click', function(e){
            if(click_history)
            click_history(keyword, e);
        });

        del_history.addEventListener('click', function(e){
            if(click_delete)
            click_delete(keyword, e);

            remove(keyword);
        });
    });
}

function sync_to_sore(){
    localStorage.setItem('Asam', JSON.stringify(list));
}

function sync_to_ladle(){
    list =  JSON.parse(localStorage.getItem('Asam'))  || [];
}

module.exports = output;