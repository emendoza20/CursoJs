function Draw_Triangle() {

    //debugger
    const userNumber = Number(document.getElementById("num1").value)

    let result = "";// declaro cadena vacia para concatenar el asterisco
    for (let i = userNumber; i >= 1; i--) {  //decrementando el primer ciclo

        for (let j = 1; j <= i; j++) {//
            result = result + "*";// concateno el asterisco 
        }
        result = result + "<br>"

    }
    document.getElementById("result").innerHTML = result;



}

