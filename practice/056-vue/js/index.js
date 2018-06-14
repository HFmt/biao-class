
let root = new Vue({
    el: '.root',
    data: {
        current: null,
        memoList: [],
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
            this.memoList.splice(this.findItem(list, item), 1);
            this.current = this.memoList;
        },
        findItem(item, title) {
            return item.findIndex(function (key) {
                return key.title == title;
            });
        },
        syncTO(memoList) {
            localStorage.setItem('memoList', JSON.stringify(memoList));
        },
        syncForm() {
            this.memoList = JSON.parse(localStorage.getItem('memoList')) || [
                {
                    title: 'title a',
                    content: 'asam a'
                },
                {   
                    title: 'title b',
                    content: 'asam b'
                },
                {   
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