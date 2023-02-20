function TablaMultiplicar() {

    //debugger
/*    const numero = Number(document.getElementById("input").value);
    const table = []

    let i = 0;

    let result = 0
    for (let i = 0; i <= 2; i++) {
        //result=numero*i
        table.push(numero + "*" + i + "=" + result)
        //console.log(`${numero}*${i}=${result}`)
        result = 0;

        document.getElementById("result").innerHTML = `${table[i]}`;
        //  document.getElementById("result").innerHTML ="Nombre "+i+" "+nombre[i]"";
    }

    for (let i = 0; i < table.length; i++) {

        document.getElementById("result").innerHTML = `${table[i]}`;
    }*/

   
        let  number = document.getElementById("input").value;
        let  resultado = document.getElementById("result");
        let  table = [];
        
        for (let i = 1; i <= 10; i++) {
          table.push(number + " *" + i + " = " + number * i);
        }
        
        resultado.innerHTML = table.join("<br>");



}