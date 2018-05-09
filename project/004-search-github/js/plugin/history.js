
//获取模块文件
let helper = require('../util/helper')
  , store = require('../util/store')
  ;
  
let list= []  // list 是一个数组
  , el         // el 是 history 容器
  , click_history   // 回调函数 触发点击 history 的方法
  , click_delete // 回调函数  触发点击删除 history 的方法
  ; 

  //模块出口
let output = {
    init: init
  , add: add
  , show_histoty: show_histoty
  , hide_histoty: hide_histoty
}


function init(config){
    el = config.el;
    input = config.input
    click_history = config.click_history;
    click_delete = config.click_delete;

    sync_to_ladle();
    render();
}

// 删除 history 的方法
function remove(keyword){               
    helper.find_and_delete(list, keyword);    // 判断传进的 history 是否在 list 数组里面, 在里面就删除对应的 history

    render();                          
    sync_to_sore();
    if(el.innerHTML == '')
    hide_histoty();                    
}

// 把 history 添加进 list 数组里面
function add(keyword){
    sync_to_sore();
    helper.find_and_delete(list, keyword); 

    list.unshift(keyword);
    render();
    sync_to_sore();
}

 // 渲染 history 容器里的数据
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

        setTimeout(function (){
            remove(keyword);
        }, 0);
        });

        if(el.innerHTML == '')
        hide_histoty();
    });
}

//  把 list 数组 存储进 localStorage 里面 [用 JSON.stringify() 方法存储]
function sync_to_sore(){
    store.store_set('asam', list);
}

// 取出 localStorage 里面的 list 数组 [用 JSON.parse() 方法取出]
function sync_to_ladle(){
    list = store.store_get('asam') || [];
}

function show_histoty(){
    el.hidden = false;
}

function hide_histoty(){
    el.hidden = true;
}



module.exports = output;