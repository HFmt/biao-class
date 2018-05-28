window.CatUi = CatUi;

function CatUi(config){
    let default_config = {
        form_selector: '#cat-form',
        add_btn_selector: '#add-cat',
        input_selector: '#cat-form',
        list_selector: '#cat-list',
        click_fn : null,
    }

    let cfg = this.config = Object.assign({}, default_config, config);
    this.form = document.querySelector(cfg.form_selector);
    this.add_btn = document.querySelector(cfg.add_btn_selector);
    this.cat_input = document.querySelector(cfg.input_selector);
    this.list = document.querySelector(cfg.list_selector);
    this._api = new CatApi();
    this.updating_item = null;
}


CatUi.prototype.get_todo_data = get_todo_data;
CatUi.prototype.set_todo_data = set_todo_data;
CatUi.prototype.init = init;
CatUi.prototype.detect_add_btn = detect_add_btn;
CatUi.prototype.render = render;
CatUi.prototype.detect_list = detect_list;
CatUi.prototype.remove_row = remove_row;
CatUi.prototype.show_cat_input = show_cat_input;
CatUi.prototype.detect_submit_list = detect_submit_list;
CatUi.prototype.clear_form_input = helper.clear_form_input;
CatUi.prototype.get_todo_data = helper.get_todo_data;
CatUi.prototype.set_todo_data = helper.set_todo_data;
CatUi.prototype.show_updating_item = helper.show_updating_item;

function init(){
    this.detect_submit_list();
    this.detect_add_btn();
    this.detect_list();
    this.render();
}

function detect_list(){
    
    let cat_this = this;
    this.list.addEventListener('click', function(e){
        let cat_item = e.target.closest('.cat-item');
        let data_id;
        if(cat_item)
            data_id = parseInt(cat_item.dataset.id);

        if(e.target.classList.contains('cat-delete')){
            cat_this.remove_row(data_id);
        }
        else if(e.target.classList.contains('cat-modify')){
            if(cat_this.updating_item)
                cat_this.updating_item.hidden = false;
            let cat_row  = cat_this._api.$find_row_id(data_id);
            cat_this.set_todo_data(cat_this.form, cat_row);
            cat_this.show_cat_input();
            cat_item.hidden = true;
            cat_item.insertAdjacentElement('afterend', cat_this.form); // 表单占坑
            cat_this.form.querySelector('[type = submit]').innerHTML = '确认';
            cat_this.updating_item = cat_item;
        }
        else{
            if(!data_id)
                return; 
            if(cat_this.config.click_fn){
                cat_this.config.click_fn(data_id);
            }
        }
    });
}

//添加类目
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
        ui_this.render();
        ui_this.clear_form_input(ui_this.form);
    });
}


function remove_row(id){
    this._api.remove(id);
    this.render();
}

function render(){
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
                    item.id == 1? '' : 
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

/**
 * 显示正在更新的那一条分组
 * 比如说用户提交了更新表单或取消更新的时候就应该隐藏表单，
 * 同时显示正在更新的那一条分组，这个方法就是用来恢复显示分组的
 * */
function show_updating_item(){
    if(this.updating_item)
        this.updating_item.hidden = false;
}


