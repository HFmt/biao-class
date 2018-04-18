

window.onscroll=function(){
    let oHeader=document.getElementById('header');
    let topScroll = document.documentElement.scrollTop;

    if (topScroll>220)
    {
        oHeader.style.display ='block';
    }
    else{
        oHeader.style.display = 'none';
    }
}



window.onload = function () {
   

    let oMname = document.querySelector('#mname');
    let oMusic = document.querySelector('#music');
    let oMback = document.querySelector('#Mback');
    let oMnext = document.querySelector('#Mnext');


    let marr = ['Alan Walker - New Heart.mp3', 
                'Dan Farber - Fresh Off The Grill.mp3', 
                'OMFG - Yeah.mp3',
                '花粥 - 略略略.flac',
                'Oorora - Tenko.mp3',
                '花粥 - 一腔诗意喂了狗.flac',
        ];


    let num = 0;    
        oMback.addEventListener('click',function () { 
            num = (num+5)%6;
            oMusic.src = 'audio/' + marr[num];
            oMname.innerHTML = marr[num];
        });

        oMnext.addEventListener('click',function () { 
            num = (num+1)%4;
            oMusic.src = 'audio/' + marr[num];
            oMname.innerHTML = marr[num];
        });

        oMusic.addEventListener('ended',function () { 
            setTimeout(() => {
                num = (num + 1) % 6;
                oMusic.src = 'audio/' + marr[num];
                oMname.innerHTML = marr[num];
            }, 2400);
            
        }, false);

 
       

}

