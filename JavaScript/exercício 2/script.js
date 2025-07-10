let contador = 0;

function atualizarValor() {
  document.getElementById("valor").textContent = contador;
}

function aumentar() {
  contador++;
  atualizarValor();
}

function diminuir() {
  contador--;
  atualizarValor();
}

// Captura pressionamento de  tecla
document.addEventListener("keydown", function(evento) {
  if (evento.key === "=") {
    aumentar();
  } else if (evento.key === "-") {
    diminuir();
  }
});
