import Vue from "vue";

import api from "../lib/api";


const list = {
    cart: []
};

const cartlist = () => {
    return list;
}



const read = () => {
    api.api('cart/read', {
        key_by: 'id',
        with: 'has_one:pet'
    }).then(res => {
        Vue.set(list, 'cart', res.data);
    })
}

const add = (petId, count) => {
    count = count || 1;
    api.api('cart/create', {
        pet_id: petId,
        count
    }).then(res => {
        read();
    })
}

const remove = (id) => {

    api.api('cart/delete', {
        id
    }).then(res => {
        read();
    })
}



export default {

    cartlist,
    read,
    add,
    remove
}

const init = () => {
    read();
}

init();