let totalCliques = 0;

document.getElementById("botaoCliques").addEventListener("click", function () {
    totalCliques++;
    document.getElementById("contador").textContent = "Você clicou " + totalCliques + " vezes."
});