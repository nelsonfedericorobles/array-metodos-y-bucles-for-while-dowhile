const paisesMundo = [
    {
      "nombre": "China",
      "ubicacion": "Asia",
      "habitantes": 1393730000,
      "capital": "Pekín"
    },
    {
      "nombre": "India",
      "ubicacion": "Asia",
      "habitantes": 1366417756,
      "capital": "Nueva Delhi"
    },
    {
      "nombre": "Estados Unidos",
      "ubicacion": "América del Norte",
      "habitantes": 332915073,
      "capital": "Washington D. C."
    },
    {
      "nombre": "Indonesia",
      "ubicacion": "Asia",
      "habitantes": 276361783,
      "capital": "Yakarta"
    },
    {
      "nombre": "Pakistán",
      "ubicacion": "Asia",
      "habitantes": 225200000,
      "capital": "Islamabad"
    },
    {
      "nombre": "Brasil",
      "ubicacion": "América del Sur",
      "habitantes": 213317639,
      "capital": "Brasilia"
    },
    {
      "nombre": "Nigeria",
      "ubicacion": "África",
      "habitantes": 211401000,
      "capital": "Abuya"
    }
]


const arrayModificado = paisesMundo.map (function(pais,idx) {
    const nameUpperCase = pais.nombre.toUpperCase()
    //const pop = new Intl.NumberFormat ('es-AR', {
    //compactDisplay: 'short' ,
   // })
    return { 
       name: `${idx + 1} - ${nameUpperCase}`
  }
    //habitantes: pop.format(pais.habitantes),
   // newPropery: 'Esto es un nuevo'
     

    } )

    console.log(arrayModificado)
    
    console.log(paisesMundo)


    const Array1= ["uno","dos",3,4,"carol",6,7,8,9,10,11]

    //Esta sería la forma mas rapida de filtrar información de un array: si las llaves no se abren para definir una función, directamente retorna el valor que se coloque despues de la flecha
    const Array2 = Array1.map ((pais, idx) => `${idx} - ${pais}`) 

    console.log (Array2)

    Array2.forEach (function(textNumber, index) {

         Array2[index] = textNumber.toUpperCase()
          
    })
    Array2.push("chocolate")
    console.log ("Array 2", Array2)

    const Array3 = Array1.slice(4,5)

    console.log (Array3)

    //resumiendo los metodos para romper referencia de array son:
    // array.slice()
    // array.map()
    // array = [...array2] los 3 puntitos indican recepción de información en otro array.
    // array1 = array2.from(array1)
     const obj1 = {
      name: "pepe",
      edad: 13
     }
     // Y esta sería la forma de hacer una copia de objetos sin modificar el objeto original.
     const obj2 = Object.assign({}, {...obj1} )

     obj2.name = "Jorge"
      console.log(obj1)
      console.log(obj2)

    //

    const array1 = [1,2,,3,4,5,6,7,8]

    const cuboDeLosNumeros = array1.map(function(number) {
       const resultado = Math.pow (number, 3)
        return resultado
} )

   console.log (array1)
   console.log (cuboDeLosNumeros)