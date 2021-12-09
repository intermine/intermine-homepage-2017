var elementsID = ['biologists', 'developers', 'contacts', 'resources']

function closeMenuOnClick(event) {
    if(event.target && event.target.classList[0] !== 'im-navbar-menu-item') {
        setTimeout(() => {
            for(i = 0; i < elementsID.length; i+= 1) {
                var element = document.querySelector('#' + elementsID[i])
                element.classList.add('im-menu-item-children-hidden')
            }
            window.removeEventListener('click', closeMenuOnClick)
        }, 100)
    }
}

function menuOnClick (event) {
    for(i = 0; i < elementsID.length; i+= 1) {
        var element = document.querySelector('#' + elementsID[i])
        element.classList.add('im-menu-item-children-hidden')
    }
    event.currentTarget.classList.remove('im-menu-item-children-hidden')
    window.addEventListener('click', closeMenuOnClick)
}

function initMenu() {
    var i = 0

    for(i = 0; i < elementsID.length; i+= 1) {
        var element = document.querySelector('#' + elementsID[i])
        if(element) {
            element.addEventListener('click', menuOnClick)
        }
    }
}

function initMobileMenu() {
    var mobileMenuHam = document.querySelector('#im-mobile-ham')
    var menu = document.querySelector('#im-mobile-navbar-menu')
    var navbar = document.querySelector('#im-navbar')
    if(mobileMenuHam) {
        mobileMenuHam.addEventListener('click', function() {
            document.body.classList.toggle('im-mobile-menu-open')
            mobileMenuHam.classList.toggle('active')
            menu.classList.toggle('active')
            navbar.classList.toggle('active')
        })
    }

}

initMenu()
initMobileMenu()

