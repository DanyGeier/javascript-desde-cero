import './style.css'

console.warn('// ! Ciclos de repetición')

console.warn('// ! * for')

//          1         2           3
for (let index = 0; index < 10; index++) {
  console.log(index)
}

// Prueba de escriorio

// vueltas | index
//     1   |    0
//     0   |    1


console.warn('// ! * while')

let condicionCorte = 10
let x = 0
console.log(typeof x)
console.log(x)
x = 1
console.log('inicio')
while (x < condicionCorte) {
  console.log(x)
  x++
}
console.log('fin')


console.warn('// ! * dowhile')

let y = 1
let condicionCorte2 = 5
console.log('inicio')
do {
  console.log('entro')
  y++
} while (y < condicionCorte2);
console.log('fin')

/* Si necesito un indice y control -> for */
/* No sé cantidad de vueltas o número exacto de giros > while */
/* Al menos una ejecución -> do while */


console.warn('// ! * foreach -> Recorrer un array (Método de los arrays')

const frutas = ['manzana', 'durazno', 'banana', 'mango', 'naranja', 'uva', 'frutilla']

console.warn('forEach')

frutas.forEach(function (fruta) {
  console.log(fruta)
})

console.warn('for')

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

console.warn('// ! * for of -> Para recorrer un array')

console.log(frutas)

for (const fruta of frutas) { // > array -> iterable
  console.log(fruta)
}

let palabra = 'Supercalifragillisticoespialidoso' // cadenas -> iterable

for (const letra of palabra) {
  console.log(letra);
}

console.log(frutas)
console.log(palabra)


// * for in -> Para recorrer las claves (keys) de un objeto

let objeto = {
  nombre: 'Danni',
  apellido: 'Geier',
  edad: 28,
  profe: true
}

for (const key in objeto) {
  console.log(key) // clave
  //console.log(objeto.key) // ! NO funciona la notación punto
  console.log(objeto[key])
}

const arrayPersonas = [
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juan.perez@example.com",
    "edad": 28,
    "altura": 1.75,
    "activo": true
  },
  {
    "nombre": "María",
    "apellido": "Gómez",
    "correo": "maria.gomez@example.com",
    "edad": 34,
    "altura": 1.62,
    "activo": true
  },
  {
    "nombre": "Carlos",
    "apellido": "López",
    "correo": "carlos.lopez@example.com",
    "edad": 41,
    "altura": 1.80,
    "activo": false
  },
  {
    "nombre": "Ana",
    "apellido": "Martínez",
    "correo": "ana.martinez@example.com",
    "edad": 25,
    "altura": 1.68,
    "activo": true
  },
  {
    "nombre": "Luis",
    "apellido": "Fernández",
    "correo": "luis.fernandez@example.com",
    "edad": 37,
    "altura": 1.73,
    "activo": false
  },
  {
    "nombre": "Sofía",
    "apellido": "Ramírez",
    "correo": "sofia.ramirez@example.com",
    "edad": 30,
    "altura": 1.65,
    "activo": true
  },
  {
    "nombre": "Diego",
    "apellido": "Torres",
    "correo": "diego.torres@example.com",
    "edad": 45,
    "altura": 1.82,
    "activo": true
  },
  {
    "nombre": "Valentina",
    "apellido": "Castro",
    "correo": "valentina.castro@example.com",
    "edad": 22,
    "altura": 1.70,
    "activo": true
  },
  {
    "nombre": "Martín",
    "apellido": "Ruiz",
    "correo": "martin.ruiz@example.com",
    "edad": 39,
    "altura": 1.78,
    "activo": false
  },
  {
    "nombre": "Lucía",
    "apellido": "Morales",
    "correo": "lucia.morales@example.com",
    "edad": 27,
    "altura": 1.66,
    "activo": true
  }
]

console.log(arrayPersonas)

for (const persona of arrayPersonas) {
  console.log(persona)
}

console.warn('------------------------------------')

for (const persona of arrayPersonas) {
  console.log(persona)
}

console.warn('------------------------------------')

for (const persona of arrayPersonas) {
  console.warn(persona)
  for (const clave in persona) {
    console.log('${clave}: ${persona[clave]}')
  }
}
