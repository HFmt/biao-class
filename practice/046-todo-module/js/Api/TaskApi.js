let taskList =  [
    {
    id: 101,
    title: '起床',
    completed: false,
    cat_id: 1
    },
    {
    id: 102,
    title: '拉屎',
    completed: false,
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
