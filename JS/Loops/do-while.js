 let edad

do {
 edad= +prompt('ingrese la edad')

}  while (edad < 5 || edad > 130)  {

}

document.write('Valor dentro del rango. Salio del bucle')



for(let i = 1; i <= 10000; i++) {

    const res = Math.pow(i,2)
    document.write(`${i} ^ 2 ${res} <br>`)
    if (res === 1681) {
    break}
    
    }