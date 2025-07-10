function verificarNúmero() {
    const numero = parseInt(document.getElementById("número").value);
    const resultadoElement = document.getElementById("resultado");
    
    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, digite um número.";
        return;
    }
    
    if ( numero %  2 != 0) {
        resultadoElement.textContent = "O número é Ímpar";
    } else {
        resultadoElement.textContent = "O número é Par";
    }
}

document.getElementById("número").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarNúmero();
    }
});