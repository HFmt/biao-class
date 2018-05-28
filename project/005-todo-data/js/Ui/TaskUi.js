window.TaskUi = TaskUi;

function TaskUi(config){
    this._model_name = 'task';
    let default_config = {
        form_selector: '#task-form',
        list_selector: '#task-list',
        input_selector: '#task-input',
        select_selector:'#task-select',
        on_init: null,
        on_click: null,
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
        let task_form = task_this.get_todo_data(task_this.form);
        if(task_form.id)
            task_this._api.modify(task_form.id, task_form);
        else
            task_this._api.add(task_form);
        task_this.render(task_form.cat_id);
        task_this.clear_form_input(task_this.form);
    });
}



function detect_list(){
    let task_this = this;
    this.list.addEventListener('click', function(e){
        let delete_click = e.target.classList.contains('task-delete')
        , modify_click = e.target.classList.contains('task-modify')
        , checker_click = e.target.classList.contains('checker')
        ;
        let task_item = e.target.closest('.task-item');
        
        let task_id
          ;
        if(task_item){
            task_id = parseInt(task_item.dataset.id);
        }

        if(delete_click){
            task_this.remove_row(task_id);  
            task_this.render(e.target.dataset.id);
        }
        else if(modify_click){
            let task_row  = task_this._api.$find_row_id(task_id);
            task_this.set_todo_data(task_this.form, task_row);
            task_this.form.querySelector('[type = submit]').innerHTML = '确认';
        }
        else if(checker_click){
            console.log(e.target.checked);
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
        ui_this.list.innerHTML += 
        `
            <div class="task-item cl_fl" data-id="${item.id}">
                <div class="check">
                    <input class="checker" type="checkbox" name="${item.completed}">
                </div>
                <div class="col detail">
                    <div class="title">${item.title}</div>
                </div>
                <div class="tool-set">
                    <button class="task-modify">修改</button>
                    <button class="task-delete" data-id="${item.cat_id}">删除</button>
                </div>
            </div>
        `
        ;
    });
}


