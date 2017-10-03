document.addEventListener("DOMContentLoaded", function () {

    var navMenu = document.querySelectorAll(".header-collapsible-nav > li");

    function hideMenu(elem) {
        elem.classList.remove("show");
    }

    function showMenu(elem) {
        elem.classList.add("show");
    }

    function toggleMenu(elem) {
        elem.classList.toggle("show");
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

        //for touch.
        menu.addEventListener("click", function () {
            if (!this.classList.contains("navigation-menu-link")) {
                //they've clicked one of the actual elements
                if(!this.classList.contains("open")) {
                    this.focus(); 
                    this.classList.add("open");
                    showMenu(dropdown);
                } else {
                    this.classList.remove("open");                    
                    hideMenu(dropdown);                    
                }
            } else {
                //they've clicked the hamburger to open menu
                header.classList.add("menu-open")
                header.querySelectorAll(".categories").forEach(function(li){
                    li.classList.toggle("show");
                });
            }
        });
    });

});