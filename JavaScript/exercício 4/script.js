function ligar() {
  document.getElementById("lampada").src = "acessa.jpeg";
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementsByTagName("h1")[0].style.color = "black";
}

function desligar() {
  document.getElementById("lampada").src = "apagada__2_-removebg-preview (1).png";
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("h1")[0].style.color = "white";
}