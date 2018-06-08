import send  from "../util/send";

let instance;

function init() {
  if (!instance)
    instance = new Article();
}

 class Article {

    read (page) {
        send.get('/api/article/read', data => {
        });
    }

      find (id) {
  
    }
    
     remove (id) {
    
    }
    
     update (id, row) {
    
    }
 }

 init ();

 export default instance;