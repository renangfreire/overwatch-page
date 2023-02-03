import init from './scrollReveal.js';

init()

// Variables
const game__header = document.querySelector('.game-header')

//Game Header
const navGameDistance = Number(game__header.getBoundingClientRect().y) + Number(game__header.getBoundingClientRect().height)
let navActive
window.addEventListener('scroll', function(el){
    if(window.scrollY > navGameDistance){
        if(navActive) return
        game__header.classList.add('sticky')
        document.querySelector('.game-container').style.marginTop = '7rem';
        navActive = !navActive
    }
    if(window.scrollY < navGameDistance){
        if(!navActive) return
        game__header.classList.remove('sticky')
        document.querySelector('.game-container').style.marginTop = 0;
        navActive = !navActive
    }
})