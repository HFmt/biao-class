

window.onscroll=function(){
    let oHeader=document.getElementById('header');
    let topScroll = document.documentElement.scrollTop;

    if (topScroll>250)
    {
        oHeader.style.display ='block';
    }
    else{
        oHeader.style.display = 'none';
    }
}