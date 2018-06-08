import helper from "../util/helper";

let instance;

class Route{
    constructor(config){
        this.current = {};

        this.state = Object.assign({}, config);

        this.detectHashChange();
    }

    detectHashChange() {
        window.addEventListener('hashchange', () => {
            this.current.hash = location.hash;

            console.log(this.current.hash);
        });
    }
}

function init(config) {
    if(!instance)
        instance = new Route(config);
}
export default {
    init
};