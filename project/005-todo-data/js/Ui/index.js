var taskUi = new TaskUi({
    on_init: function (){
        catUi._api.read().forEach(function (item){
            taskUi.select.innerHTML +=
            `
            <option value="${item.id}">${item.title}</option>
            `;
        });
    },
    input_focus: function (){
        taskUi.select.hidden = false;
    },
    input_blur: function (){
        // taskUi.select.hidden = true;
    },
});

var catUi = new CatUi({
    click_fn: function(id){
        taskUi.render(id);
    },
    delete_fn: function(id){
        taskUi._api.remove_cat_row(id);
        taskUi.render(1);
    }
}  
);

taskUi.init();
catUi.init();
