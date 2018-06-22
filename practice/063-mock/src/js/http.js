
window.http = {
    post: function (url, data) {
        data = data || {};

        data.app_key = '6bcd439b745ed545dd3799504bbfb27fd0cc2a35d24b8a335d440f72eb7e9efc';
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
