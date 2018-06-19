
window.http = {
    post: function (url, data) {
        data = data || {};
    
    data.app_key = 'a664cea592878e5bc349626f389a120eb5b5a94648e21deb68a894e38b4dd872';
    data.timestamp = (new Date).getTime();
    data.signature = this.sgin(data.app_key, data.timestamp);

    return axios.post('http://mock.biaoyansu.com/api/' + url, data)
                .then(function (res) {
                    return res;
            });
    },

    sgin : function (app_key, data) {
        return btoa(app_key + data);
    }
};
