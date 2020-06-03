var x = function () {
    document.addEventListener("DOMContentLoaded", function () {

        var navMenu =  document.querySelectorAll(".header-collapsible-nav > li");
        var menuHeadings = document.querySelectorAll(".header-collapsible-nav > li > h4");
        var header = document.querySelector("header");

        function hideSubMenu(elem) {
            elem.classList.remove("show");
        }

        function showSubMenu(elem) {
            elem.classList.add("show");
        }

        function showTouchMenu(elem) {
            header.classList.add("menu-open")
            header.querySelectorAll(".categories").forEach(function (li) {
                li.classList.add("show");
            });
        }

       function hideTouchMenu(elem) {
            header.classList.remove("menu-open")
            header.querySelectorAll(".categories").forEach(function (li) {
                li.classList.remove("show");
            });
        }
       
        navMenu.forEach(function (menu) {
            var dropdown = menu.querySelector("ul");

            //listen for hovers
            menu.addEventListener("mouseover", function () {
                if (!this.classList.contains("navigation-menu-link")) {
                    showSubMenu(dropdown);
                    //hide after we leave
                    menu.addEventListener("mouseout", function () {
                        hideSubMenu(dropdown);
                    });
                }
            });

            //for touch.
            menu.addEventListener("click", function () {
                if (!this.classList.contains("navigation-menu-link")) {
                    //they've clicked one of the actual elements
                    if (!this.classList.contains("open")) {
                        this.focus();
                        this.classList.add("open");
                        showSubMenu(dropdown);
                    } else {
                        this.classList.remove("open");
                        hideSubMenu(dropdown);
                    }
                } else {
                    //they've clicked the hamburger to open menu
                    showTouchMenu();
                }
            });
        });

        menuHeadings.forEach(function (heading){
            heading.addEventListener('focus', function() {
                showSubMenu(heading.nextElementSibling);
              })

              if (heading.nextElementSibling) {
                const subMenu = heading.nextElementSibling
                const subMenuLinks = subMenu.querySelectorAll('a')
                const lastLinkIndex = subMenuLinks.length - 1
                const lastLink = subMenuLinks[lastLinkIndex]
            
                lastLink.addEventListener('blur', function() {
                    hideSubMenu(heading.nextElementSibling);
                  })
              }
        })

        //close button for touch
        document.getElementById("closeNav").addEventListener("click", function () {
            hideTouchMenu();
        }); 

    }); 
}();