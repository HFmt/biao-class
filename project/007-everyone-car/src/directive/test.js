import Vue from 'vue';



const parseRule = str => {
    let rules = {};
    str.split('&').forEach(item => {
        let arr = item.split(':');
        let key = arr[0];
        let val = arr[1];
        val = val === undefined ? true : val;

        rules[key] = val;
    });

    return rules;

};

const valid = {
    username(val,lang) {
        const langConf = {
            zh: '不能包含特殊字符'
        };
        let re = /^[a-zA-Z0-9]*$/g;
        let result = re.test(val);

        if (!result)
            throw langConf[lang];
        return result;
    },
    required(val ,lang) {
        const langConf = {
            zh: '不能为空'
        };
        if (typeof val === 'number')
            return true;
        if (!val)
            throw langConf[lang];
        return !!val;
    },
    minLength(val, lang, min) {
        const langConf = {
            zh: '不能少于' + min + '个字符'
        };

        let result = val.length >= parseInt(min);
        if (!result)
            throw langConf[lang];
        return result;
    },
    maxLength(val, lang, max) {
        const langConf = {
            zh: '不能少于' + max + '个字符'
        };

        let result = val.length <= parseInt(max);
        if (!result)
            throw langConf[lang];
        return result;
    },
};


const disableSubmit = elSubmit => {
    elSubmit.setAttribute('disabled', 'disable');
};

const enableSubmit = elSubmit => {
    elSubmit.removeAttribute('disabled')
};



const initFormState = (elForm, lang) => {
    let elSubmit = elForm.querySelector('[type = submit]');
    elForm.$state = {
        lang: lang,
        el_submit: elSubmit,
        input_list: []
    }
}

const trackInput = (elForm, inputList) => {
    elForm.$state.input_list.push(inputList);
}

const validatorForm = (inputList, elSubmit) => {
    let invalid = false;

    inputList.forEach( input => {
        if(input.getAttribute('invalid' == 'true'))
            invalid = true;
    });

    if(invalid)
        disableSubmit(elSubmit);
    else
        enableSubmit(elSubmit);
};

const go = (elForm, el, rules, elError) => {
    let invalid =false;
    let errorMsg = '';
    let elval = el.value;

    for (let item in rules) {
        let args = rules[item];
        let validator = valid[item];

        try {
            invalid = true;
            validator(elval, elForm.$state.lang, args);
        } catch (e) {
            errorMsg += `<div class="error">${e}</div>`
        }
    }
    if (invalid)
        el.setAttribute('invalid', 'true');
    else
        el.setAttribute('invalid', 'false')

    if (el.getAttribute('dirty') == 'true'){

        elError.innerHTML = errorMsg;
    }

    validatorForm(elForm.$state.input_list, elForm.$state.el_submit);
};

export default Vue.directive('validator', {
    inserted: (el, binding) => {

        let lang = null;

        let rule = binding.value;
        let rules = null;
        let elForm = el.closest('form');
        let elSubmit = elForm.querySelector('[type = submit]');
        let select = el.getAttribute('error-el');
        let elError = document.querySelector(select);
        if (typeof rule === 'string')
            rules = parseRule(rule);

        if(!elForm.$state){
            lang = el.getAttribute('error-lang') || 'zh';
            console.log(lang)
            initFormState(elForm, lang);
        }

        trackInput(elForm, el);

        go(elForm, el, rules, elError);

        el.addEventListener('keyup', () => {
            go(elForm, el, rules, elError);
        });

        el.addEventListener('focus', () => {
            el.setAttribute('dirty', 'true');
        });
    }
})

