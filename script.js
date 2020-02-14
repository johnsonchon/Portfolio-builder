var portBtn = document.getElementById("logobtn");
var menu = document.getElementById("menu-pop");
var grayOut = document.getElementById("gray");
var viewDrop = document.getElementById("viewdrops");
var btnS = document.getElementById("btn");


portBtn.onclick = function () {
    if(menu.style.display === "none") {
        menu.style.display = "block";
        grayOut.style.display = "block";
    }

    else {
        menu.style.display = "none";
        grayOut.style.display = "none";
    }
    
}

grayOut.onclick = function () {
    menu.style.display = "none";
        grayOut.style.display = "none";
}

btnS.onclick = function () {
    if(viewDrop.style.display === "none") {
        viewDrop.style.display = "block";
        btnS.style["box-shadow"] = "0px 1px 5px rgb(192, 192, 192)";
    }

    else {
        viewDrop.style.display = "none";
        btnS.style["box-shadow"] = "none";
    }
    
}

