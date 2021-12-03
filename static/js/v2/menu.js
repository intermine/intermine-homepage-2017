var elementsID = ['biologists', 'developers', 'contacts', 'resources']

function  mouseEnter(event) {
    event.currentTarget.classList.remove('im-menu-item-children-hidden')
}

function mouseLeave(event) {
    event.currentTarget.classList.add('im-menu-item-children-hidden')
}

function initMenu() {
    var i = 0

    for(i = 0; i < elementsID.length; i+= 1) {
        var element = document.querySelector('#' + elementsID[i])
        console.log('Adding to', element)
        element.addEventListener('mouseenter', mouseEnter)
        element.addEventListener('mouseleave', mouseLeave)
    }
}

// window.addEventListener('DOMContentLoade', initMenu)
initMenu()