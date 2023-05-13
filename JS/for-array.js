
//Para lo que mas se lo suele usar a un bucle for, es para integrar array.


const paisesLatam = ["Argentina", "Bahamas", "Barbados", "Belice", "Bolivia", "Brasil" , "Colombia", "Costa Rica", "Cuba", "Chile", "Dominica", "Ecuador", "El Salvador", "Granada", "Guatemala", "Guyana", "Haití", "Honduras", "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República", "Dominicana"]

for (let i = paisesLatam.length; i > 0 ; i--  ){
      const indice = i
      document.write(`<p>${String((indice)).padStart(2,'0')}-${paisesLatam[indice-1]}</p>`)

}
