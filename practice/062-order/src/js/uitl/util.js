window.util = {
    findIndexById(arr, id) {
        return arr.findIndex( item => {
            return item.id == id;
        });
    },

    deleteElementById(arr, id) {
        let item = this.findIndexById(arr, id);
        arr.splice(item, 1);
    }
}
