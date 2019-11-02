/**
 * Se crea un index.js dentro de la carpeta para acceder a las funciones exportadas
 * dentro de los archivos de la carpeta,asi mantenemos un modelo-vista-controlador
 * y se puede acceder a las funciones de una manera mas practica
 * @see useFunctions.js
 */

const {name1} = require('./funcion1')
const {name2}  = require('./funcion2')
const {name3}  = require('./funcion3')

module.exports = {
  name1,
  name2,
  name3
}
