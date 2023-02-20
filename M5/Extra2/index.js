function drawL() {


    numero = Number(document.getElementById('num').value)

    /*document.getElementById('result').innerHTML = `

    *<br>
    *<br>
    *<br>
    ***`    
    document.getElementByid('result').innerHTML=['*','*','*','*'].join('<br>')+''+['*','']

    */
    const vertical = []
    const horizontal =[]
    for (let i = 0; i <= numero; i++) {

        vertical.push("*");
    }

    for (let i = 0; i <= numero/2; i++) {

        horizontal.push("*");
    }

    document.getElementById('result').innerHTML =` ${vertical.join('<br>')} ${horizontal.join('')}`
}

 