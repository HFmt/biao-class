let taskList = [];

function TaskApi(max_id){
    this.config ={
        title: {
            length: 10
        }
    }
    BaseApi.call(this, taskList, max_id);
}

TaskApi.prototype = Object.create(BaseApi.prototype);

BaseApi.prototype.add = add;
BaseApi.prototype.remove = remove;
BaseApi.prototype.update = update;
BaseApi.prototype.read = read;

//增 删 改 查
function add(row){
    if(row.title.length > this.config.title.length)
        throw `title should not greater than ${this.config.title.length}`;
    if(!row.title)
        return;
    return  this.$add(row);
}
function remove(id){
    if(id == 1)
        return;
    return this.$remove(id);
}

function update(new_row, id){
    return this.$update(new_row, id);;
}
function read(id){
    return this.$read();
}