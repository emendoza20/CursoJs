
function esBisiesto() {

    const year = document.getElementById("aaa").value


    if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 ===0)) {

        document.getElementById("result").innerHTML = `El año es Bisiesto`
    } else {

        document.getElementById("result").innerHTML = `El año NO es Bisiesto`

    }



}