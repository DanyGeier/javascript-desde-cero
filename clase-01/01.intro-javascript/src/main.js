import './style.css'

// Mostrar en consola
console.log('Hola Mundo desde JS')

// Mostrar en consola (Warning)
console.warn('Hola Mundo pero amarillo')

// Mostrar en consola (Error)
console.error('Hola Mundo pero en rojo')

// Mostrar en consola (Info) no aporta ninguna diferencia
console.info('Hola Mundo en azul')

console.warn('// ! CONSTRUCTORES DE VARIABLES')
// ! PROHIBIDO USAR VAR------------------------NO SE USA VAR

// ! Constructores modernos y actuales de JS (ECMAScript 6)

// * let -> Me permite crear variables (puede mutar el valor)
// * const -> Me permite crear constantes [NO PUEDE mutar (cambiar) el valor]

console.warn('// ! Variables primitivas')

let apellido ='Geier' // string -> cadena de caracteres
let entero = 123 // number -> número entero
let decimal = 12.3 // number -> número decimal
let vivo = true // boolean -> true o false | (Verdadero | falso)

// * meganrogge.template-string-converter
// * xabikos.JavaScriptSnippets
// debugger
console.log(apellido)
console.log('Esto es un texto dentro del clg');
apellido = 'Gimenez'
console.log(apellido);
console.log(entero)
console.log(decimal)
console.log(vivo);

// ? Nomenclatura de variables
// una palabra -> mínuscula -> variable -> nombre
// más de 2 palabras -> camelCase -> variables -> nombreCompleto

// Debugger -> Es una herramienta que me permite analizar el código paso a paso. Para mejorarlo, para encontrar errores y entender el código.

// debugger // Se crea un breakpoint -> punto de quiebre. (El código se va a detener para poder analizar que está pasando)

/*

! NO USAR VAR (NUNCA MÁS PORQUE HAY TABLA)
constructor   | var     | let   | const
alcance       | global  | local | local
redeclarable  | si      | no    | no
redefinible   | si      | si    | no
*/

/* nombre = 'Luis'
console.log(nombre)
var nombre = 'Maxi'
console.log(nombre)
var nombre = 'Pedro'
console.log(nombre)
*/

// redeclarar
let nombre = 'Maxi'
//let nombre = 'Pedro'
console.log(nombre) // 'Maxi'
nombre = 'Luis' // redefiniendo la variable nombre
console.log(nombre) // 'Luis'
const PI = 3.141592 // declaré
// const PI = 22222 // redeclara
console.log(PI)
// PI = 32412321

console.log('Terminó la aplicación');

