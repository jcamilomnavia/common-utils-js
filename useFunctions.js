/**
 * Se accede a las funciones del directorio funciones por medio de destructuring 
 * y accediendo al index.js de la carpeta por defecto
 */
const {name1, name2} = require('./funciones') // Destructuring

/**
 * Ahora podemos usar las funciones
 */
const sum = name1(1,2) // Retorna la suma de dos numeros
console.log(`La suma fue ${sum}`) // Se imprime en consola el resultado