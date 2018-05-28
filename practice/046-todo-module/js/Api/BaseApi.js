function BaseApi(list, max_id){
    this.id = max_id || 1;
    this.list = list;
}



BaseApi.prototype.$add = add;
BaseApi.prototype.$remove = remove;
BaseApi.prototype.$modify = modify;
BaseApi.prototype.$read = read;



function add(row){
    row.id =  this.id++;
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


//找到数组索引
function find_list_by_id(list, id){
    return list.findIndex(function (item){
         return item.id == id;
     });  
 }
 
 //找到数组索引的内容
 function find_list_by_row(list, id){
    return list.find(function (item){
         return item.id == id;
    })
 }
