//DOM
const navGame__links = document.querySelectorAll('.nav__link');
const company__links = document.querySelectorAll('.company_link');

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

    linksWithDropdown.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const dropdown = el.children[1]
            dropdown.classList.toggle('hide')
            fadeAnimation(dropdown.children, [-10, 0])
        })
        el.addEventListener('mouseleave', () => el.children[1].classList.add('hide'))
    })
    

}






gameMenuDropdown()
companyMenuDropdown()