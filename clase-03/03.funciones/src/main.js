import './style.css'

// Funciones

// ! ----------------------
console.warn('Funciones')
// ! ----------------------

// Son unas estructuras que nos permiten reutilizar nuestro código. Las funciones son una pequeña máquina que realiza una tarea en especifico. En javascript una función es un bloque de código reutilizable que se ejecuta cuando es llamado.

/* console.log('Hola Maximiliano')
console.log('Hola Luciano')
console.log('Hola Pedro')
console.log('Hola Alejandro')
*/

// ! Anatomia de las funciones
// * Una funcion tiene que tener un nombre

// ? Declaración de la función
/* funcion <nombre><parametro1>,<parametro2>,<parametro3>{
    <paso-<-ejecutar>
    <paso-<-ejecutar>
    <paso-<-ejecutar>
    return <valor-de-retorno>
} */

/*
f(x) = x + 2
y = x + 2
*/

/*
tabla valores
x -> 0 -> retorna -> y -> 2
z -> 5 -> retorna -> y -> 7 
*/

console.warn('// ! funciones tradicionales')

console.warn('// ! funciones que retorna')

function sumar(a, b){
    return a + b
}

let resultado = sumar(4, 7) // El 11 se guarda en el resultaedo (reetorna)

console.log(resultado) // 11
console.log(sumar(2,3)) // 5
//                  11        4     15
console.log(sumar(resultado, 4)) // 15
//
console.log(sumar(sumar(2,3), sumar(4,5))) // 14
// debugger
let fnMultiplicar = function (a, b){
    return a * b
}

let resultadoMulti = fnMultiplicar(2, 4) // 8
console.log(resultadoMulti)

console.warn('// ! Funcion flecha, arrow fuction, funciones lamba')

let fnMultiplicarArrow = (a, b) => {
    return a * b
}

console.log(fnMultiplicarArrow(5,6))

console.warn('// ! Una simplificación')

let fnMultiplicarArrowOtraManera = (a, b) =>  a * b
let fnMultiplicarArrowOtraManera2 = (a, b) =>  (a * b)

console.warn('// ! Otra simplificación')

let darLaBienvenida = (nombreCompleto) => {
    console.log('Bienvenido a todos, un gusto {$nombreCompleto}')
}

let darLaBienvenidaSimplificada = (nombreCompleto) => console.log('Bienvenido a todos, un gusto {$nombreCompleto}')

console.warn('¿Cuándo no retorna? Las funciones. ¿Retornan algo?')
//La funciones en javascript si no tienen la palabra 'return', retorna undefined
darLaBienvenida('Juan Manuel') // 'Bienvenido a todos, un gusto Juan'
console.log(darLaBienvenida('Maxi')) // 'Bienvenidos a todos, un gusto Maxi' + undefined
let valor = darLaBienvenida('Pedro') // 'Bienvenidos a todos, un gusto Pedro' + undefined
console.log(valor) // undefined

// composición de funciones -> f(g(h(x)))

let arrayFlores = ['Rosas', 'Tulipanes', 'Jazmin', 'Amapolas', 'Margarita', 'Jacaranda', 'Hortencias', 'Azucena', 'Girsaol', 'Ceibo']

arrayFlores.map(function(flor, i) {
    //debugger
    console.log(`${i+1} -> ${flor}`)
})

/* arrayFlores.map(<callback>) */
/* arrayFlores.map(function() {}) */
/* callback -> cbs -> Es una función pasada como argumento de otra */

// ! A las funciones que no tienen nombre se les denomina funciones anonimas
// arrayFlores.map(function() {}) // * Funcion anonima tradicional
// arrayFlores,map(() => {}) // *Función arrow tradicional

;(function(nombre) { console.log(`Hola, ${nombre}`)})('Danni')
// (() => {})()

    let arrayPeinados =['aerodinamico', 'rastas', 'rulos', 'trenzas', 'lacio', 'rodete']

let mostrarElementosEnPantalla = (item, i) => {
    console.log(`${i+1} -> ${item}}`)
}

arrayPeinados.map(mostrarElementosEnPantalla)
console.warn('Flores')