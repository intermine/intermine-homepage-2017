document.addEventListener("DOMContentLoaded", function(){

var navMenu = document.querySelectorAll(".header-collapsible-nav > li");

function hideMenu(elem) {
    elem.className = "";
}

function showMenu(elem) {
    elem.className = "show";
}


navMenu.forEach( function (menu){
    var dropdown = menu.querySelector("ul");    

    //listen for hovers
    menu.addEventListener("mouseover", function (){
        showMenu(dropdown);
        //hide after we leave
        menu.addEventListener("mouseout", function(){hideMenu(dropdown);})       
    });

    menu.addEventListener("click",function(){
        shownMenu(dropdown);
    });
})

});