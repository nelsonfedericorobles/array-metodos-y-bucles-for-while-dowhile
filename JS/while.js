 while (!(age > 5) || !(age < 130))
 {
console.warn (`el valor ingresado no pertence a una edad`)
age = +prompt("Ingrese la edad de la persona que va a entrar al cine")
}

 console.log('ingresaste bien, salio del bucle')


//otra forma de hacerlo es (  !(age > 5 && age < 130)  )