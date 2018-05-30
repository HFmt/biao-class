
function BaseApi(max_id){
    this.id = max_id || 1;
    this.list = [];
}

BaseApi.prototype.$add = add;
BaseApi.prototype.$remove = remove;
BaseApi.prototype.$update = update;
BaseApi.prototype.$read = read;

//增 删 改 查
function add(row){
    row.id = this.id ++;
    this.list.push(row);
}

function remove(id){
   this.list.splice(find_todo_id(this.list, id), 1);
}

function update(new_row, id){
    let item = find_todo_id(this.list, id);
    let old_row =this.list[item];
    this.list[item] = Object.assign({}, old_row, new_row);
}
function read(id){
    if(id)
        return find_todo_row(this.list, id);
    else
        return this.list;
    
}

//找到数组索引
function find_todo_id(list, id){
   return list.findIndex(function (item){
        return item.id == id;
    });  
}

//找到数组索引的内容
function find_todo_row(list, id){
   return list.find(function (item){
        return item.id == id;
   });
}
