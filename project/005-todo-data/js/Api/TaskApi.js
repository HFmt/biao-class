let taskList =  [
    {
    id: 101,
    title: '起床',
    completed: false,
    cat_id: 1
    },
    {
    id: 102,
    title: '如厕',
    completed: true,
    cat_id: 1
    },
    {
    id: 103,
    title: '跑步',
    completed: false,
    cat_id: 2
    },
    {
    id: 104,
    title: '跳绳',
    completed: false,
    cat_id: 2
    },
];

function TaskApi(max_id){
  BaseApi.call(this, taskList, max_id);
}

TaskApi.prototype = Object.create(BaseApi.prototype); 

TaskApi.prototype.add = add;
TaskApi.prototype.remove = remove;
TaskApi.prototype.modify = modify;
TaskApi.prototype.read = read;
TaskApi.prototype.read_by_cat = read_by_cat;
TaskApi.prototype.remove_cat_row = remove_cat_row;
TaskApi.prototype.set_completed = set_completed;



function add(row){
    if(!row.title)
        return;
    if(!row.cat_id)
        row.cat_id = 1;
    return this.$add(row);
}

function remove(id){
    return this.$remove(id);
}

function modify(id, new_row){
    return this.$modify(id, new_row);
}

function read(){
    return this.list =  this.$read();
}

function read_by_cat(cat_id){
    let task_list = this.read();

    let result = task_list.filter(function (row){
        return row.cat_id == cat_id;
    });
    return result;
}


function remove_cat_row(cat_id){
    this.list = this.list.filter(function (item){
        return item.cat_id != cat_id;
    });
}

function set_completed (id, completed) {
    let row = this.$find_row_id(id);
    if (!row)
      return false;
    row.completed = completed;
}