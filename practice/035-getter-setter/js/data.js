let age = 1;


function get_age() {
    return age;
}

function set_age(val) {
    if(val<1)
        return;
    return age = val;
}






    


module.exports = {
    get_age: get_age,
    set_age: set_age,
    age: age,
}
