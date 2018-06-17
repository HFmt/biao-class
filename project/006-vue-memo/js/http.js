window.http = {
    post: function (url, data) {
        data = data || {};

        data.app_key="f908f3fcd0c133cce89a04cac38cad16eebc7aa5fe917a5025e7c26ce70790d7"; // 全局参数，应用id
        data.timestamp = (new Date).getTime(); // 全局参数，时间戳，可通过(new Date()).getTime();得到 
        data.signature  = this.sgin (data.app_key, data.timestamp);

        return axios.post('http://mock.biaoyansu.com/api/' + url, data)
            .then(function (res) {
                return res;
            });
    },
    
    sgin: function (key, data) {
        return btoa(key + data);
    }
}