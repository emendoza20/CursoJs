function Calculate()
{


    //debugger
    const miarray = [2,1,3];

    
    let addEven=0;
    let addOdd=0;

    for(let i=0;i<=(miarray.length-1);i++){

        if(miarray[i]%2===0)
        {
            addEven += miarray[i]

        }else if(miarray[i]%2!==0){

            addOdd += miarray[i]
        }
    }

    console.log(`el resultado de los pares es: ${addEven}`)
    console.log(`el resultado de los impares es: ${addOdd}`)






}