

    debugger




function get_Phrase() {
 debugger
    const frase = document.getElementById("cadena").value

    let new_frase=""
 
   new_frase =frase.toLowerCase()
   //new_frase = frase.split(" ").join("") // > "Textodeejemplo"
   new_frase =  new_frase.replace(/\s+/g, '') //   sin espacios en blanco
   new_frase = new_frase.replace(/[^\w\s]/gi, "");// sinn acentos   cadena = cadena.replace(/á/gi,"a");
 
   



   console.log(new_frase)





}