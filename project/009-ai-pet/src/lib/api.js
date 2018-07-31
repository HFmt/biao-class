 import axios from 'axios';
 
 const key = '05be1f06273ca2f0d658aa81a96d2fd7c4f037f35d2fd62959aebad688998ee2';

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
     })
 }

 export default {
     api
 }
