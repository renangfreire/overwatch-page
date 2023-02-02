const game_buy = document.querySelector('.game-container__buy');
const persons_info = document.querySelector('.news__person-info')
const newgame_info = document.querySelector('.news__new-game-info')
const type_hero__buttons = document.querySelector('.type-hero')
const hero_header = document.querySelector('.hero-header')
const hero_mozaico = document.querySelector('.hero-mozaico')
const hero_about = document.querySelector(".hero-about")

function headerReveal(){
    ScrollReveal().reveal('.game-header', {
        easing: 'ease-out',
        origin: 'top',
        distance: '6rem',
        duration: 400,
        opacity: 0,
        delay: 200,
    })


    ScrollReveal().reveal(game_buy.children, {
        distance: '6rem',
        origin: 'top',
        opacity: 0,
        delay: 400,
        duration: 1500,
        interval: 1200,
        easing: 'ease-in-out'
    })

    ScrollReveal().reveal('.game_platform', {
        distance: '6rem',
        origin: 'left',
        opacity: 0,
        duration: 400,
        delay: 800,
        interval: 400,
        easing: 'ease-out'
    })

    ScrollReveal().reveal('.game-container__preview', {
        origin: 'top',
        distance: '5rem',
        opacity: 0,
        duration: 900,
        delay: 1200,
    })
    
}

function newSectionReveal(){
    const slideTop = (delay) => {
        return {
            distance: '2rem',
            origin: 'top',
            opacity: 0,
            duration: 400,
            delay: delay,
            interval: 300,
            easing: 'ease-in-out'
        }
    }
    const slideLeft = (delay) => {
        return {
            distance: '3rem',
            origin: 'left',
            opacity: 0,
            duration: 600,
            easing: 'ease-out',
            delay: delay
        }
    }
    ScrollReveal().reveal(persons_info.children, slideTop(200))
    ScrollReveal().reveal('.news__person-background', slideLeft(0))

    ScrollReveal().reveal(newgame_info.children, slideTop(600))
    ScrollReveal().reveal('.news__new-game-background', slideLeft(200))

}

function heroSectionReveal(){
    ScrollReveal().reveal(hero_header.children, {
        duration: 400,
        distance: '1rem',
        origin: 'top',
        opacity: 0,
        easing: 'ease-in',
        interval: 200,
        delay: 200
    }   
    )
    ScrollReveal().reveal(type_hero__buttons.children,{
        duration: 500,
        distance: '3rem',
        origin: 'left',
        opacity: 0,
        easing: 'ease-out',
        delay: 300,
        interval: 300,
    })
    ScrollReveal().reveal(type_hero__buttons.children,{
        duration: 500,
        distance: '3rem',
        origin: 'left',
        opacity: 0,
        easing: 'ease-out',
        delay: 300,
        interval: 300,
    })
    ScrollReveal().reveal(hero_mozaico.children, {
        duration: 250,
        distance: '3rem',
        origin: 'top',
        opacity: 0,
        easing: 'ease-in',
        delay: 400,
        interval: 200,
    }),
    ScrollReveal().reveal('.hero-preview_image', {
        duration: 300,
        distance: '3rem',
        origin: 'right',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 1200,
    })
    ScrollReveal().reveal(hero_about.children, {
        duration: 300,
        distance: '1rem',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 1500,
        interval: 150
    })
}

export default function init(){
    headerReveal()
    newSectionReveal()
    heroSectionReveal()
}

