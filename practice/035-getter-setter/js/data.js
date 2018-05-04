let name = 'asam'
  , age = 1;

function get_name() {
    return name;
}

function set_name(val) {
    return name = val;
}

function get_age() {
    return age;
}

function set_age(val) {
    if(val<1){
        
        return;
    }
    return age = val;
}

module.exports = {
    get_name: get_name,
    get_age: get_age,
    set_name: set_name,
    set_age: set_age,
}
