import './style.css'

console.log('// ! DOM (Document Object Model')

console.log('document') // DOM (console.log -> Casi siempre nos va a mostrar una representación)
console.dir(document) // DOM (console.dir -> Nos va a mostrar la verdadera cuestión -> Objeto)

// HTMLDocument -> El documento HTML

console.warn('// Vamos a ver con el console.dir los nodos html')

console.log(document.children[0].children[1].children[0]) // Nodo html que representa el h1
console.log(document.children[0].children[1].children[0].textContent) 

console.warn('// ! getElementById | getElementsByClassName | getElementsByTagName')

// plural -> HTMLCollection
// singular -> HTMLElement

let tituloAlternativo = document.getElementById('titulo-alternativo')
//console.log(tituloAlternativo)
console.dir(tituloAlternativo)
console.log(tituloAlternativo.textContent) // Texto contenido, sin etiquetas
console.log(tituloAlternativo.innerText) // >Manipulación de <strong> DOM / BOM</strong>
// Manipulación estilos en linea
tituloAlternativo.style.backgroundColor = 'darkblue'
tituloAlternativo.style.color = 'white'

let lista = document.getElementsByTagName('ul')
console.log(lista) // HTMLCollection

let elementoUl = lista[0]
//console.log(elementoUl)
console.dir(elementoUl)

let listaDom = document.getElementsByClassName('dom')
console.log(listaDom[0])

let listaDomMasDirecta = elementoUl.getElementsByClassName('dom')
console.log(listaDomMasDirecta[0])

// querySelector | Node
// querySelectorAll | NodeList

let elementoDom = listaDom[0]
console.dir(elementoDom)

elementoDom.classList.add('color-verde', 'borde-rojo')

elementoDom.classList.remove('borde-rojo')

// Selección de elementos de DOM moderna
console.warn('// ! querySelector | querySelectorAll') // Selección de elementos de DOM moderna
// Query Selector trabaja con los selectores CSS.
// * Poniendo el nombre de la etiqueta (h1. h2, p, ul)
// * Colocando un punto delante del identificador (.subtitulo)
// * Colocando un numeral delante del identificador (#titulo-alternativo)

// querySelector -> me selecciona solo el primer elemento que encuentro. (Node Html)
// querySelectorAll -> me selecciona todos los elementos que coincidan con el selector CSS. (Lista de nodos)
let subtitulos = document.querySelectorAll('.subtitulo')
//console.log('subtitulo')
console.dir(subtitulos) // el nodo html

let arrayColores = ['crimson', 'darkgreen']

subtitulos.forEach((sub, i) => {
    console.dir(sub)
    //debugger
    sub.style.border = `1px solid ${arrayColores[i]}`
})

let subtitulosGet = document.getElementsByClassName('.subitutlos')
console.dir(subtitulosGet)

for (let i = 0; i < subtitulosGet.length; i++) {
    console.log(subtitulosGet[i]) // 0.... 1
}

let arrayColoresYTexto = [
    {
        color: 'crimson',
        texto: 'Cambio el otro texto'
    },
    {
        color: 'darkgreen',
        texto: 'Cambio el otro texto'
    }
]

subtitulos.forEach ((sub, i) => {
    // Completar...Tarea
})

console.warn('// ! Eventos')
// Un evento es algo que pasa en la página

// * El usuario hace algo (click, scroll, escribe)
// * El navegador hace algo (carga página, cambia el tamaño de la ventana)

// Javascript escucha algo y reacciona

let boton = document.querySelector('#btn')
console.dir(boton)

//boton.onclick = <callback>
boton.onclick = function() {
    console.log('Me hicieron click')
}

boton.onclick = function() {
    console.log('Otro evento -> Me clickearon')
}

console.warn('// ! Función addEventListener() ')

// boton.addEventListener('evento', callback)
boton.addEventListener('click', function() {
    console.log('Hicieron click...(1)')    
})

boton.addEventListener('click', function() {
    console.log('Hicieron click...2)')    
})

let accion = function() {
    console.log('Hicieron click...(3)')    
}

boton.addEventListener('click', accion)

console.warn('// ! Objeto del evento')

let divCapa = document.getElementById('capa')
console.dir(divCapa)

/*
divCapa.style.backgroundColor = 'darkorange'
divCapa.style.height = '200px'
divCapa.textContent = 'Soy una capa pintada de color naranja'
divCapa.style.lineHeight = '200px'
divCapa.style.textAlign = 'center'
*/

divCapa.classList.add('div-naranja')
divCapa.textContent = 'Soy una capa pintada de color naranja'
let colorBase = 'darkOrange'

divCapa.addEventListener('mouseenter', function(objEvento) {
    console.log('Se puso encima de mi el puntero')
    /*divCapa.style.backgroundColor = 'darkgreen'
    divCapa.style.height = '400px'
    divCapa.style.color = 'white' */
    console.log(objEvento) // e | evt | event | evento
    objEvento.target.style.backgroundColor = 'darkGreen'
})
divCapa.addEventListener('mouseleave', function(e) {
    console.log('El puntero sale de la capa')
    /*divCapa.style.backgroundColor = colorBase*/
    e.target.style.backgroundColor = colorBase
})
divCapa.addEventListener('mousedown', function() {
    console.log('El boton baja')
})
divCapa.addEventListener('mouseapp', function() {
    console.log('El boton subio')
})

console.warn('// ! Eventos de teclado')

let inputTexto = document.querySelector('#input-texto')
console.dir(inputTexto)

inputTexto.addEventListener('input', e => {
    //console.log(e)
    console.log(e.key)

    console.log(e.target.value)
})