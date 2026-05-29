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

console.warn('// ! querySelector | querySelectorAll')

// querySelector | Node
// querySelectorAll | NodeList

let elementoDom = listaDom[0]
console.dir(elementoDom)

elementoDom.classList.add('color-verde', 'borde-rojo')

elementoDom.classList.remove('borde-rojo')




