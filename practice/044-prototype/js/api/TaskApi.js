let test_list = [];

function TaskApi(max_id){
  BaseApi.call(this, test_list, max_id);
}

TaskApi.prototype = Object.create(BaseApi.prototype);

TaskApi.prototype.add = add;
TaskApi.prototype.remove = remove;
TaskApi.prototype.modify = modify;
TaskApi.prototype.read = read;



function add(row){
    console.log(1);
    if(!row.title)
        return;
    return this.$add(row);
}

function remove(id){
    return this.$remove(id);
}

function modify(id, new_row){
    return this.$modify(id, new_row);
}

function read(id){
    return this.$read(id);
}
