;
let menu_trigger = document.querySelector('#menu-trigger'),
    menu_content = document.querySelector('#menu-content');
    
      // 鼠标移入
    menu_content.onmouseenter=menu_trigger.onmouseenter=function(e){
        e.preventDefault();
        menu_content.style.display = 'inline-block';
    }
    
     // 鼠标离开
    menu_content.onmouseleave = menu_trigger.onmouseleave = function (e) {
        e.preventDefault();
        menu_content.style.display = 'none';
    }

    // 鼠标移入
    menu_trigger.addEventListener('mouseenter',function (e) { 
        e.preventDefault();
        menu_content.style.display='inline-block';
    });
    menu_content.addEventListener('mouseenter',function (e) { 
        e.preventDefault();
        menu_content.style.display='inline-block';
    });

    // 鼠标离开
    menu_trigger.addEventListener('mouseleave',function (e) { 
        e.preventDefault();
        menu_content.style.display='none';
    });
    menu_content.addEventListener('mouseleave',function (e) { 
        e.preventDefault();
        menu_content.style.display='none';
    });
;


