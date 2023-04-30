

// for establece un rango de bucle donde el mismo se ejecuta continuamente y sale una vez que se cumpla la segunda condición, sin embargo puedo ser cortado antes con un if() y su correspondiente break.

//EJERCICIO 1
for (let i = 1;  i <= 10;  i++) {
 document.write(i +`<br>`)
 }

 `<br>`
 //EJERCICIO 2
 for (let i = 1;  i <= 20;  i++) {
    const res = Math.pow(i, 2)
    document.write(`${i}^2 = ${res} <br>`)
}

let age = +prompt("Ingrese la edad de la persona que va a entrar al cine")

//otra forma de negar es utilizar la funcion isNaN() para verificar si el valor es nan, sin embargo esta funcion no permite especificar rango de valores, es booleano.
//Para ingresar datos con rangos es mas conveniente utilizar while que for.
//el bucle while se usa cuando no sabemos la cantidad de veces que la persona que ingresa el dato se va a equivocar.



// while (!(age > 5) || !(age < 130))
// {
// console.warn (`el valor ingresado no pertence a una edad`)
// age = +prompt("Ingrese la edad de la persona que va a entrar al cine")
// }

//  console.log('ingresaste bien, salio del bucle')


//otra forma de hacerlo es (  !(age > 5 && age < 130)  )