
function CalcularArea() {
    //debugger


    //validar la entrada
    const opcion = Number(document.getElementById("input").value)
   
   

    parseFloat(result)
    let area;

    if (opcion === 1) {
        area=`cuadrado`
        alert("Ha decidido calcular area de un cuadrado");

        let valor_cuadrado = prompt("ingreses valor");


        result = valor_cuadrado * valor_cuadrado
    }
    if (opcion === 2) {
       // const area =document.getElementById("cuadrado").value
        area=`Rectangulo`
        alert("Ha decidido calcular area de un Rectangulo");
        let base = prompt("ingreses base");
        let altura = prompt("ingreses altura");

        result = base * altura
    }

    if (opcion === 3) {

        area=`Triangulo`
        alert("Ha decidido calcular area de un Triangulo");
        let base = prompt("ingreses base");
        let altura = prompt("ingreses altura");

        result = base * altura/2
    }

    if (opcion === 4) {

        area=`Circulo`
        alert("Ha decidido calcular area de un Circulo");
        let radio = prompt("ingreses radio");
        

        result =(Math.PI * (radio*radio));
    }

    document.getElementById("result").innerHTML = `el area de un ${area} es : ${result}`

}