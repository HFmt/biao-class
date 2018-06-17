
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
            
            let isUpdate = !!this.current.id;

            let api = isUpdate ? 'update' : 'create';
            
            http.post('memo/' + api, this.current).then( res => {
                let newRow = res.data.data;
                this.current = newRow;
                if(!isUpdate)
                    this.memoList.push(newRow);
            });
        },
        remove(id) {
            http.post('memo/delete', { id: id}).then(res => {
               this.syncForm();
           });
        },
        syncTO(memoList) {
            localStorage.setItem('memoList', JSON.stringify(memoList));
        },
        syncForm() {
            http.post('memo/read').then(res => {
                this.memoList = res.data.data; 
            });
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
        this.syncForm();
    }
});