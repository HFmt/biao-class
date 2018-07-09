import Vue from 'vue';
import api from '../lib/api';

const parseBdval = (str) => {
    let rules = {};
    str.split('&').forEach((item) => {
        let arr = item.split(':');
        let key = item[0];
        let val = item[1];
        
        val = val === undefined ? true : val;
        rules[key] = val;
        
    });
    return rules;
}

const valid = {
    a(val) {
        let re = /^[0-9a-zA-Z]*$/g;
        let result = re.test(val);

        if(!result)
            console.log('输入有误:');
        else {
            return true;
        }
            
            
    }
}

export default Vue.directive('test', {
    inserted: (el, binding) => {
        let bdval = binding.value;
        let rules = null;
        if (typeof bdval === 'string')
            rules = parseBdval(bdval);
        el.addEventListener('keyup', () => {
            let elval = el.value;
            
            for(let item in rules) {
                let arg = rules[item];
                let validtor = valid[item];
                console.log('item:', item);
                
                validtor(elval);
            }
            
        })
    }
});