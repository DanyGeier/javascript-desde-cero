import productos from './constants/productos'
import './style.css'

console.log(productos)

const contenedor = document.getElementById('contenedor-productos')
console.dir(contenedor)

const start = () => {
    console.log('Documento listo!')

    productos.forEach((producto) => {
        let card = document.createElement('div') //Crea el elemento html
        //console.log(card)
        card.classList.add('card')

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcionCorta}</p>
            <button>Ver detalle</button>
            `

        console.log(card)

        contenedor.appendChild(card) // Inyecta un nodo html dentro de otro
    })
}


// Todo el documento html haya sido cargado.
document.addEventListener('DOMContentLoaded', start)
