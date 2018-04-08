

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