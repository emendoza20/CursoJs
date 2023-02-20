function fillWords() {


    const num_words = Number(document.getElementById("input").value)

    let array = [];
    let sentence = "";


    for (let i = 0; i <num_words; i++) {
        array.push(prompt("Introduce la palabra " + (i + 1)));
        sentence += array[i];
        if (i < num_words) {
          sentence += " ";
        }


    }

    console.log("Las palabras introducidas son: " + sentence);






}