

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

const tableBodyHTML = document.getElementById("tableBody")

function renderizarTabla (arrayPaises) { 



arrayPaises.forEach ( (paises, indice) => {
const posición = String(indice + 1).padStart(2,0)
  
  tableBodyHTML.innerHTML += ` <tr>
                                <th scope="row">${posición}</th>
                                 <td>${paises.nombre}</td>
                                  <td>${paises.capital}</td>
                                   <td>${paises.habitantes}</td>
                                     <td>${paises.ubicacion}</td>
      
    </tr>
    </table> `
   }
) }

renderizarTabla (paisesMundo)

////////////////////////////////////////////////////////////////////////////

const paisesFiltrados  = paisesLatinoamerica.filter(function(pais) { 
  if (pais.habitantes >= 15000000) {
  return true} 
    else {
  return false 
  }
  
  })

console.log(paisesFiltrados)
//==================================================================================================== 


//tener en cuenta que el for each va a leer todos los elementos, por lo tanto va a quedar mostrando en pantalla el ultimo. para evitar eso al signo ingual, le anteponemos un mas += para que despues de cada interacción que sobre la constante tableBodyHTML le agregué un elemento parecido al que está leyendo de HTML.


// const pares = numeros.filter (function(value) {
// if (value % 2 === 0) {
// console.log(`${value} es par`)
// } else {

// console.log(`${value} es impar`)
// }
// })

const numer = [1,2,3,4,5,6,7,8,9,10,11]

 const par = numer.filter (function(val) {
if (val % 2 === 0) {
 console.log(`${val} es par`)
 return true
 } else {

 console.log(`${val} es impar`)
 return false
 }
 })


 // A continuación se muestran formas mas abreviadas de la sintaxis de esta misma función.

 const numerosPares = numer.filter (function(val) {
   if (val % 2 === 0) {
   console.log(`${val} es par`)
   return true
   } 

   })

   const nPares = numer.filter (function(val) {
     if (val % 2 === 0) {
     console.log(`${val} es par`)
    
     } 
    
     })
     const peresillos = numer.filter ((val) => {
      
       if (val % 2 === 0) 
          return true 

     })
    

    const numerillosPares = numer.filter ((val) => {

      return val % 2 === 0 ? true : false
    })
    console.log(numerillosPares)


    const numberPar = numer.filter ((val) => val % 2 === 0 ? true : false )

           console.log(numberPar)
   