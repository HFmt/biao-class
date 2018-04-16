;
let menu_trigger = document.querySelector('#menu-trigger'),
    menu_content = document.querySelector('#menu-content');
    
    // 元素触发的样式
    function isVisible() { 
        return menu_content.style.display == 'inline-block';
     }

    function show() { 
        menu_content.style.display = 'inline-block';
     }

     function hide() { 
         menu_content.style.display = 'none';
      }


    //   鼠标移入
    // menu_content.onmouseenter=menu_trigger.onmouseenter=function(e){
    //     e.preventDefault();
        
    //    show();
    // }
    
    //  // 鼠标离开
    // menu_content.onmouseleave = menu_trigger.onmouseleave = function (e) {
    //     e.preventDefault();
    //     hide();
    // }


    // 鼠标移入
    // menu_trigger.addEventListener('mouseenter',function (e) { 
    //     e.preventDefault();
    //     show();
    // });
    // menu_content.addEventListener('mouseenter',function (e) { 
    //     e.preventDefault();
    //     show();
    // });

    // // 鼠标离开
    // menu_trigger.addEventListener('mouseleave',function (e) { 
    //     e.preventDefault();
    //     hide();
    // });
    // menu_content.addEventListener('mouseleave',function (e) { 
    //     e.preventDefault();
    //     hide();
    // });

    // 鼠标点击实现隐藏和显示
    
        menu_trigger.addEventListener('click', function (e) {
            e.preventDefault();

            menu_trigger.focus();

            if (isVisible()){
                hide();
                
            }
            else{
                show();
                
            }
        });

let flag = true;  
    console.log(flag);
    //    鼠标移入
    menu_content.onmouseenter = function(){
            flag = false;
            console.log(flag);
        }
    //    鼠标移出
    menu_content.onmouseleave = function () {
        flag = true;  
            console.log(flag);
    }

    if (flag) 
    {
        menu_trigger.addEventListener('blur', function () {
            hide();
        });
    }
    
;


