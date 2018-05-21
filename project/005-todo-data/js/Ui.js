window.Ui = Todo_ui;

function Todo_ui(form_selector, list_selector){
    this.form = document.querySelector(form_selector);
    this.buttom = document.querySelector(form_selector);
    this.list = document.querySelector(list_selector);
    this._api = new Api();
}


Todo_ui.prototype.get_todo_data = get_todo_data;
Todo_ui.prototype.set_todo_data = set_todo_data;
Todo_ui.prototype.init = init;
Todo_ui.prototype.detect_submit = detect_submit;
Todo_ui.prototype.todo_render = todo_render;
Todo_ui.prototype.detect_list = detect_list;
Todo_ui.prototype.remove_row = remove_row;
Todo_ui.prototype.clear_form_data = clear_form_data;

function init(){
    this.detect_submit();
    this.detect_list();
}

function detect_submit(){
    let ui_this = this;
    this.form.addEventListener('submit', function (e){
        e.preventDefault();
        let todo_row = ui_this.get_todo_data(ui_this.form)
        if(todo_row.id)
            ui_this._api.modify(todo_row.id, todo_row);
        else
            ui_this._api.add(todo_row);
        ui_this.todo_render();
        ui_this.clear_form_data(ui_this.form);
    });
}


function clear_form_data(form_selector){
    form_selector.querySelector('[type = submit]').innerHTML = '添加';
    form_selector.querySelector('[name = title]').value = '';
    form_selector.querySelector('[name = id]').value = '';
}

function detect_list(){
    let ui_this = this;
    this.list.addEventListener('click', function(e){
        let data_id = e.target.closest('.todo-item').dataset.id;
        if(e.target.classList.contains('todo-delete')){
            ui_this.remove_row(data_id);
        }
        else if(e.target.classList.contains('todo-modify')){
            let todo_row  = ui_this._api.read(data_id);
            ui_this.set_todo_data(ui_this.form, todo_row);
            ui_this.form.querySelector('[type = submit]').innerHTML = '确认';
        }
    });
}


function remove_row(id){
    this._api.remove(id);
    this.todo_render();
}

function todo_render(){
    let ui_this = this;
    ui_this.list.innerHTML = '';
    this._api.read().forEach(function (item){
        ui_this.list.innerHTML += `
        <div class="todo-item cl_fl" data-id="${item.id}">
                <div class="check">
                    <input type="checkbox" name="${item.complete}">
                </div>
                <div class="col detail">
                    <div class="title">${item.title}</div>
                </div>
                <div class="tool-set">
                    <button class="todo-modify">修改</button>
                    <button class="todo-delete">删除</button>
                </div>
            </div>
        `
        ;
    });
}

function get_todo_data(form_selector){
    let data = {};
    let list = form_selector.querySelectorAll('[name]');

    list.forEach(function (input){
        switch(input.nodeName){
            case 'INPUT':
                switch(input.type){
                    case 'text':
                    case 'password':
                    case 'number':
                    case 'hidden':
                        data[input.name] = input.value;
                        break;
                    case 'checkbox':
                    case 'radio':
                        data[input.name] = input.checked;
                        break;
                }
                break;
            case 'TEXTAREA':
                data[input.name] = input.value;
                break;
            default:
                alert('No corresponding value');
        }
    });
    return data;
}


function set_todo_data(form_selector, data){
    for(let key in data){
        let val = data[key];
        let input = form_selector.querySelector(`[name =${key}]`);
        switch(typeof(val)){
            case 'number':
            case 'string':
                input.value = val;
                break;
            case 'boolean':
                input.checked = val;
                break;
        }
    }
}


function store_set(key, arr){
    localStorage.setItem(key, JSON.stringify(arr));
}

function store_get(key){
    return JSON.parse(localStorage.getItem(key));
}