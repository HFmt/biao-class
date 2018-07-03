import Vue from 'vue';


const parseRules = (str) => {
    let rules = {};

    str.split('&').forEach(item => {
        let arr = item.split(':');

        let key = arr[0];   // 键名
        let val = arr[1];   // 键值

        val = val === undefined ? true : val;

        rules[key] = val;

    });

    return rules;
}


const valid = {
    required(val) {
        if(typeof  val === 'number')
            return true;
        return !!val;
    },

    minLength(val, min) {
        return val.length > parseInt(min);
    },
    maxLength(val, max) {
        return val.length > parseInt(max);

    }
}


export default Vue.directive('validator', {
    bind: (el, binding) => {
        let rules = binding.value;

        if(typeof rules === 'string')
            rules = parseRules(rules);

        el.addEventListener('keyup', () => {
            let elval = el.value;
            for(let item in rules) {
                let args = rules[item];

                let validator = valid[item];

                if(validator && !validator(elval , args)){
                    console.log(item + '不合法');
                }   else {
                    console.log(item + '合法');
                }

            }

        });
    }
})