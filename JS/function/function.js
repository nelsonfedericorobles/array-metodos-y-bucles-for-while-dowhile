


function calcularPerimetroCirculo (diametro) {

    const perimetro = parseInt(Math.PI * diamtro * 100) / 100
    console.log (perimetro)
}

function calcularPerimetroRectalgulo (base, altura) {
    console.log(`base es ${base}, altura es ${altura}`)
    const perimetro = base * altura 
    console.log(`el resultado es ${perimetro}`)


}
calcularPerimetroRectalgulo (2,4)


//En este caso el valor de la variable nombre tiene que ser de texto, por eso es fundamental que el valor esté entre comillas, letras sola provocara un valor indefinido.

function saludoEscrito (nombre) {
    
    
    alert(`Hola soba bola ${nombre}`)
}
saludoEscrito("José")

const iva = 1.21
const interesesFinanciado = 1.80

function calcularPrecios (precioProducto, cuotas) {

const precioContado = parseInt((precioProducto * iva)*100)/100 


const precioFinanciado = parseInt((precioContado * interesesFinanciado)*100)/100
const precioCuota = parseInt((precioFinanciado / cuotas)*100 )/100
   
document.write (`<p><strong>el precio del producto es ${precioProducto} </strong></p> <br> <p>El precio de contado del producto es de ${precioContado}</p> <hr>`)
     
if(!cuotas) return     

document.write (`<p><strong>El precio financiado final sera de ${precioFinanciado} </strong></p> con un total de ${cuotas} cuotas de ${precioCuota}<hr>`)
}


calcularPrecios (200,3)
calcularPrecios (100)
calcularPrecios (1021,18)
calcularPrecios (450)
calcularPrecios (5000,6)

//Esta son otras dos formas de declarar una función, en este caso atraves de cosntantes, sin embargo, la desventaja es que para llamar la función la misma tiene que estar abajo de la linea de la constante declarada.

//Otro punto a tener en cuenta es que existe un principio de responsabilidad unica que debe tener cada función, para que cada una tenga su tarea, el limite de abreviar una función sería su capacidad de ser entendida por otros programadores.

const calcularAlgunosPrecios = function () {

    console.log(`calcula algunos precios`)
}
const masCalculos = () => {
    console.log(`Esto es el ARROW FUNCTION`)
}

calcularAlgunosPrecios()
masCalculos()

// Al mismo tiempo para ser mas eficiente podemos utlizar constantes que contienen funciones dentro de las declaraciones de otras funciones, o para recibir un valor como parametro. Sin embargo para que una función adquiera el valor de su calculo debemos usar la palabra reservada return (que retorna el valor que nosotro queremos dentro de la declaración de nuestra función.)





function cementoDeMarca (precioCemento) {
    const precioFinal = precioCemento 
    return precioFinal
}
const valorCemento = cementoDeMarca (10)

function metrosCuXCemento (lado1 , lado2){
    const metros = lado1 * lado2 * valorCemento
    return metros
}
const revoque = metrosCuXCemento (10,10)

console.log (revoque)

///////////////////////////////////////////


function cementoDeMarc (precioCemento) {
    const precioFinal = precioCemento 
    return precioFinal
}

// otra forma mas directa es anidar directamente la funcion dentro de otra función, y refereciar el valor recibido con un paramentro por ejemplo:

function metrosCuXCement (lado1 , lado2, cementoValor){
    const metros = lado1 * lado2 * cementoDeMarc (cementoValor)
    return metros
}
const revo = metrosCuXCement (10,10,10)

console.log (revo)