var x = function () {
    document.addEventListener("DOMContentLoaded", function () {

        var navMenu = document.querySelectorAll(".header-collapsible-nav > li");
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

            //listen for keyboard focus
            menu.addEventListener("focus", function () {
                if (!this.classList.contains("navigation-menu-link")) {
                    //they've clicked one of the actual elements
                    showTouchMenu();
                    if (!this.classList.contains("open")) {
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
                menu.addEventListener("blur", function () {
                    hideTouchMenu();
                    this.classList.remove("open");
                    hideSubMenu(dropdown);
                });

                //keyboard controls for the menu. may need to remove events too
                var keydown = menu.addEventListener("keydown", function (e) {
                    var k = e.keyCode,
                        down = 40;
                    up = "38";

                    if (k == down) {
                        //TODO move down
                    } else {
                        if (k == up) {
                            //TODO MOVE UP
                        }
                    }

                });

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

        //close button for touch
        document.getElementById("closeNav").addEventListener("click", function () {
            hideTouchMenu();
        });

    });
}();