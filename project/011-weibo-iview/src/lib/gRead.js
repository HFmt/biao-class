import api from "./api";
 const gReadInfo = (model, list, condition) => {
    api.api(`${model}/read`, condition).then(res => {
        list = res.data;
        console.log('list:', list);
        
    });
}

export default {
    gReadInfo
}
