let catList = [
    {
        title: '默认',
        id: 0,
    }
];

function CatApi(max_id){
    this._model_name = 'cat';
    this.config = {
        title: {
            max_length: 10,
        }
    }
    this.list = catList || [] ;
    BaseApi.call(this, this.list, max_id);
}

CatApi.prototype = Object.create(BaseApi.prototype);

CatApi.prototype.add = add;
CatApi.prototype.remove = remove;
CatApi.prototype.modify = modify;
CatApi.prototype.read = read;



function add(row){
    if(row.title.length > this.config.title.max_length)
        throw `title should not greater than ${this.config.title.max_length}`;
    if(!row.title)
        return;
    return this.$add(row);
}

function remove(id){
    return this.$remove(id);
}

function modify(id, new_row){
    return this.$modify(id, new_row);
}

function read(){
    return this.$read();
}


function set_select(){
    
}