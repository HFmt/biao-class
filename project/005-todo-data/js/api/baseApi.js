function BaseApi(list, max_id){
    this.id = max_id || 1;
    this.list = list;
}



BaseApi.prototype.$add = add;
BaseApi.prototype.$remove = remove;
BaseApi.prototype.$modify = modify;
BaseApi.prototype.$read = read;
BaseApi.prototype.$find_row_id = find_row_id;
BaseApi.prototype.$sync_to = sync_to;
BaseApi.prototype.$sync_from = sync_from;



function add(row){
    row.id =  this.id++;
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

function read(){
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
    });
 }


 function find_row_id(id){
    return find_list_by_row(this.list, id);
 }

 function sync_to(model){
    store.store_set(model+'-list', this.list); 
 }  

 function sync_from(model){
    return store.store_get(model+'-list');
 }