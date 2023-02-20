function ObtenerMedia() {

    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    let media

    media = (nota1 + nota2 + nota3) / 3

    if (media < 5) {
        document.getElementById("showDatos").innerHTML = `No haz superado el curso.Tienes que recuperar`;

    } if (media >= 5 || media <= 7) {
        document.getElementById("showDatos").innerHTML = `¡Enhorabuena has aprobado pero deberias seguir practicando`;

    } if (media >= 7) {
        document.getElementById("showDatos").innerHTML = `¡Enhorabuena has superado el curso ! Pasa ya al siguiente nivel!`;
    }


}