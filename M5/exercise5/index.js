function ConsultarBeca() {

   // debugger

    
    //let opcion = document.getElementById("opcion").value;
    //let opcion2 = document.getElementById("opcion2").value;

    //let valor;
    var array = [];
    cant_becas = 1;

    while (cant_becas <= 5) {

        let nombreAlumno = prompt("Introduce el nombre del alumno/a");
        let edad = prompt("Introduce edad")
        let opcion = prompt("TIenes titulo universitario");
        let opcion2 = prompt("Estas en paro");
        array.push(nombreAlumno);
        if (edad >= 18 && opcion == "si") {
            valor = `Obtiene Beca`;
        } else if (opcion2 == "si" || edad >= 18 || opcion2 == "si") {
            valor = `Obtiene Beca`;
        } else {
            valor = `no tiene beca`;
        }
        //  document.getElementById("showDatos").innerHTML = valor;
        cant_becas++;
    }

    console.log("Los 5 alumnos/as con beca son:");
    for (var i = 0; i < 5; i++) {
        console.log(array[i]);
    }
}


