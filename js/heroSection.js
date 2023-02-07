import Hero from './Heros.js';

// DOM VARIABLES
const allHerosButton = document.querySelector('.all-heros-btn')
const typeHeroDiv = document.querySelector('.type-hero')
const hero_mozaico = document.querySelector('.hero-mozaico')

//Hero Mozaico - Change Image in AllHerosBtn
let animationIsRunning
async function changeLogoWhite(e){
    await new Promise(resolve => {
        setTimeout(() => allHerosButton.children[0].setAttribute('src', './assets/images/icons/logo-white.svg'), 150)
    })
}

async function changeLogoSymbol(e){
    await new Promise(resolve => {
        setTimeout(() => allHerosButton.children[0].setAttribute('src', './assets/images/icons/overwatch-symbol.svg'), 200)
    })
}

allHerosButton.addEventListener('mouseenter', changeLogoWhite);
allHerosButton.addEventListener('mouseleave', changeLogoSymbol);

//Change Heros in Mozaico

function selectButton(btn){
    typeHeroDiv.childNodes.forEach(el => el.classList?.contains('selected')&&el.classList.remove('selected'))
    btn.classList.add('selected')
    
}

function changeHerosMozaico(btn){
    const allBtnHeros = Array.from(hero_mozaico.children).filter(el => el.classList.contains('select-hero-btn'))
    const typeHeroSelected = Hero.allHeros.filter(el => el.typeHero == btn.dataset.type_hero)
    const fadeAnime = () => {
        anime({
            targets: '.hero-mozaico',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutExpo',
            loop: false,
        })
    }

    selectButton(btn)
    
    if(!btn.dataset.type_hero){
        allBtnHeros.forEach(el => el.classList.remove('disabled'))
        fadeAnime()
        return
    }


    allBtnHeros.forEach(el => el.classList.add('disabled'))

    typeHeroSelected.forEach(el => {
         allBtnHeros.find(btn => btn.children[0].getAttribute('alt') == el.name)
         .classList.remove('disabled')
    })

    fadeAnime()

    

}


typeHeroDiv.addEventListener('click', function(el){
    el.target.nodeName == 'BUTTON'&&changeHerosMozaico(el.target)
    el.target.parentNode.nodeName == 'BUTTON'&&changeHerosMozaico(el.target.parentNode)
    el.target.parentNode.parentNode.nodeName == 'BUTTON'&&changeHerosMozaico(el.target.parentNode.parentNode)
})

//I need refactoring this above -- jesus!
//inline svg generate that bug 