

import Vue from 'vue' ;

export default Vue.directive('test', {
    inserted: (el, binding) => {
        

        el.addEventListener('keyup', () => {
            console.log('1:', 1);
            
        })
    }
})











