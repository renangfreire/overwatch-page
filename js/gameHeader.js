// Variables DOM
const game__header = document.querySelector('.game-header')
const nav__links_original = document.querySelectorAll('.nav__link')
const nav__game_links = document.querySelector('.nav__game-links')
const dots_button = document.querySelector('.nav_link_responsive')

//Game Header Scroll
function gameHeaderScroll(){
    const navGameDistance = 63 + Number(game__header.getBoundingClientRect().height)
    let navActive
    
    window.addEventListener('scroll', function(el){
        if(window.scrollY > navGameDistance){
            if(navActive) return
            game__header.classList.add('sticky')
            document.querySelector('.game-container').style.marginTop = '7.7rem';
            navActive = !navActive
            return
        }
        if(window.scrollY < navGameDistance || navGameDistance < 0){
            if(!navActive) return
            game__header.classList.remove('sticky')
            document.querySelector('.game-container').style.marginTop = 0;
            navActive = !navActive
        }
    })
}


// Game Header Responsive
function gameHeaderResponsive(){


const orderToReduce = ['Comunidade', 'Esporte', 'Notícias']

class reduceGameHeader {
    browserWidth = window.innerWidth

    add(el){
            el.dataset.link_active&&el.parentElement.classList.remove('off')
            el.dataset.link_active = true
            return
    }
    remove(el){
                el.dataset.link_active&&el.parentElement.classList.add('off')
                    el.dataset.link_active = false
                    return
    }
}

const nav_links = [...nav__links_original].filter(el => el.children[0].dataset.link).map(el => el.children[0])

const resizeCallback = function(entries){

    const browserWidth = window.innerWidth

    const [entry] = entries

    const reduce = new reduceGameHeader()

    nav_links.forEach(el => {
        
        if(el.dataset.link == orderToReduce[0]){
            if(browserWidth < 1280){
                if(el.dataset.link_active == 'false') return
                reduce.remove(el)
                dots_button.classList.remove('hide')
                return
            }
            if(browserWidth > 1280){
                if(el.dataset.link_active == 'true') return
                reduce.add(el)
                dots_button.classList.add('hide')
                return
            }
        }
        
        if(el.dataset.link == orderToReduce[1]){
            if(browserWidth < 1200){
                if(el.dataset.link_active == 'false') return
                reduce.remove(el)
                return
            }
    
           
            if(browserWidth > 1200){
                if(el.dataset.link_active == 'true') return
                reduce.add(el)
                return
            }
        }

        if(el.dataset.link == orderToReduce[2]){
            if(browserWidth < 1080){
                if(el.dataset.link_active == 'false') return
                reduce.remove(el)
                return
            }
    
           
            if(browserWidth > 1080){
                if(el.dataset.link_active == 'true') return
                reduce.add(el)
                return
            }
        }
    })
}

const resizeObserver = new ResizeObserver(resizeCallback)

resizeObserver.observe(nav__game_links)

}


export default function gameHeader(){
    gameHeaderScroll()
    gameHeaderResponsive()
}


// Preciso Refatorar o Código do Resize
// tá muito ruim de fazer alteração