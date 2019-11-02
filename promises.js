/**
 * Se crea una nueva promesa como ejemplo para mostrar
 * como funciona el codigo asincrono en javascript
 * @param {} bool 
 */
const examplePromise = (bool) => {
  return new Promise((resolve, reject) => {
    if(bool){             // Si todo funciona bien
      resolve('Working')  //se retorna el Callback resolve para el *then*
    } else {
      reject(Error('it broke')) //se retorna el Callback reject lanzando un error para el *catch*
    }
  })
}

/**
 * Funcion anonima que contiene codigo asincrono y secuencial
 * Que instrucciones se ejecutaran primero??
 */
const exampleAsync = () => {
   examplePromise(true)   // Llamamos la funcion que contiene la promise creada anteriormente
  .then((result) => {     // Si todo sale bien, el then se ejecutara cuando obtenga respuesta de la promesa, el codigo se sigue ejecutando secuencialmente sin esperar respuesta
    console.log(result,'Working fine')
  })
  .catch((Err) => {       // Si algo sale mal, el catch se ejecutara cuando obtenga respuesta de la promesa, el codigo se sigue ejecutando secuencialmente sin esperar respuesta
    console.log(Err)    
  })
  console.log('Who is first') //Codigo secuencial
   setTimeout(() => {     // Mas codigo asincrono que se ejecuta despues de 2 segundos
     console.log('im third')
  }, 2000)
  console.log('Who is seconf')  // Codigo secuencial
}

exampleAsync()
