
let find = require('./find_module');

    let id_current = 1;
    let todo_list = [
    {
        id: id_current,
        name: '买菜',
        completed: false,
    },
    ];

//增
    function add(row){
        row.id = ++id_current;
        todo_list.push(row);
    }

//删
    function remove(id){
        if(id < 1)
            return;
        todo_list.splice(find.find_index_by_id_for(todo_list, id), 1);
    }

//改
    function modify(id, new_row){
        if(id < 1)
            return;
        let index = find.find_index_by_id_for(todo_list, id);
        let old_row = todo_list[index];
        todo_list[index] = Object.assign({}, old_row, new_row);
    }

// 查
    function read(id){
        if(id)
            console.log(find.find_index_by_id_for(todo_list, id)) ;
        else
            console.log(todo_list) ;
    }

    
    add({
        name: '切菜',
        completed: false,
    });
    
    // console.log(todo_list);
  

    // remove(1);
    // console.log(todo_list);

    read(1);

    modify(1, {
        name: '洗菜'
    });
    // console.log(todo_list);

    console.log(find.find_row_by_id_for(todo_list, 1)) ;
