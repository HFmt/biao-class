function BaseApi(list, max_id){
    this.id = max_id || 0;
    this.list = list;
}



BaseApi.prototype.$add = add;
BaseApi.prototype.$remove = remove;
BaseApi.prototype.$modify = modify;
BaseApi.prototype.$read = read;



function add(row){
    row.id =  this.id ++;
    this.list.push(row);
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
