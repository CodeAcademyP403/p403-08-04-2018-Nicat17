var imgActive = document.querySelector('.bottom .active');
var slideImg = document.querySelector('.top');
var prevChange = document.querySelector('.top a:first-child');
var nextChange = document.querySelector('.top a:last-child');
var imgAll = document.querySelectorAll('.col-md-3 img');

upload();

nextChange.onclick=function(){
    two("next");
}

prevChange.onclick=function(){
    two("prev");
}

function two(come) {
    if (come == "next") {
        var nextImg = imgActive.parentElement.nextElementSibling || document.querySelector('.bottom .col-md-3');
    }
    else if (come = "prev") {
        var nextImg = imgActive.parentElement.previousElementSibling || document.querySelector('.bottom .col-md-3:last-child');
    }
    var change = nextImg.children[0];

    imgActive.classList.remove("active");
    change.classList.add("active");

    imgActive = change;

    upload();
    
}

function upload(){
    slideImg.style.backgroundImage = "url(" + imgActive.src + ")";
}

document.addEventListener("keydown",function(e){
    if(e.which==37){
        two("prev");
    }
    else if(e.which==39){
        two("next");
    }
});

for(var img of imgAll){
    img.onclick=function(e){
        imgActive.classList.remove("active");
        e.target.classList.add("active");
        imgActive=e.target;
        upload();
    }
}
