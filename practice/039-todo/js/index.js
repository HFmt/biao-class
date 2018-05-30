let find = require('./find_module');

let todo_list = [
    {
        id: 1,
        name: '买菜',
        completed: false,
    },
    ];


function Todo(list){
    this.id = 1;
    this.list = list;
}

Todo.prototype.add = add;
Todo.prototype.remove = remove;
Todo.prototype.modify = modify;
Todo.prototype.read = read;


//增
    function add(row){
        row.id = ++this.id;
        this.list.push(row);
    }

//删
    function remove(id){
        if(id < 1)
            return;
        this.list.splice(find.find_index_by_id_for(todo.list, id), 1);
    }

//改
    function modify(id, new_row){
        if(id < 1)
            return;
        let index = find.find_index_by_id_for(todo.list, id);
        let old_row = this.list[index];
        this.list[index] = Object.assign({}, old_row, new_row);
    }

// 查
    function read(id){
        if(id)
            console.log(find.find_row_by_id_for(todo.list, id)) ;
        else
            console.log(this.list) ;
    }



let todo = new Todo(todo_list);

todo.read(1);
