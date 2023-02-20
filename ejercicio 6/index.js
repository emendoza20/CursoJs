function ObtenerSignoZodiaco() {

    let mes = Number(document.getElementById("mes").value)
    let dia = Number(document.getElementById("dia").value)
    console.log(mes);
    console.log(dia);
    var result = ''
    switch (mes) {
        case 1:
            if (dia >= 1||dia<=19) {//Capricornio-Capricornio (22.12 — 19.01) Acuario-Acuario (20.01 — 18.02)
                result = "capricornio";
            } if (dia >= 20) {  //
                result = "acuario";
            }
            break;
        case 2:
            if (dia >= 1 || dia <= 18) {//Acuario-Acuario (20.01 — 18.02)

                result = "acuario";
            } if (dia >= 19 || dia <= 28) {  //19-02 piscis
                result = "piscis";
            }
            break;
        case 3:
            if (dia >= 1 || dia <= 20) {
                result = "piscis";
            }
            if (dia >= 21) {
                result = "Aries"
            }
            break;
        case 4:
            if (dia >= 1 || dia <= 19) {
                result = "Aries";
            }
            if (dia >= 20) {
                result = "Tauro"
            }
            break;
        case 5:
            if (dia >= 1 || dia <= 20) {
                result = "Tauro";
            }
            if (dia >= 21) {
                result = "Geminis"
            }
            break;
        case 6:
            if (dia >= 1 || dia <= 20) {
                result = "Geminis";
            }
            if (dia >= 21) {
                result = "Cancer"
            }
            break;
        case 7:
            if (dia >= 1 || dia <= 22) {
                result = "cancer";
            }
            if (dia >= 23) {
                result = "Leo"
            }
            break;
        case 8:
            if (dia >= 1 || dia <= 22) {
                result = "LEO";
            }
            if (dia >= 23) {
                result = "Virgo"
            }
            break;
        case 8:
            if (dia >= 1 || dia <= 22) {
                result = "LEO";
            }
            if (dia >= 23) {
                result = "Virgo"
            }
            break;
        case 8:
            if (dia >= 1 || dia <= 22) {
                result = "LEO";
            }
            if (dia >= 23) {
                result = "Virgo"
            }
            break;
        case 9:
            if (dia >= 1 || dia <= 22) {
                result = "VIRGO";
            }
            if (dia >= 23) {
                result = "LIbra"
            }
            break;
        case 10:
            if (dia >= 1 || dia <= 22) {
                result = "libra";
            }
            if (dia >= 23) {
                result = "escorpio"
            }
            break;
        case 11:
            if (dia >= 1 || dia <= 21) {
                result = "Escorpio";
            }
            if (dia >= 22) {
                result = "sagitario"
            }
            break;
        case 12:
            if (dia >= 1 || dia <= 21) {
                result = "sagitario";
            }
            if (dia >= 22) {
                result = "capricornio"
            }
            break;


    }

    console.log("es:", result)
    document.getElementById("showDatos").innerHTML = `su signo zodiacal es ${result}`


}