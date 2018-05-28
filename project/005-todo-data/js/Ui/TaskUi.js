window.TaskUi = TaskUi;

function TaskUi(config){
    let default_config = {
        form_selector: '#task-form',
        list_selector: '#task-list',
        input_selector: '#task-input',
        select_selector:'#task-select',
        on_init: null,
        input_focus: null,
        input_blur: null
    }
    let cfg = this.config = Object.assign({}, default_config, config);
    this.form = document.querySelector(cfg.form_selector);
    this.input = document.querySelector(cfg.input_selector);
    this.list = document.querySelector(cfg.list_selector);
    this.select = document.querySelector(cfg.select_selector);
    this._api = new TaskApi();
}



TaskUi.prototype.init = init;
TaskUi.prototype.detect_submit = detect_submit;
TaskUi.prototype.render = render;
TaskUi.prototype.detect_list = detect_list;
TaskUi.prototype.remove_row = remove_row;
TaskUi.prototype.clear_form_input = helper.clear_form_input;
TaskUi.prototype.get_todo_data = helper.get_todo_data;
TaskUi.prototype.set_todo_data = helper.set_todo_data;
TaskUi.prototype.detect_input_focus = detect_input_focus;
TaskUi.prototype.detect_input_blur = detect_input_blur;

function init(){
    this.render(1);
    this.detect_submit();
    this.detect_list();
    if(this.config.on_init)
        this.config.on_init();
    this.detect_input_focus();
    this.detect_input_blur()
}

function detect_input_focus(){
    let task_this = this;
    this.input.addEventListener('focus', function (){
        if(task_this.config.input_focus)
            task_this.config.input_focus();
    });
}

function detect_input_blur(){
    let task_this = this;
    this.input.addEventListener('blur', function (){
        if(task_this.config.input_blur)
            task_this.config.input_blur();
    });
}

function detect_submit(){
    let task_this = this;
    this.form.addEventListener('submit', function (e){
        e.preventDefault();
        if(task_this.form.querySelector('[name = title]').value == '')
            return;
        let todo_row = task_this.get_todo_data(task_this.form)
        if(todo_row.id)
            task_this._api.modify(todo_row.id, todo_row);
        else
            task_this._api.add(todo_row);
        task_this.render();
        task_this.clear_form_input(task_this.form);
    });
}



function detect_list(){
    let ui_this = this;
    this.list.addEventListener('click', function(e){
        let delete_click = e.target.classList.contains('task-delete')
        , modify_click = e.target.classList.contains('task-modify')
        ;
        let task_item = e.target.closest('.task-item');
        let task_id;
        if(task_item)
            task_id = parseInt(task_item.dataset.id);

        if(delete_click){
            ui_this.remove_row(task_id);  
        }
        else if(modify_click){
            let task_row  = ui_this._api.$find_row_id(task_id);
            ui_this.set_todo_data(ui_this.form, task_row);
            ui_this.form.querySelector('[type = submit]').innerHTML = '确认';
        }
    });
}


function remove_row(id){
    this._api.remove(id);
    this.render();
}

function render(cat_id){
    let ui_this = this;
    let task_list = cat_id ? this._api.read_by_cat(cat_id): this._api.read();

    if(!task_list.length){
        this.list.innerHTML = `<div class="empty">暂无数据</div>`;
        return;
    }

    this.list.innerHTML = '';
    task_list.forEach(function (item){
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


