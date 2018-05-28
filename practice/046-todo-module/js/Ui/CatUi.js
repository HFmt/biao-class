window.CatUi = CatUi;

function CatUi(form_selector, add_btn_selector, input_selector, list_selector){
    this.form = document.querySelector(form_selector || '#cat-form');
    this.add_btn = document.querySelector(add_btn_selector || '#add-cat');
    this.cat_input = document.querySelector(input_selector || '#cat-form');
    this.list = document.querySelector(list_selector || '#cat-list');
    this._api = new CatApi();
}


CatUi.prototype.get_todo_data = get_todo_data;
CatUi.prototype.set_todo_data = set_todo_data;
CatUi.prototype.init = init;
CatUi.prototype.detect_add_btn = detect_add_btn;
CatUi.prototype.cat_render = cat_render;
CatUi.prototype.detect_list = detect_list;
CatUi.prototype.remove_row = remove_row;
CatUi.prototype.show_cat_input = show_cat_input;
CatUi.prototype.detect_submit_list = detect_submit_list;
CatUi.prototype.clear_form_input = helper.clear_form_input;

function init(){
    this.detect_submit_list();
    this.detect_add_btn();
    this.detect_list();
    this.cat_render();
}

function detect_list(){
    
    let ui_this = this;
    this.list.addEventListener('click', function(e){
        let cat_item = e.target.closest('.cat-item');
        let cat_id;
        if(cat_item)
            cat_id = cat_item.dataset.id;

        if(e.target.classList.contains('cat-delete')){
            ui_this.remove_row(cat_id);
            console.log(cat_id);
        }
        else if(e.target.classList.contains('cat-modify')){
            let cat_row  = ui_this._api.read(cat_id);
            ui_this.set_todo_data(ui_this.form, cat_row);
            cat_item.hidden = true;
            cat_item.insertAdjacentElement('afterend', ui_this.form); // 表单占坑
            ui_this.form.querySelector('[type = submit]').innerHTML = '确认';
        }
    });
}

function detect_add_btn(){
    let ui_this = this;
    this.add_btn.addEventListener('click', function (){
        ui_this.show_cat_input();
    });
}

function show_cat_input(){
    this.cat_input.hidden = false;
}

function hide_cat_input(){
    this.cat_input.hidden = true;
}


function detect_submit_list(){
    let ui_this = this;
    this.form.addEventListener('submit', function(e){
        e.preventDefault();
        if(ui_this.form.querySelector('[name = title]').value == '')
            return;
        let cat_row = ui_this.get_todo_data(ui_this.form)
        if(cat_row.id)
            ui_this._api.modify(cat_row.id, cat_row);
        else
            ui_this._api.add(cat_row);
        ui_this.cat_render();
        ui_this.clear_form_input(ui_this.form);
    });
}


function remove_row(id){
    this._api.remove(id);
    this.cat_render();
}

function cat_render(){
    let ui_this = this;
    this.list.innerHTML = '';
    this._api.read().forEach(function (item){
        ui_this.list.innerHTML += `
        <div class="cat-item cl_fl" data-id="${item.id}">
            <div class="cat-title">
                <input type="text" value="${item.title}" disabled>
            </div>
            <div class="tool-set">
                ${
                    item.id == 0? '' : 
                    `
                    <button class="cat-modify">修改</button>
                    <button class="cat-delete">删除</button>
                    `
                }
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

