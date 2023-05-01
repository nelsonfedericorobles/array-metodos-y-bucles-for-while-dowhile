
//Para lo que mas se lo suele usar a un bucle for, es para integrar array.


const paisesLatam = ["Argentina", "Bahamas", "Barbados", "Belice", "Bolivia", "Brasil" , "Colombia", "Costa Rica", "Cuba", "Chile", "Dominica", "Ecuador", "El Salvador", "Granada", "Guatemala", "Guyana", "Haití", "Honduras", "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República", "Dominicana"]

for (let i = 0; i < paisesLatam.length; i++  ){
      document.write(`<p>${String((paisesLatam.length - i)).padStart(2,'0')}-${paisesLatam[i]}</p>`)

}
