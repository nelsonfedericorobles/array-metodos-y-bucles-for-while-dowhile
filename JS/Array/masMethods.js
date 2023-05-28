

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
const conuntriesForm= document.getElementById("country-form")
console.log('esta aqui', conuntriesForm)





function renderizarTabla (arrayPaises) { 
  calcularPoblacionMundial (arrayPaises)

  tableBodyHTML.innerHTML =' '
arrayPaises.forEach ( (paises, indice) => {
const posición = String(indice + 1).padStart(2,0)
  
  tableBodyHTML.innerHTML += ` <tr>
                                <th scope="row">${posición}</th>
                                 <td>${paises.nombre}</td>
                                  <td>${paises.capital}</td>
                                  <td>${paises.ubicacion}</td>
                                   <td class= "text-center">${paises.habitantes}</td>
                                     
                                     <td class="text-center"><button class= "btn btn-secondary " onclick = "borrarPais(${indice})"> <i class="fa-sharp fa-solid fa-trash"></i> </ button></td>
      
    </tr>
    </table> `
   }
) }
 
renderizarTabla (paisesMundo)

////////////////////////////////////////////////////////////////////////////
function filtrarPaises() {
const paisesFiltrados  = paisesMundo.filter(function(pais) { 
  if (pais.habitantes >= 1000000000) {
  return true
} 
  
  })

  renderizarTabla (paisesFiltrados)
 
}

function mostrarListaCompleta() {
  renderizarTabla (paisesMundo)

}

function aplicarFiltroNombre(eventoDesdeHtml) {
  const valorFiltro = eventoDesdeHtml.target.value.toLowerCase()

  const paisesFiltrados = paisesMundo.filter(function(pais) {
    const nombrePais = pais.nombre.toLowerCase()
    if (nombrePais.includes(valorFiltro)) { 
      //A tener en cuenta que includes puede filtrar de forma parcial solo si se lo aplica en un solo elemento con cadena de caracteres como sucede en el ejercicio, primero los filtramos y luego aplicamos include. De lo contrario en un array con varios elementos, buscara elementos pero con el nombre completo de dicho elemento.
      return true }
  })

  renderizarTabla(paisesFiltrados)
}                                                              
        

// const listaCopia = [...paisesMundo]
const listaCopia = structuredClone(paisesMundo)

function borrarPais (indice ) {

    listaCopia.splice(indice,1)
                    //listaCopia.shift () quita el primer elemento
                       //listaCopia.unshift () Agrega un elemento al principo, y .push() lo hace al final
  renderizarTabla(listaCopia)
                    //calcularHabitantes(listaCopia)
}


function calcularPoblacionMundial (arrayPaises) {

  const cantidadHabitantes = arrayPaises.reduce ((acumulado, elementos) =>{
      acumulado += elementos.habitantes
      return acumulado
  }, 0)
  const poblacionHtml = document.getElementById('total')
  poblacionHtml.innerText = cantidadHabitantes
  
  }
  
  //calcularPoblacionMundial (paisesMundo)






//A continuación se muestra como revertir las letras de una palabra con los siguientes 3 metodos de array. En este caso lo usamo con un string, que se comporta parecido a un array.
 const algo ="arbol"

console.log (algo.split('').reverse().join(''))
//Split corta o segmente de caracter a carter con identico valor creandome un array.
const pagina = "https://universe.rollingcodeschool.com/"

console.log(pagina.split('.').pop())


//Mostramos el metedo .at() para traer el elemento de un array segun el indice.

console.log(paisesMundo.at(3))
//==================================================================================================== 
//A contuación vemos que find() es un metodo para buscar un elementos en un array y findIndex() para buscar el idice que tiene un elemento. Por lo general este ultimo se usa solo para saber la posición de elemento y así poder elliminarlo o modificar su valor, entre otros objetivos.




  const buscarElemento = paisesMundo.find((cierto) => { 
  if(cierto.nombre.toLowerCase() === 'china'.toLowerCase())
  return true
})


console.log(buscarElemento)

const buscarEleme = paisesMundo.findIndex((cierto) => { 
  if(cierto.nombre.toLowerCase() === 'indonesia'.toLowerCase())
  return true
})

console.log('el idice encontrado es = ', buscarEleme)


 function calcularHabitantes (array) {
let count = 0
array.forEach (pais => {
  count += pais.habitantes
  
})
console.log(count)
}
calcularHabitantes (listaCopia)
calcularHabitantes (paisesMundo)

// reduce() es otro metodo/función muy bueno para hacer conteos, que es el que estamos usando para la tabla.

// Por ultimo veremos some() para ver si algun elemento de array cumple con la condición- Y every() para ver que todos los elementos cumplan con la condición.

const variable1 = [1,2,3,4,5,6,7,8,9,10]

console.log (variable1)
// some()
const variable2 = variable1.some ((numero) => 
   (numero % 2 === 0) 
)
console.log (variable2, 'Por que hay al menos un numero par')

//every()
const variable3 = variable1.every ((numero) => 
(numero % 2 === 0) 
)
console.log (variable3, 'No todos los numeros son pares')
//join() para unir todos los elementos mediante un caracter.
const union =variable1.join('-')

console.log(union)

//fill() para rellenar con valores de cierto elemento a cierto elemento.
 
const fill = variable1.fill(0,4,8)
console.log(fill, 'metodo fill()')

//convinación de metodo Array.from() para crear array y fill() para rellenar array.
const crearArray= Array.from(Array(15)).fill({})
console.log(crearArray)
// Ojo al definir los metodos, algunos son funcione que en su estructura interna ya tiene un condiconal if(), ya que buscan algunos valores por sobre otros.
