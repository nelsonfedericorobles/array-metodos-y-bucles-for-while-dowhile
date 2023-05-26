

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
// foreach se parece a for of, pero con la ventaja de que el segundo valor que solicitamos nos entrega el indice del array.

paisesMundo.forEach ( (paises, indice) => {

  console.log (indice,  paises.habitantes,  paises.habitantes, paises.capital)

} )

paisesMundo.forEach ( (paises, indice) => {

   const i = indice + 1
   document.write ( ` ${i} -  ${paises.capital} <br> `)

} )

//la función getElementeById en document consigue del html el elemnto que indicamos con el ID, y como abjeto que es ahora tiene una lista de funciones, y entre ellas la que usaremos es innerHTML para que introduzcamos el html nuestro JS, y para que desde nuestro JS podamos hacer modificaciones en HTML con el simbolo de atribución que es el =. 


const tableBodyHTML = document.getElementById("tableBody")
paisesMundo.forEach ( (paises, indice) => {
const posición = String(indice + 1).padStart(2,0)
  
//tener en cuenta que el for each va a leer todos los elementos, por lo tanto va a quedar mostrando en pantalla el ultimo. para evitar eso al signo ingual, le anteponemos un mas += para que despues de cada interacción que sobre la constante tableBodyHTML le agregué un elemento parecido al que está leyendo de HTML.
  tableBodyHTML.innerHTML += ` <tr>
                                <th scope="row">${posición}</th>
                                 <td>${paises.nombre}</td>
                                  <td>${paises.capital}</td>
                                   <td>${paises.habitantes}</td>
                                     <td>${paises.ubicacion}</td>
      
    </tr>
    </table> `
   }
)
//la función getElementeById consigue del html el elemnto que indicamos, y como abjeto que es ahora tiene una lista funciones, y entre ellas la que usaremos es innerHTML para que introduzcamos el html nuestro JS, y para que desde nuestro JS podamos hacer modificaciones en HTML con el simbolo de atribución que es el =. 


