

function TaskUi(form_selector, list_selector){
    this.form = document.querySelector(form_selector || '#task-form');
    this.list = document.querySelector(list_selector || '#task-list'); 
    this._api = new TaskApi();
}

TaskUi.prototype.init = init;
TaskUi.prototype.detect_submit = detect_submit;
TaskUi.prototype.detect_list = detect_list;
TaskUi.prototype.get_task_form = get_task_form;
TaskUi.prototype.set_task_form = set_task_form;
TaskUi.prototype.task_rend = task_rend;

function init(){
    this.detect_submit();
    this.detect_list();
}

function detect_submit(){
    let task_this = this;
    this.form.addEventListener('submit', function(e){
        e.preventDefault();
        task_this._api.add(get_task_form(task_this.form));
        task_this.task_rend();
    });
}

function detect_list(){
    let task_this = this;
    this.list.addEventListener('click', function (e){
        let row_id = e.target.closest('.task-item').dataset.id;
        let update_btn = e.target.classList.contains('task-update');
        let delete_btn = e.target.classList.contains('task-delete');
        if(update_btn){
            let task_row = task_this._api.read(row_id);
            set_task_form(task_this.form, task_row);
        }
    });
}

function task_rend(){
    let task_this = this;
    this.list.innerHTML = '';
    this._api.read().forEach(function (item){
        task_this.list.innerHTML +=
        `
        <div class="task-item cl_fl" data-id="${item.id}">
            <div class="check">
                <input type="checkbox" name="${item.complete}">
            </div>
            <div class="col detail">
                <div class="title">${item.title}</div>
            </div>
            <div class="tool-set">
                <button class="task-update">修改</button>
                <button class="task-delete">删除</button>
            </div>
        </div>
        `
    });
}

function get_task_form(task_form){
    let data ={};
    let list = task_form.querySelectorAll('[name]');
        list.forEach(function (input){
            switch(input.nodeName){
                case 'INPUT':
                    switch(input.type){
                        case 'text':
                        case 'hidden':
                        case 'password':
                        case 'number':
                            data[input.name] = input.value;
                            break;
                        case'checkbox':
                        case 'radio':
                            data[input.name] = input.checked
                            break;
                    }
                    break
                case 'TEXTAREA':
                    data[input.name] = value;
                    break;
            }
        });
    return data;
}

function set_task_form(task_form, data){
    for(let val in data){
        let input = task_form.querySelector(`[name=${val}]`);
        switch(typeof(data[val])){
            case 'string':
            case 'nubmer':
                input.value = data[val];
                break;
            case 'boolean':
                input.checked = data[val];
                break;
        } 
    }
}


let taskUi = new TaskUi();

taskUi.init();