let taskUi = new TaskUi({
    on_init: render_cat_option,
    input_focus: function (){
        taskUi.select.hidden = false;
    },
    input_blur: function (){
        // taskUi.select.hidden = true;
    },
    on_click: function() {
        catUi._api.$find_row_id()
    }
});

let catUi = new CatUi({
    click_fn: function(id){
        taskUi.render(id);
    },
    delete_fn: function(id){
        taskUi._api.remove_cat_row(id);
        taskUi.render(1);
    },
    on_add: render_cat_option,
}  
);


function render_cat_option(){
    taskUi.select.innerHTML = '';

    if(!catUi._api.read())
        return;

    catUi._api.read().forEach(function (item){
        taskUi.select.innerHTML +=
        `
        <option value="${item.id}">${item.title}</option>
        `;
    });
}

taskUi.init();
catUi.init();
