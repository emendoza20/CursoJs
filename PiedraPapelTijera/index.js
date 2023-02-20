function PlayGame() {

  const options = {
    1: "Piedra",
    2: "Papel",
    3: "Tijera"
  };

  console.log("Jugamos a piedra, papel o tijera:");
  console.log("1. Piedra");
  console.log("2. Papel");
  console.log("3. Tijera");
  var user = document.getElementById("num").value;

  const userChoice = parseInt(prompt("Elección (1-3):"));

  if (![1, 2, 3].includes(userChoice)) {
    console.log("Entiendo que no quieres jugar. Adiós");
    return;
  }

  const computerChoice = Math.floor(Math.random() * 3) + 1;

  let result = "";
  if (userChoice === 1 && computerChoice === 3) {
    result = "Has ganado";
  } else if (userChoice === 2 && computerChoice === 1) {
    result = "Has ganado";
  } else if (userChoice === 3 && computerChoice === 2) {
    result = "Has ganado";
  } else if (userChoice === computerChoice) {
    result = "Empate";
  } else {
    result = "He ganado";
  }

  //console.log(`Yo ${options[computerChoice]} y tú ${options[userChoice]}. ¡${result}!`);

  document.getElementById("result") = inner.HTML = `Yo ${options[computerChoice]} y tú ${options[userChoice]}. ¡${result}!`);




}
