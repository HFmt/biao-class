window.TaskApi = TaskApi;

function TaskApi(){
    this.id = 0;
    this.list = [{
        id        : this.id,
        title     : '买菜',
        completed : false,
        group_id  : 1,
    }
    ];
    this._baseApi = new BaseApi(this.list);
}


TaskApi.prototype.add = add;
TaskApi.prototype.remove = remove;
TaskApi.prototype.modify = modify;
TaskApi.prototype.read = read;



function add(row){
    if(!row.title)
        return;
    return this._baseApi.add(row);
}

function remove(id){
    return this._baseApi.remove(id);
}

function modify(id, new_row){
    return this._baseApi.modify(id, new_row);
}

function read(id){
    return this._baseApi.read(id);
}

