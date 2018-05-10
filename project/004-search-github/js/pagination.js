

let el = require('./element');

let output = {
  render_pagination: render_pagination
}

function render_pagination(config_page, data) {

  el.pagination.innerHTML = '';

  el.set_page_amount(data);
        let start_page 
          , middle = Math.ceil(el.max_page/2)
          , end_page = el.max_page
        ;
        
        if(config_page <= middle){
          start_page = 1;
          end_page = el.max_page;
        }

        else if(config_page >= el.get_page_amount() - middle){
          start_page = el.get_page_amount() - el.max_page;
          end_page = el.get_page_amount();
        }

        else{
          start_page = config_page - middle + 1;
          end_page = config_page + middle - 1;
        }

        if(start_page < 1){
          start_page = 1;
        }
        if(end_page > el.get_page_amount()){
          end_page = el.get_page_amount();
        }
        for (let i = start_page; i<=end_page; i++){
          let btn = document.createElement('button');
          btn.innerText = i;
          btn.dataset.page = i;

          if(config_page == i){
            btn.classList.add('active');
          }
          
          el.pagination.appendChild(btn);
        }
}



module.exports = output;