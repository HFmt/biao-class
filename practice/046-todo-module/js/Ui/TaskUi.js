window.TaskUi = TaskUi;

function TaskUi(form_selector, list_selector){
    this.form = document.querySelector(form_selector || '#task-form');
    this.list = document.querySelector(list_selector || '#task-list');
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

function init(){
    
    this.detect_submit();
    this.detect_list();
    this.render();
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
        ui_this.render();
        ui_this.clear_form_input(ui_this.form);
    });
}



function detect_list(){
    let ui_this = this;
    this.list.addEventListener('click', function(e){
        let task_item = e.target.closest('.task-item');
        let task_id;
        if(task_item)
            task_id = parseInt(task_item.dataset.id);

        if(e.target.classList.contains('task-delete')){
            console.log(task_id);
            ui_this.remove_row(task_id);  
        }
        else if(e.target.classList.contains('task-modify')){
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


