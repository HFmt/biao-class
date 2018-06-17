

const parse = (tpl, data) => {
    let re = new RegExp('{{\s*([^}]+)\s*}}', 'g');
    // let re =/{{\s*([^}]+)\s*}}/g;
    let result = tpl;
    let match;

    while(match = re.exec(tpl)){
        let variable = match[0];

        let key = match[1];

        let parseement = getObj(data, key);

        result = result.replace(variable, parseement);
    }
    return result;
    
}

const getObj = (data, key) => {
    let layers = key.split('.');
    
    let result = Object.assign({}, data);

    layers.forEach( item => {
        result = result[item];        
    });

    return result;
}

let tpl = '名{{user.name}}, {{user.age}}岁';
let data1 = {
    user: {
        name: 'asam',
        age: 23
    }
}


window.parseElement = parse;