let output = {
    find_row_by_id_forEach: find_row_by_id_forEach
  , find_index_by_id_forEach: find_index_by_id_forEach
  , find_row_by_id_for: find_row_by_id_for
  , find_index_by_id_for: find_index_by_id_for
  , find_row_by_id_find: find_row_by_id_find
  , find_index_by_id_find: find_index_by_id_find
}


//forEach方法

// 找到数组对应的值，并返回
function find_row_by_id_forEach(arr, id){
    let arr_row;
    arr.forEach(function (row){
        if(row.id == id)
            return arr_row = row;
    });
    return arr_row;
}

//找到数组的索引并返回
function find_index_by_id_forEach(arr, id){
    let index;
    arr.forEach(function (row, item){
        if(row.id == id)
            index = item;
    });
    return index;
}


//for 方法

// 找到数组对应的值，并返回
function find_row_by_id_for(arr, id){
    for(let i = 0; i< arr.length; i++){
        if(arr[i].id == id)
            return arr[i];
    }
}

//找到数组的索引并返回
function find_index_by_id_for(arr, id){
for(let i = 0; i< arr.length; i++){
    if(arr[i].id == id)
        return i;
    }
}

// IE 11 及更早版本不支持 (find && findIndex 方法)

// 找到数组对应的值，并返回
function find_row_by_id_find(arr, id){
    return arr.find(function(row){
        return row.id == id;
    });
}

//找到数组的索引并返回
function find_index_by_id_find(arr, id){
    return arr.findIndex(function(row){
        return row.id == id;
    });
}

module.exports = output;