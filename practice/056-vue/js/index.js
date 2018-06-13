
let root = new Vue({
    el: '.root',
    data: {
        current: null,
        memoList: []
    },
    methods: {
        memoItem(item) {
            this.current = item;
        },
        add() {
            this.current = {title: 'new', content: '请输入'};
            this.memoList.push(this.current);
        },
        remove(list,item) {
            this.memoList.splice(this.findItem(list, item),1);
        },
        findItem(item, id) {
            return item.findIndex(function (key) {
                
                return key.id == id;
            });
        },
        syncTO(memoList) {
            localStorage.setItem('memoList', JSON.stringify(memoList));
        },
        syncForm() {
            this.memoList = JSON.parse(localStorage.getItem('memoList')) || [
                {
                    id: 1,
                    title: 'title a',
                    content: 'asam a'
                },
                {   
                    id: 2,
                    title: 'title b',
                    content: 'asam b'
                },
                {   
                    id: 3,
                    title: 'title c',
                    content: 'asam c'
                }
            ];
        }
    },
    watch: {
        memoList: {
            deep: true,
            handler(n) {
                this.syncTO(n);                
            }
        }
    },
    created () {
        this.syncForm()
    }
});

let test = new Vue({
    el: '.test',
    data: {
        name: 'sam',
        child:{
            child: {
                name:'fmt'
            }
        }
    },
    watch: {
        name(n, o) {
            console.log('n:', n);
        },
        child: {
            deep: true,
            handler(n) {
                console.log('n:', n.child.name);
                
            }
        }
    }
})