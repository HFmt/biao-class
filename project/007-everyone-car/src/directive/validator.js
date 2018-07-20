import Vue from 'vue';
import api from '../lib/api'

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
    numeric(val, lang) {
        const langConf = {
            zh: '只能输入数字'
        };
        let result = parseFloat(val) == val;

        if (!result)
            throw langConf[lang];
        return result;
    },
    max(val, lang, max) {
        const langConf = {
            zh: '最大值为' + max
        };
        let result = this.numeric(val) && parseFloat(val) < max;
        if (!result) {
            throw langConf[lang];
        }
        return result;

    },
    positive(val, lang) {
        const langConf = {
            zh: '不能为负数'
        };
        let result = this.numeric(val) && parseFloat(val) >= 0;
        if (!result)
            throw langConf[lang];
        return true;
    },
    username(val, lang) {
        const langConf = {
            zh: '不能包含特殊字符'
        };
        let re = /^[a-zA-Z0-9]*$/g;
        let result = re.test(val);

        if (!result)
            throw langConf[lang];
        return result;
    },
    required(val, lang) {
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
            zh: '不能大于' + max + '个字符'
        };

        let result = val.length <= parseInt(max);
        if (!result)
            throw langConf[lang];
        return result;
    },
    cellphone(val, lang) {
        const langConf = {
            zh: '不合法的手机号码',
            em: 'Invalid phone number'
        };

        if (!this.numeric(val, lang) || !this.length(val, lang, 11)){
            throw langConf[lang];
        }
        return true;
    },
    length(val, lang, len) {

        const langConf = {
            zh: '不合法的长度，长度需等于' + len + '位',
            en: 'Invalid field length, length should equals to ' + len,
        };
        val = val.toString();
        if (val.length != len)
            throw langConf[lang];

        return true;
    },
    not_exist(val, lang, model, property, except) {
        return new Promise((s, j) => {
            if (!val || val == except)
                s();

            return api(`${model}/first`, {
                    where: {
                        and: {
                            [property]: val
                        }
                    }
                })
                .then(res => {
                    return res.data ? j('用户名已存在') : s(true);
                });
        });
    },
};

const disableSubmit = elSubmit => {
    elSubmit.setAttribute('disabled', 'disabled');
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
};

const trackInput = (elForm, inputList) => {
    elForm.$state.input_list.push(inputList);
}

const validatorForm = (inputList, elSubmit) => {
    let invalid = false;
    inputList.forEach(input => {
        if (input.getAttribute('invalid') === 'true') {
            invalid = true;
        }
    });

    if (invalid) {
        disableSubmit(elSubmit);
    } else {
        enableSubmit(elSubmit);
    }
};

const go = (elForm, el, rules, elError, ) => {
    let errorMsg = '';
    let invalid = false;

    let elval = el.value;
    let lang = elForm.$state.lang;

    if (!elval && !rules.required)
        return;
    for (let item in rules) {
        let arg = rules[item];
        let validator = valid[item].bind(valid);

        try {
            validator(elval, lang, arg);
        } catch (e) {
            invalid = true;
            errorMsg += `<div class="error">${e}</div>`;
        }
    }

    if (invalid) {
        el.setAttribute('invalid', 'true');
    } else {
        el.setAttribute('invalid', 'false')
    }

    if (el.getAttribute('dirty') == 'true') {
        elError.innerHTML = errorMsg;
    }
    validatorForm(elForm.$state.input_list, elForm.$state.el_submit);



    // 如果有非空验证就先执行非空验证
    if (rules.required) {
        try {
            valid.required(elval, lang);
        } catch (e) {
            invalid = true;
            errorMsg += `<div class="error">${e}</div>`;
            return;
        }
    }
};

export default Vue.directive('validator', {
    inserted: (el, binding) => {

        let lang = null;
        let rule = binding.value;
        let rules = null;
        let elForm = el.closest('form');
        // let elSubmit = elForm.querySelector('[type = submit]');
        let select = el.getAttribute('error-el');
        let elError = document.querySelector(select);

        if (typeof rule === 'string')
            rules = parseRule(rule);

        if (!elForm.$state) {
            lang = el.getAttribute('error-lang') || 'zh';
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
});