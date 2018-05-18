window.Ui = Ui_todo;

function Ui_todo(form_selector,input_selector, list_selector){
    this.form = document.querySelector(form_selector);
    this.input = document.querySelector(input_selector);
    this.list = document.querySelector(list_selector);
    this._api = new Api_todo();
}

Ui.prototype.get_form_data = get_form_data;
Ui.prototype.set_form_data = set_form_data;
Ui.prototype.render = render;
Ui.prototype.init = init;
Ui.prototype.detect_submit = detect_submit;
Ui.prototype.delete_list = delete_list;
Ui.prototype.ui_remove = ui_remove;

function get_form_data(todo_form){
    data = {};
    let list = todo_form.querySelectorAll('[name]');
    list.forEach(function (input){
        switch(input.nodeName){
            case 'INPUT' :
                switch(input.type){
                    case 'text':
                    case 'search':
                    case 'password':
                    case 'number':
                    case 'file':
                    case 'hidden':
                        data[input.name] = input.value;
                        break;
                    case 'radio':
                    case 'checkbox':
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

function set_form_data(todo_form, data){
   for(let key in data){
       let value = data[key];

       let input = todo_form.querySelector(`[name=${key}]`);
       if(!input)
       continue;
       let data_type = typeof(value);

       switch (data_type) {
        case 'string':
        case 'number':
          input.value = value;
          break;
        case 'boolean':
          input.checked = value;
          break;
      }
   }

    
}

function init(){
    this.render();
    this.detect_submit();
    this.delete_list();
}

function delete_list(){
    let ui_this = this;
    this.list.addEventListener('click', function (e){
        if(e.target.classList.contains('todo-delete'))
            ui_this.ui_remove(e.target.closest('.todo-item').dataset.id);
        else if(e.target.classList.contains('todo-modify')){
            let todo_row = ui_this._api.read(e.target.closest('.todo-item').dataset.id);
            ui_this.set_form_data(ui_this.form, todo_row);
        }
    });
}

function detect_submit(e){
    let ui_this = this;
    this.form.addEventListener('submit', function (e){
        e.preventDefault();
        if(ui_this.input.value == '')
            return;
        let todo_row = ui_this.get_form_data(ui_this.form);
        if(todo_row.id)
        ui_this._api.modify(todo_row.id, todo_row);
        else
            ui_this._api.add(todo_row);
        ui_this.input.value = '';
        ui_this.render();
    });
}

function ui_remove(id){
    this._api.remove(id);
    this.render();
}


function render(){
    let ui_this = this;
    this.list.innerHTML = '';
    this._api.read().forEach(function (item){
        ui_this.list.innerHTML +=
            `
            <div class="todo-item" data-id="${item.id}">
                <div class="check">
                    <input type="checkbox" name="complete">
                </div>
                <div class="detail">
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








