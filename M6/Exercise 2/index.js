function print_people() {

   // debugger
    const number_person = Number(document.getElementById("num1").value)

    let total_media = calculate_media(number_person);

    document.getElementById('result').innerHTML = ` ${total_media}`

}

function calculate_media(number_person) {
    let i = 1;
    let media = 0;
  
    while (i <= number_person) {
        let edad = Number(prompt("Introduce edad"));
        if (edad > 0 || edad <= 120) {
            media += edad
        }
        i++;
    }
     
    return parseFloat(media / number_person)
}