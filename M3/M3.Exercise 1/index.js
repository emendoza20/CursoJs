let nombre = prompt("Ingrese su nombre:");
let apellido= prompt("Ingrese su apellido:");
let edad = prompt("Ingrese su edad:");

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Edad: " + edad);

alert("Nombre: " + nombre + "Apellido: " + apellido + "Edad: " + edad);

document.getElementById("valores").innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido+ "<br>Edad: " + edad;
