import init from './scrollReveal.js';

init()

const svgInOrder = function(){
    const order = ['O', 'V', 'E', 'R', 'W', 'A', 'T', 'C', 'H', 'Arrow-1', 'Arrow-2']

    const svgPath = document.querySelectorAll('path')
    const svgPoly = document.querySelectorAll('polygon')
    const allEl = [...svgPath, ...svgPoly]

    return order.map(word => allEl.find(el => el.dataset.word == word))
}


const svgOrdered = svgInOrder()

const svgAnimate = anime({
    targets: svgOrdered,
    loop: false,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 700,
    delay: (el, i) => { return i * 300 + 900},
    complete: () => {
        svgOrdered.forEach(el => {
            el.setAttribute('stroke', 'none')
            el.animate([{fillOpacity: 1}], {duration: 1500, 
            }).onfinish = function(anim){
                const elAffected = anim.target.effect.target
                elAffected.style.fillOpacity = 1
            }
            
        })
    }
})