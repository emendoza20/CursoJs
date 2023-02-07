function Medianotas() {
 let note1 = Number(document.getElementById("note1").value);
  let note2 =Number (document.getElementById("note2").value);
  let  note3 =Number(document.getElementById("note3").value);
  let media= (note1 + note2 + note3) / 3;
  document.getElementById("promedio").innerHTML = average;
  }