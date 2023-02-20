
function guessNumber() {

    let numAleatorio = Math.floor(Math.random() * 500) + 1;

    while (true) {
        let numUsuario = parseInt(prompt("Adivina un número entre 1 y 500:"));
        let distancia = Math.abs(numAleatorio - numUsuario);
        
        if (numUsuario === numAleatorio) {
            alert("¡Correcto! ¡Has adivinado el número!");
             
        } else if (distancia >= 50) {
            alert("Fred, frío: tu número es " + (numUsuario > numAleatorio ? "mayor" : "más pequeño"));
        } else if (distancia >= 15) {
            alert("Tebi, Tebi: tu número es " + (numUsuario > numAleatorio ? "mayor" : "más pequeño"));
        } else {
            alert("Caliente, caliente: tu número es " + (numUsuario > numAleatorio ? "mayor" : "más pequeño"));
        }
    }
}
