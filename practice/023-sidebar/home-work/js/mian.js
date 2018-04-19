;;

//下拉菜单

let menu_trigger = document.querySelector('#menu-trigger'),
    menu_content = document.querySelector('#menu-content');

    function isVisible() {
        return menu_content.classList.contains('show');
    }

    function show1(){
        menu_content.classList.add('show');
    }

    function hide1(){
        menu_content.classList.remove('show');
    }

    menu_trigger.addEventListener('click',function(){

        if (isVisible()){
            hide1()
        }
      
        else{
            show1();
        }

    });

    document.addEventListener('click', function (ev) {
        ev = ev||event;

        let menu = ev.target.closest('#menu-content');

        if (!menu && ev.target !== menu_trigger){
            hide1();
        }
    });


    //弹出框

    let login = document.querySelector('#login'),
        mask = document.querySelector('#mask'),
        close = document.querySelector('#close');


        function show2() {
            mask.classList.add('show');
        }

        function hide2() {
            mask.classList.remove('show');
        }

        login.addEventListener('click',function () { 
                show2();
        });

        mask.addEventListener('click', function (ev) {
            ev=ev||event;
            if (ev.target === mask || ev.target === close)
            hide2();
    });

        document.addEventListener('keyup',function (ev) { 
            ev=ev||event
            if (ev.code=='Escape'){
                hide1();
                hide2();
            }
        })


    // 显示隐藏

    let box = document.querySelector('#box');
       

    let timers = null;

    box.addEventListener('mouseenter',function () { 
        os(0);
    });

    box.addEventListener('mouseleave',function () { 
        os(-290);
    });


        function os(iTarget) { 
            let speed = null;
            clearInterval(timers);  
            timers=setInterval(function () { 
                
                if (box.offsetLeft > iTarget){
                    speed=-10;
                }
                else{
                    speed = 10;
                }

                if (box.offsetLeft == iTarget){
                    clearInterval(timers);
                }
                else{
                    box.style.left=box.offsetLeft+speed+'px';
                }
             },30);

         }