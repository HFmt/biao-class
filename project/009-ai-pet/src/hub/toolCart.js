import Vue from "vue";

import api from "../lib/api";

const list = {
    cart: {

    }
};



let read = () => {
    api.api('cart/read', {
        key_by: 'id',
        with: 'has_one:pet'
    }).then(res => {        

        Vue.set(list, 'cart', res.data);

        console.log('list.cart:', list.cart);
        
    })
}

let add = (petId, count) => {
    count = count || 1;
    api.api('cart/create', {
        pet_id: petId,
    }).then(res => {
        read();        
    })
}

let cartlist = () => {
    return list;
}

export default {

    read,
    add,
    cartlist



    // remove() {},
    // update() {},
}

const init = () => {
    read();
}

init();