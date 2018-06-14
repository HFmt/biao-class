

let root = new Vue({
    el: '.root',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString(),
        memoList: [
            {
                title: 'new a',
                content: 'asam a'
            },
            {
                title: 'new b',
                content: 'asam b'
            },
            {
                title: 'new c',
                content: 'asam c'
            }
        ]
    }
});