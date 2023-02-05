export default class Hero {
    static allHeros = new Array()
    
    constructor(name, pathImg, typeHero){
        this.name = name,
        this.pathImg = pathImg,
        this.typeHero = typeHero
    }
}


function createNewHero(name, pathImg, typeHero){
    const newHero = new Hero(name, pathImg, typeHero)
    Hero.allHeros.push(newHero)
}

const heros = [
    {
        name: 'Ana',
        type: 'suporte'
    },
    {
        name: 'Ashe',
        type: 'dano'
    },
    {
        name: 'Bastion',
        type: 'dano'
    },
    {
        name: 'Brigitte',
        type: 'suporte'
    },
    {
        name: 'Cassidy',
        type: 'dano'
    },
    {
        name: 'D.va',
        type: 'tanque'
    },
    {
        name: 'Doomfist',
        type: 'tanque'
    },
    {
        name: 'Echo',
        type: 'dano'
    },
    {
        name: 'Genji',
        type: 'dano'
    },
    {
        name: 'Junkrat',
        type: 'dano'
    },
    {
        name: 'Lucio',
        type: 'suporte'
    },
    {
        name: 'Mei',
        type: 'dano'
    },
    {
        name: 'Mercy',
        type: 'suporte'
    },
    {
        name: 'Moira',
        type: 'suporte'
    },
    {
        name: 'Orisa',
        type: 'tanque'
    },
    {
        name: 'Pharah',
        type: 'dano'
    },
    {
        name: 'Reaper',
        type: 'dano'
    },
    {
        name: 'Reinhardt',
        type: 'tanque'
    },
]

heros.forEach((el, i) => createNewHero(el.name, `heros-${i + 1}`, el.type))