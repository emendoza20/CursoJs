function ConsultarBeca() {

    let edad = document.getElementById("edad").value;
    let opcion = document.getElementById("opcion").value;
    let opcion2 = document.getElementById("opcion2").value;

    let valor;


    while(cant_becas<5)
    {
        var nombreAlumno = prompt("Introduce el nombre del alumno/a");

        if (edad >= 18 && opcion == "si") {
            valor = `Obtiene Beca`;
        } else if (opcion2 == "si" || edad >= 18|| opcion2=="si") {
            valor = `Obtiene Beca`;
        } else {
            valor = `no tiene beca`;
        }
        document.getElementById("showDatos").innerHTML = valor;
    }
}



while (numBecas < 5) {
    var nombreAlumno = prompt("Introduce el nombre del alumno/a");
    alumnosConBeca.push(nombreAlumno);
    numBecas++;
  }