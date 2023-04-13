document.addEventListener('scroll',()=>{
    var scroll_postion = window.scrollY;
    if(scroll_postion > 250){
        headerbar.style.backgroundColor = 'rgba(4,9,30,0.7)';
    }
    else{
        headerbar.style.backgroundColor = 'transparent';
    }
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

