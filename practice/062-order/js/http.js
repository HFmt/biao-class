
window.http = {
    post: function (url, data) {
        data = data || {};

        data.app_key = '205bd4113c7ec62f900f46b1ea3bb3fb9c2b9f924109d472c663de49bc1eb871';
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
};
