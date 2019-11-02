/**
 * Se crea una funcion anonima o arrow function
 * que recibe un parametro nombre del usuario y lo imprime
 * haciendo uso de las comillas francesas
 * @param {*} a 
 * @param {*} b 
 */
const name1 = (a) =>{
  console.log(`Hola ${a}`)
}

/**
 * Manejo de objetos JSON que se puede manipular 
 * muy facilmente en javascript
 * 
 * @param {*} model 
 */
const printParam = (model) => {
  console.log(`El nombre del bicho es: ${model['name']}`) // Se accede al valor de la propiedad name
  console.log(`Tambien podemos saberlo con: ${model.name}`) // Se accede al valor de la propiedad name de diferente manera
  console.log(`Los keys son: ${Object.keys(model)}`)  // Se obtienen las propiedades del objeto JSON que estamos tratando
  console.log(`El parametro es de tipo: ${typeof (model)}`) // Tipo de parametro

  // Implementacion de map() en un arreglo normal
  model.poderes.map((poder) => {
    console.log(`Poder de ${model.name} es ${poder}`)
  })

  // Implementacion de map() en un arreglo de objetos JSON
  // @see Varible model para ver la estructura de este arreglo
  model.amos.map((amo) => {
    console.log(`Amo de ${model.name} es ${amo.nombre}`)
  })
}

/**
 * Declaramos una variable como un objeto JSON para
 * testar el metodo anterior
 */
const model = {
  name: 'Pikachu',
  tipo: 'Pokemon',
  poderes: ['impactrueno','achu'],
  amos: [
    {
      nombre: 'ash',
      apellido: 'ketchup'
    },
    {
      nombre: 'navia',
      apellido: 'senior'
    }
  ] 
}

/**
 * Invocamos el metodo y le pasamos la variable
 */
printParam(model)

/**
 * Se exportan las funciones y/o variables
 * para hacer uso de estas en otro archivo
 */
module.exports = {
  name1,
  printParam
}