function EsNegativo() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 < 0 || num2 < 0) {
         document.getElementById("showDatos").innerHTML = `uno de los dos numeros es negativo`;
    }else{

        document.getElementById("showDatos").innerHTML = `Introduciste dos numeros Positivos`;
    }
}