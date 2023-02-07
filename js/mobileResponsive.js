// DOM
const body = document.querySelector('body')
const gameHeader = document.querySelector('.game-header')
const companyHeader = document.querySelector('.company-header')

function toggleMobile(){
    if(window.innerWidth < 980){
        if(body.classList.contains('mobile')) return
 
         body.classList.add('mobile')
         gameHeader.classList.add('mobileActive')
         companyHeader.classList.add('mobileActive')
         return
     }
 
     if(!body.classList.contains('mobile')) return
     body.classList.remove('mobile')
     gameHeader.classList.remove('mobileActive')
     companyHeader.classList.remove('mobileActive')
 
}

toggleMobile()


window.onresize = toggleMobile