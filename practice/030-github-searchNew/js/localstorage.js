;(function () {
    'use strict';

    let el_form = document.getElementById('search-form')
        , el_history_list = document.getElementById('history-list')
        , el_input = document.getElementById('search-input')
        , history_list
        , keywords
        ;

    init();

    function init() {
        reload_history_list();
        form_submit()
    }

    //表单提交  
    function form_submit() {
        el_form.addEventListener('submit', function (e) {
            e.preventDefault()
            
            if(replace_value())
            return;
            history_list.push(el_input.value);
            stroe_set('Asam', history_list);
            render_history_list();
            show_history_list();
        });  
    }

    el_input.addEventListener('keyup', function(){
        if(replace_value())
            return;
        render_history_list();
        show_history_list();
    });

    document.documentElement.addEventListener('click', function (e) {
        // console.log(e.target.closest('#search-input'));
        console.log(e.target.closest('#history-list'));
        if(e.target == e.target.closest('#search-input') || 
           e.target == e.target.closest('#history-list')){
            console.log('触发条件')
            return
        }
        console.log('没有触发条件')
        el_history_list.hidden = true;
    });
    
    function replace_value() {
        let str = el_input.value.replace(/(^\s*)|(\s*$)/g, '');
        return  (str == '' || str == null || str == undefined)
    }
  
    function render_history_list() {
        let el_history
            , el_delete_history
            ;
        el_history_list.innerHTML = '';

        history_list.forEach(function (history) {
            el_history = document.createElement('div');
            el_history.classList.add('history');
            el_history.dataset.history = history;
            el_history.innerHTML =
                `<div class="text">${history}</div>
                <div class="tool">
                    <span class="delete">删除</span>
                </div>
                `
            el_delete_history = el_history.getElementsByClassName('delete')[0];

            reverse_appendChild(el_history_list, el_history)

            push_input_value(el_history)

            delete_click_history(el_delete_history);
        });
    }

    //往前插入元素
    function reverse_appendChild(el_father, el_children) {
        if (el_father.children[0]) {
            el_father.insertBefore(el_children, el_father.children[0]);
        }
        else {
            el_father.appendChild(el_children);
        }
    }

    //把选中的历史记录添加到搜索框
    function push_input_value(history) {
        history.addEventListener('click', function (e) {
            if (e.target.classList.contains('delete')) {
                return;
            }
            set_keyword(this.dataset.history);
        });
    }

    //触发删除历史记录按钮事件
    function delete_click_history(this_delete) {
        this_delete.addEventListener('click', function () {
            let this_history = this.closest('.history').dataset.history
                , loca_index = history_list.indexOf(this_history)
                ;
            delete_history(this.closest('.history'), loca_index);
            stroe_set('Asam', history_list);
            show_history_list();
        });
    }

    //删除历史搜索记录
    function delete_history(closest, index) {
        el_history_list.removeChild(closest);
        history_list.indexOf(closest);
        history_list.splice(index, 1);
    }

    //为搜索框键入历史搜索记录的值
    function set_keyword(keyword) {
        el_input.value = keyword;
        keywords = keyword;
    }

    // 存储缓存数据
    function reload_history_list(reload) {
        reload = reload || 'Asam';
        history_list = stroe_get(reload) || [];
    }

    //以JSON格式设置localStorage.setItem
    function stroe_set(key, val) {
        let set_json = JSON.stringify(val);
        localStorage.setItem(key, set_json);
    }

    //取消JSON格式获取localStorage.getItem
    function stroe_get(key) {
        let get_json = localStorage.getItem(key);
        return JSON.parse(get_json);
    }

    //显示隐藏历史搜索容器
    function show_history_list() {
        if (el_history_list.innerHTML == '') {
            el_history_list.hidden = true;
        } else {
            el_history_list.hidden = false;
        }
    }
    
})();