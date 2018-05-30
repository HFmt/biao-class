let catList = [
    {
        id: 1,
        title: '默认',
    },
    {
        id: 2,
        title: '生活',
    },
    {
        id: 3,
        title: '活着',
    }
];

function CatApi(max_id){
    this.config = {
        title: {
            max_length: 10,
        }
    }
  BaseApi.call(this, catList, max_id);
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
