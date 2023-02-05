// DOM VARIABLES
const allHerosButton = document.querySelector('.all-heros-btn')

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