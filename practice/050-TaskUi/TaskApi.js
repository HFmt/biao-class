
let taskList = [];

function TaskApi(max_id){
    BaseApi.call(this, taskList, max_id);
}

TaskApi.prototype = Object.create(BaseApi.prototype);

BaseApi.prototype.add = add;
BaseApi.prototype.remove = remove;
BaseApi.prototype.update = update;
BaseApi.prototype.read = read;

//增 删 改 查
function add(row){
    if(!row.title)
        return;
    return  this.$add(row);
}
function remove(id){
    return this.$remove(id);
}

function update(new_row, id){
    return this.$update(new_row, id);;
}
function read(id){
    return this.$read(id);
}