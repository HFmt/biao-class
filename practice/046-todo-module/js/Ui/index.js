let taskUi = new TaskUi();

let catUi = new CatUi({
    click_fn: function(id){
        taskUi.render(id);
    }
}  
);

taskUi.init();
catUi.init();
