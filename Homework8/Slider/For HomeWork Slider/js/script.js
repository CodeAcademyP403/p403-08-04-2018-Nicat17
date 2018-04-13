var imgs = document.querySelectorAll("img");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

var count = 0;
var left=2000;
var step=500;

prev.onclick = function () {

    if(count==left){
        count = 0;
    }
    for (var i = 0; i < imgs.length; i++) {
        if (count == 0) {
            imgs[i].style.left =-left+step+ "px";
        }
        else {
            imgs[i].style.left =-left+step+count + "px"; 
        }
    }
    count += step;
}

next.onclick = function () {

    count += step;

    for (var i = 0; i < imgs.length; i++) {
        if (count == left) {
            imgs[i].style.left ="0px";
            count=0;
        }
        else {
            imgs[i].style.left =-count + "px"; 
        }
    }
}
