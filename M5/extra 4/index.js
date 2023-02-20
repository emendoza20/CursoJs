function guessNumber() {
    debugger
    let numeroAleatorio = Math.ceil(Math.random() * 10);
    let numeroAdivinado = true;
 
    let intento=1;
    let numeroUsuario;
    let num = parseInt(numeroUsuario);

    while (numeroAdivinado && intento<=5) {
        let numeroUsuario= prompt("Adivina el número entre 0 y 10")
        let num=parseInt(numeroUsuario)
        if (num === numeroAleatorio) {
            alert(`Enhorabuena, el número era ${numeroAleatorio}i has necessitat ${intento} para acertar`)
         
            numeroAdivinado = false;
        } else {
            alert("Lo siento, inténtalo de nuevo");

            
        }

        intento++;
    }


    if (intento > 5){
        alert(`Has utilitzat massa intents! El número aleatorio es ${numeroAleatorio}`)
    
    }

}