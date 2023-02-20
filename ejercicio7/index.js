function ObtenerMultiplo() {

    let dividendo = Number(document.getElementById("dividendo").value)
    let divisor = Number(document.getElementById("divisor").value)



    if (divisor < 2 || divisor > 7) {
        //alert("Error: el divisor debe estar comprendido entre 2 y 7.");

        throw Error('El divisor debe estar entre 2 y 7')
    }
    if (dividendo % divisor === 0) {
      
        document.getElementById("showDatos").innerHTML = `${dividendo} es multiplo de ${divisor}.`
    }
    if(dividendo % divisor != 0) 
    {
         document.getElementById("showDatos").innerHTML = ` ${dividendo} no es multiplo de ${divisor}.`
 
    }
}