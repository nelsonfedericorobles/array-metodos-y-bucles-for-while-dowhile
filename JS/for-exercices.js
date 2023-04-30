

//EJERCICIO1
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad similique architecto excepturi vel necessitatibus, deserunt dolorem sed blanditiis minus totam adipisci magni, delectus animi officiis voluptatem culpa at ratione!"

console.dir (text.length)

for (let indice = 0; indice < text.length; indice++){
     console.log(text[indice])
}





//EJERCICIO2
const texto = prompt('ingrese el texto')

//si no establecemos bien la condicion2, la condicion3 restara infinitamente a la variable i. 
for (let i = texto.length - 1; i >= 0; i--){
    document.write(`${texto[i]}`)
}

//EJERCICIO3
const texto2 = prompt('ingrese el SEGUNDO texto PARA SABER LA CANTIDAD DE LETRAS A QUE TIENE')

//si no establecemos bien la condicion2, la condicion3 restara infinitamente a la variable i. 

const letraA = 'a'
let totalLetrasA = 0
for (let ind = texto2.length - 1; ind >= 0; ind--) {

   const letrasDelTexto = texto2[ind]
 
   if (letraA.includes(letrasDelTexto))
   {
   totalLetrasA++}
}

console.log(`tiene un total de ${totalLetrasA} letras A`)