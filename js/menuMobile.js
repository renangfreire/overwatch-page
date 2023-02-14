// DOM
const mobileMenu = document.querySelector('.menu-mobile')
const mobileMenuWrapper = document.querySelector('.menu-mobile_wrapper')
const mobileMenuOverlay = document.querySelector('.menu-mobile_overlay')
const btnOpenMenu = document.querySelector('.btn_menu-mobile')
const btnCloseMenu = document.querySelector('.mobile-menu_close-btn')
const body = document.querySelector('body')

const openMobileMenu = function(){
    body.style.overflow = 'hidden'
    mobileMenuOverlay.classList.add('visible')
    mobileMenuWrapper.classList.add('active')
}

const closeMobileMenu = function(){
    body.style.overflow = 'visible'
    mobileMenuOverlay.classList.remove('visible')
    mobileMenuWrapper.classList.remove('active')
}

btnOpenMenu.addEventListener('click', openMobileMenu)
btnCloseMenu.addEventListener('click', closeMobileMenu)