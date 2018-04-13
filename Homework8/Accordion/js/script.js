var dataes = document.querySelectorAll(".common p");

var save;

for (var data of dataes) {
    data.addEventListener("click", function (e) {
        var getValue = e.target.getAttribute("data-main");
        var selectData = document.querySelector(`ul[data-other="${getValue}"]`);
        
        if(selectData.className=="active"){
            selectData.classList.remove("active");
        }
        else{
            if(save!=undefined){
                save.classList.remove("active");
            }
            save=selectData;
            selectData.classList.add("active");
        }
    });
}
