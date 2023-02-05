import Hero from './Heros.js';


// DOM VARIABLES
const hero_mozaico = document.querySelector('.hero-mozaico');
const hero_preview_img = document.querySelector('.hero-preview_image')
const hero_name = document.querySelector('.hero-name');
const hero_description = document.querySelector('.hero-description');


function changeAboutHero(heroSelected){
    hero_name.textContent = heroSelected.name 
    hero_description.innerHTML = `<img src=./assets/images/heros/${heroSelected.typeHero}-icon.svg></img>${heroSelected.typeHero}`
}

function changeImagePreview(heroSelected){
    hero_preview_img.setAttribute('src', `./assets/images/heros/preview/${heroSelected.pathImg}.png`)
    hero_preview_img.animate([{transform: 'translateX(50%)', opacity: '0'}, {transform: 'translateX(0px)', opacity: '1'}], {duration: 500, easing: 'ease-in-out'})
}

function changeHero(btn){
    const heroSelected = Hero.allHeros.find(el => el.pathImg == `heros-${btn.dataset.hero}`)

    changeImagePreview(heroSelected)
    changeAboutHero(heroSelected)
}

hero_mozaico.addEventListener('click', function(el){
    if(el.target.parentNode.classList.contains('select-hero-btn')){
        changeHero(el.target)
    }
})