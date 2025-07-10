const contadorElemento = document.getElementById('contador');
const mensagemElemento = document.getElementById('mensagem');

let cliques = 0;

function contarCliques() {
    cliques++;
    contadorElemento.textContent = cliques;

if (cliques === 10) {
    mensagemElemento.textContent = 'Parabéns! Você atingiu a meta!'; 

}
}
