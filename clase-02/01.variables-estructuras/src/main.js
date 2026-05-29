import './style.css'

// Variables

console.warn('// ! Constructores de variables')
// let
let nombre = 'Danny' // Tipo de dato Cadena (String)
console.log(nombre)
console.log(typeof nombre)
// const
nombre = 'Maxi' // Tipo de dato Cadena (String)
console.log(nombre)
console.log(typeof nombre)

// Javascript es un lenguaje con tipado dinamico (Debilmente tipado)
// Quiere decir que la cajita (Variable) no solo puede cambiar su contenido sino que tambien el tipo de dato

nombre = 2 // Cambió de cadena a número
console.log(nombre)
console.log(typeof nombre)

nombre = true
console.log(typeof nombre)

nombre = 'Otra cadena'
console.log(nombre)
console.log(typeof nombre)

console.log('Tipo de datos primitivos')
/*
* string
* boolean
* number (int, float)
*/

console.warn('Tipo de datos objeto')

// ! backtick -> alt + 96 `

let primerNombre = 'Dani'
let segundoNombre = 'Ale'
let apellido = 'Geier'

console.warn('Concatenar -> unir')
console.log(primerNombre +' '+ segundoNombre + ' ' + apellido) // tradicional de concatenar

console.warn('Template String (Templates literales');

console.log(`${primerNombre} ${segundoNombre} ${apellido}`) // usando backtick

console.warn('Tipo de datos objeto');

console.warn(`/*
* arrays
* objetos
*/`)

console.warn('Arrays');
// Una estuctura de datos para almacenar varios elementos indexada (Lista, Vector)

let colores = ['rojo', 'naranja', 'azul', 'verde', 'amarillo', 'violeta']
console.log(colores)

console.log('// Acceder al color verde')
console.log(colores[3])
console.log(colores[5]); // última posición
// última posición sin saber cuantos elementos tengo
console.log(colores[colores.length-1]); // último elemento
let posicionUltimoElemento = colores.length - 1
console.log(colores.at(-1)) // último elemento (Método de los arrays)

console.log('// Cantidad de elementos dentro del array')
console.log(colores.length) // 6

console.log('// Averiguar tipo de dato')
console.log(typeof colores) // object 


console.warn('Objetos')

let usuario = {
  /* key value */
  nombre: 'Danni',
  edad: 28,
  activo: true,
  coloresFavoritos: ['rojo', 'violeta', 'azul'],
  direccion: {
    direccion: 'Calle Falsa',
    altura: 1234,
    provincia: 'Buenos Aires'
  }
}

console.log(usuario)
console.log(typeof usuario)

console.warn('// ! ¿Como diferencia en un array de un objeto?')

console.log(Array.isArray(colores)) // true
console.log(Array.isArray(usuario)) // false

console.warn('// Acceso a los datos de los objetos')

console.log('// notacion punto')
console.log(usuario.nombre)
console.log(usuario.nombre)
console.log(usuario.coloresFavoritos) // ['rojo', 'violeta', 'azul']
console.log(usuario.coloresFavoritos[1]) // 'violeta'
console.log(usuario.coloresFavoritos[2]) // 'azul'

console.log('// notacion corchete (bracket notation)')
console.log(usuario['nombre'])
console.log(usuario['coloresFavoritos'][2]) // 'Azul'
console.log(usuario['direccion']['direccion']) // 'Dirección'

// Notaciones alternadas
console.log(usuario['direccion'].provincia) // 'Buenos Aires'

// Tipado dinamico -> python, php, javascript
// Tipado estáaticos -> JAVA, C#
// https://www.tiobe.com/tiobe-index/(Indice de lenguajes más usados)
// https://es.wikipedia.org/wiki/Brendan_Eich

console.log('Objetos literales')

let productoUno = {
    nombre: 'Colchón de espuma en caja Freestyle Box 2 plazas 140x190 Cm La Espumería Color Gris Oscuro',
    precio: 276734.05,
    medidas: {
      largo: '190 cm',
      ancho: '140 cm'
    }
}
let productoDos = {
    nombre: 'Microondas Digital Atma Watdb20ucp 20l 700w',
    precio: 159999,
    voltaje: 220,
    potencia: '700w'
}
let productoTres = {
    nombre: 'Sony Playstation 5 consola Slim Digital + Juego Astro Bot Y Gt7',
    precio: 1199999,
    capacidad: '825gb',
    wifi: true
}

console.log(productoUno)
console.log(productoDos)
console.log(productoTres)

let arrayProductos = [productoUno, productoDos, productoTres]

console.log(arrayProductos)

console.log(arrayProductos[2].nombre) // Nombre del productoTres

console.log(arrayProductos[2]['nombre']) // nombre del productoTres


console.log(arrayProductos[0].medidas.ancho)
console.log(arrayProductos[0]['medidas']['ancho'])

console.warn('// ! Estructuras evaluación/control (condicionales)...')

console.log('// ! if () {}')
let llueve = true

if (llueve){
  console.log('Llevo paraguas')
}

if (!llueve){
  console.log('No llueve. No paraguas')
}

// If () {} else {}

if (llueve){
  console.log('Llevo paraguas')
} else {
  console.log('No llueve. No paraguas');
}

let edad = 17

if (edad >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// Ternario

let resultado = edad > 18
console.log(resultado)
resultado = edad > 18 ? 'Mayor de edad' : 'Menor de edad'

// Switch

