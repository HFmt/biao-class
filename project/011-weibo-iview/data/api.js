const key = '92c59a9bbd34c349db233adca806b8da86f92cf4444165cae422ff2f2088c33d';

const baseApi = "http://mock.biaoyansu.com/api/1/";


const sign = (key, timestamp) => {
    return btoa(key + timestamp);
}

const api = (url, params) => {

    let timestamp = (new Date).getTime();
    let signature = sign(key, timestamp);

    let opt = {
        headers: {
            'biao-mock-app-key': key,
            'biao-mock-timestamp': timestamp,
            'biao-mock-signature': signature,
        }
    }

    url = baseApi + url;

    return axios
        .post(url, params, opt)
        .then(res => {
            return res.data;
        });
}

window.api = api;