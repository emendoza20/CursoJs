
function numberTranslator() {

    const num = document.getElementById("num").value
    let numLetras = [
        "cero", "uno", "dos", "tres", "cuatro", "cinco",
        "seis", "siete", "ocho", "nueve", "diez", "once",
        "doce", "trece", "catorce", "quince", "dieciséis",
        "diecisiete", "dieciocho", "diecinueve", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];

    //console.log(num);

    //let message="";
    if (num <= 20) {
        //console.log(numLetras[num])
        document.getElementById("result").innerHTML = (`${numLetras[num]}`)
    } else {
        let aux = num / 10;
         parseInt(aux)
        //console.log("Decena: ", decena)
        unidad = aux - 2;//
        indice = parseInt("2" + unidad.toString())// convierto  a cadena
        console.log("indice es:", indice)//indice de la decena  "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"
        //console.log(numLetras[indice]+  "y " +numLetras[num % 10])
        document.getElementById("result").innerHTML = (`${numLetras[indice]} y ${numLetras[num % 10]}`)


        /*switch (parseInt(aux)) {
            case 2:
                console.log(numLetras[20] + " y " + numLetras[num % 10])
                break;
            case 3:
                console.log(numLetras[21] + " y " + numLetras[num % 10])
                break;
            case 4:
                console.log(numLetras[22] + " y " + numLetras[num % 10])
                break;
            case 5:
                console.log(numLetras[23] + " y " + numLetras[num % 10])
                break;
            case 6:
                console.log(numLetras[24] + " y " + numLetras[num % 10])
                break;
            case 7:
                console.log(numLetras[25] + " y " + numLetras[num % 10])
                break;
            case 8:
                console.log(numLetras[26] + " y " + numLetras[num % 10])
                break;
            case 9:
                console.log(numLetras[27] + " y " + numLetras[num % 10])
                break;

        }*/

    }
    //document.getElementById("result").innerHTML = message;



}
