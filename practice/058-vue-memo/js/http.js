window.http = {
    post: function (url, data) {
        axios.post('http://mock.biaoyansu.com/' + url, data)
            .then(function (res) {
                return res;
            });
    },
    sgin: function (key, data) {
        return btoa(key + data);
    }
}