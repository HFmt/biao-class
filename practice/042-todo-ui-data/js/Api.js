window.Api = Api_todo;

function Api_todo(){
    this.id = 1;
    this.list = [
        {
            id: this.id,
            title: '洗漱',
            completed: false,
        },
        ];
}

Api_todo.prototype.add = add;
Api_todo.prototype.remove = remove;
Api_todo.prototype.modify = modify;
Api_todo.prototype.read = read;


//增
    function add(row){
        row.id = ++this.id;
        this.list.push(row);
        console.log(this.list)
    }

//删
    function remove(id){
        if(id < 1)
            return;
        this.list.splice(find_index_by_id_for(this.list, id), 1);
    }

//改
    function modify(id, new_row){
        if(id < 1)
            return;
        let index = find_index_by_id_for(this.list, id);
        let old_row = this.list[index];
        this.list[index] = Object.assign({}, old_row, new_row);
    }

// 查
    function read(id){
        if(id)
            return find_row_by_id_for(this.list, id) ;
        else
            return this.list;
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
