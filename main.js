const burgerMenu = document.querySelector('.mobile-menu')
const menuHeader = document.querySelector('.menu-header')

burgerMenu.addEventListener('click', () => {
    menuHeader.classList.toggle('show')
})

// Hide menu when click nav links

const menuLinks = document.querySelectorAll('.menu-header a')

menuLinks.forEach(item => item.addEventListener('click', () => {menuHeader.classList.remove('show') }))

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({

    })
})

