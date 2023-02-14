//DOM
const navGame__links = document.querySelectorAll('.nav__link');
const company__links = document.querySelectorAll('.company_link');
const dotsDropdown = document.querySelector('.nav_link_responsive')
const dotsDropdownContent = document.querySelector('.nav__game-dots_dropdown_content')

// ANIMATION

const fadeAnimation = (el, axleY) => {
    anime({
        targets: el,
        translateY: axleY,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        loop: false,
        duration: 1000,
    })
}


const divideLinks = function(links){
    return Array.from(links).filter(el => el.children[1])
}

function gameMenuDropdown(){
const enableMenuDropdown = function(){
    const linksWithDropdown = divideLinks(navGame__links)

    linksWithDropdown.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const dropdown = el.children[1]
            dropdown.classList.remove('hide')
            fadeAnimation(dropdown.children, [10, 0])
        })
        el.addEventListener('mouseleave', () => {
            el.children[1].classList.add('hide')
        })
    })
}
enableMenuDropdown()
}

function companyMenuDropdown() {
    const linksWithDropdown = divideLinks(company__links)

    const openModal = (dropdown) => {
        dropdown.classList.toggle('hide')
        fadeAnimation(dropdown.children, [-10, 0])
    }

    linksWithDropdown.forEach(el => {
        el.addEventListener('mouseenter', () => {
            
            const dropdown = el.children[1]

            // Verified if is mobile
            if (!navigator.userAgent.match(/Android/i)
            ?? !navigator.userAgent.match(/webOS/i)
            ?? !navigator.userAgent.match(/iPhone/i)
            ?? !navigator.userAgent.match(/iPad/i)
            ?? !navigator.userAgent.match(/iPod/i)
            ?? !navigator.userAgent.match(/BlackBerry/i)
            ?? !navigator.userAgent.match(/Windows Phone/i)){
            openModal(dropdown)
            }
        }, false)
        el.addEventListener('mouseleave', () => el.children[1].classList.add('hide'))
        el.addEventListener('click', () => {
            const dropdown = el.children[1]
                if(!dropdown.classList.contains('hide')){
                dropdown.classList.add('hide')
                return
        }
        openModal(dropdown)
           
        }, false)
    })
    

}

function dotsMenuDropdown(){
    dotsDropdown.addEventListener('mouseenter', () => {
        const dropdown = dotsDropdown.children[1]
        dropdown.classList.remove('hide')
        fadeAnimation(dropdown.children, [10, 0])
    })
    dotsDropdown.addEventListener('mouseleave', () => {
        const dropdown = dotsDropdown.children[1]
        dropdown.classList.add('hide')
        fadeAnimation(dropdown.children, [10, 0])
    })
}

export default class DotsDropdownContent{
    add(el){
        const selectedContainer = dotsDropdownContent.querySelector(`.${el.dataset.link.toLowerCase()}_dots`)
        selectedContainer.classList.remove('hide')
    }
    remove(el){
        const selectedContainer = dotsDropdownContent.querySelector(`.${el.dataset.link.toLowerCase()}_dots`)
        selectedContainer.classList.add('hide')
    }
}





gameMenuDropdown()
companyMenuDropdown()
dotsMenuDropdown()