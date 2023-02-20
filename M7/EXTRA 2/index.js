function esPar() {

    var num= document.getElementById("num").value;

    let message

    if (num%2===0) {
        document.getElementById("showDatos").innerHTML = `El numero es par`;

    } if (num%2!=0){
        document.getElementById("showDatos").innerHTML = `No es par`;

    }
}