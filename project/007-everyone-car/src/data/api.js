


const AppKey = '88b2fa8844a680b943e623bb7b04b7758ccbce01aae37e36b16ac889ca3b91f9';
// 459d8f8f5e2d2c3efe3d21ed6466cdb65440fbc86ba6d04da41c8f807a031d0c
// 88b2fa8844a680b943e623bb7b04b7758ccbce01aae37e36b16ac889ca3b91f9
const BaseApi = "http://mock.biaoyansu.com/api/1/";


function sign(appKey, timestamp){
    return btoa(appKey + timestamp);
}

const api = (url, params) => {
    
    let timestamp = (new Date).getTime();
    let signature = sign(AppKey, timestamp);
    
    let opt = {
        headers: {
            'biao-mock-app-key': AppKey,
            'biao-mock-timestamp': timestamp,
            'biao-mock-signature': signature,
        }
    }

    url = BaseApi + url;

    return axios
                .post(url, params, opt)
                .then( res => {
                    return res.data;
                });
}

window.api = api;