window.Api = Todo_api;

function Todo_api(){
    this.id = 0;
    this.list = [];
}


Todo_api.prototype.add = add;
Todo_api.prototype.remove = remove;
Todo_api.prototype.modify = modify;
Todo_api.prototype.read = read;




function add(row){
    row.id = ++ this.id;
    this.list.unshift(row);
}

function remove(id){
    if(id < 0 )
        return;
    this.list.splice(find_list_by_id(this.list, id), 1);
}

function modify(id, new_row){

    let item = find_list_by_id(this.list, id);
    let old_row =this.list[item];
    this.list[item] = Object.assign({}, old_row, new_row);
}

function read(id){
    if(id)
        return find_list_by_row(this.list, id);
    else
        return this.list;
}


function find_list_by_id(arr, id){
    for(let i =0; i< arr.length; i++){
        if(arr[i].id == id)
            return i;
    }
}

function find_list_by_row(arr, id){
    for(let i =0; i< arr.length; i++){
        if(arr[i].id == id)
            return arr[i];
    }
}
