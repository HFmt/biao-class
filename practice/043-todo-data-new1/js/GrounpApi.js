window.GrounpApi = GrounpApi;

function GrounpApi(){
    this.id = 0;
    this.list = [{
        id        : this.id,
        title     : '买菜',
        completed : false,
        group_id  : 1,
    }
    ];
    this._baseApi = new Base_Api(this.list);
}


GrounpApi.prototype.add = add;
GrounpApi.prototype.remove = remove;
GrounpApi.prototype.modify = modify;
GrounpApi.prototype.read = read;



function add(row){
    if(!row.title.length > 10)
        throw 'title length should not greater than 10';
    if(!row.title)
        return;
    return this._baseApi.add(row);
}

function remove(id){
    if(id == 1)
        return;
    return this._baseApi.remove(id);
}

function modify(id, new_row){
    return this._baseApi.modify(id, new_row);
}

function read(id){
    return this._baseApi.read(id);
}

