const inTime = [] // el array vacio, para que se puede guardar la informacion
//////******Funcioness***********/////////
function addDate() { // entra aqui, porque han dado al primer boton

    const hourDateNow = new Date() // el metodo para que automaticamente de de la fecha y la hora
    inTime.push(hourDateNow) // metodo push nos sube en array la hora y fecha actual
    console.log(inTime) // en la console comprobamos que funcione y realmente nos saca la hora y fecha
}

function searchNumber(number, arrayNumbers) {// funcion buscar numero

    let result = -1
    for (let index = 0; index < arrayNumbers.length; index++) {
 
        if (arrayNumbers[index] === number) {
            result = index
        }
    }
    return result
}

function procesarFrase(frase) {
    frase = frase.toLowerCase();
    frase = frase.replace(/[^\w\s]/gi, "");
    frase = frase.replace(/\s+/g, "");
    return frase;
  }


  function searchText(array, texto) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].includes(texto)) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }

//////////////////////*******************///////////////////////777777
function menu(id) { // cuando das al boton en html, que estan numerados
    if (id === 1) { // si es primero con numero 1, cumpe conla condicion de addDate()
        addDate()
    }
    if (id === 2) {
        
        const position = searchNumber(52, [9,52,1,47,85,8])
        console.log(position)
    }



    if(id===3){

        let words = prompt("Ingrese la frase:");
        let result= procesarFrase(words);
        alert("La frase procesada es: " + result);
    }


    if(id===4)
    {
        const array = [
            "Historia universal",
            "Historia de España",
            "Geografía",
            "Historia de la lengua catalana",
            "Antropología",
            "Inglés"
          ];
          let texto = prompt("Ingrese el texto a buscar:");
          let resultado = searchText(array, texto);
          alert("Los elementos que contienen el texto son: " + resultado);
       


    }

}

