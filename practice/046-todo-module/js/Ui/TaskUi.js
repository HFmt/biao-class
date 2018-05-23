window.TaskUi = TaskUi;

function TaskUi(form_selector, list_selector){
    this.form = document.querySelector(form_selector || '#task-form');
    this.list = document.querySelector(list_selector || '#task-list');
    this._api = new TaskApi();
}


TaskUi.prototype.get_todo_data = get_todo_data;
TaskUi.prototype.set_todo_data = set_todo_data;
TaskUi.prototype.init = init;
TaskUi.prototype.detect_submit = detect_submit;
TaskUi.prototype.todo_render = todo_render;
TaskUi.prototype.detect_list = detect_list;
TaskUi.prototype.remove_row = remove_row;
TaskUi.prototype.clear_form_input = helper.clear_form_input;

function init(){
    this.detect_submit();
    this.detect_list();
}

function detect_submit(){
    let ui_this = this;
    this.form.addEventListener('submit', function (e){
        e.preventDefault();
        if(ui_this.form.querySelector('[name = title]').value == '')
            return;
        let todo_row = ui_this.get_todo_data(ui_this.form)
        if(todo_row.id)
            ui_this._api.modify(todo_row.id, todo_row);
        else
            ui_this._api.add(todo_row);
        ui_this.todo_render();
        ui_this.clear_form_input(ui_this.form);
    });
}



function detect_list(){
    let ui_this = this;
    this.list.addEventListener('click', function(e){
        let data_id = e.target.closest('.task-item').dataset.id;
        if(e.target.classList.contains('task-delete')){
            ui_this.remove_row(data_id);
        }
        else if(e.target.classList.contains('task-modify')){
            let task_row  = ui_this._api.read(data_id);
            ui_this.set_todo_data(ui_this.form, task_row);
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
        <div class="task-item cl_fl" data-id="${item.id}">
                <div class="check">
                    <input type="checkbox" name="${item.complete}">
                </div>
                <div class="col detail">
                    <div class="title">${item.title}</div>
                </div>
                <div class="tool-set">
                    <button class="task-modify">修改</button>
                    <button class="task-delete">删除</button>
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

