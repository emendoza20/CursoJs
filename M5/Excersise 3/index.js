function guessNumber() {
    debugger
    let numeroAleatorio = Math.ceil(Math.random() * 10);
    let numeroAdivinado = false;

    while (!numeroAdivinado) {
        let numeroUsuario = prompt("Adivina el número entre 0 y 10");
        if (numeroUsuario === numeroAleatorio) {
            alert("Enhorabuena, el número era " + numeroAleatorio);
            numeroAdivinado = true;
        } else {
            alert("Lo siento, inténtalo de nuevo");
        }
    }


}
