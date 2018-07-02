
window.http = {
    post: function (url, data) {
        data = data || {};

        data.app_key = '961f96d949af4bd8e14d58bfc336e520e16f4c85338394b5f2fae6e9dd4678a9';
        data.timestamp = (new Date).getTime();
        data.signature = this.sgin(data.app_key, data.timestamp);

        return axios.post('http://mock.biaoyansu.com/api/' + url, data)
            .then(function (res) {
                return res;
            });
    },

    sgin: function (app_key, data) {
        return btoa(app_key + data);
    }
}
// 88b2fa8844a680b943e623bb7b04b7758ccbce01aae37e36b16ac889ca3b91f9

// 961f96d949af4bd8e14d58bfc336e520e16f4c85338394b5f2fae6e9dd4678a9