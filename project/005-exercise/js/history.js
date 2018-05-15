let output = {
    init: init
}

let history_list
  , list = [1, 2];

function init(init_config){
    history_list = init_config.history_list;
    add();
    rend()
}

function rend(){
    history_list.innerHTML = '';
    console.log(list.length);
    list.forEach(function (keyword){
        let el_history =  document.createElement('div');
        el_history.innerHTML = 
        `
        <div class="text">${keyword}</div>
        <div class="tool">
            <span class="delete">删除</span>
        </div>
        `
        ;
        el_history.classList.add('history');
        history_list.appendChild(el_history);
    });
}

function add(){
    sync_to_sore();
}

function sync_to_ladle(){
    list =JSON.parse( localStorage.getItem('Asam'));
}

function sync_to_sore(){
    localStorage.setItem('Asam', JSON.stringify(list));
}




module.exports = output;