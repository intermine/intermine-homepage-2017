document.addEventListener("DOMContentLoaded", function () {

    var navMenu = document.querySelectorAll(".header-collapsible-nav > li");

    function hideMenu(elem) {
        elem.classList.remove("show");
    }

    function showMenu(elem) {
        elem.classList.add("show");
    }


    navMenu.forEach(function (menu) {
        var dropdown = menu.querySelector("ul");
        var header = document.querySelector("header");

        //listen for hovers
        menu.addEventListener("mouseover", function () {
            if (!this.classList.contains("navigation-menu-link")) {
                showMenu(dropdown);
                //hide after we leave
                menu.addEventListener("mouseout", function () {
               //     hideMenu(dropdown);
                });
            } 
        });

        //for touch. needs more checking.... TODO
        menu.addEventListener("click", function () {
            if (!this.classList.contains("navigation-menu-link")) {
                shownMenu(dropdown);
            } else {
                header.classList.add("menu-open")
                document.querySelectorAll("header nav ul .categories").forEach(function(li){
                    li.classList.add("show");
                });
            }
        });
    });

});