const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const mensagem = document.getElementById('mensagem');

btn1.addEventListener('click', function() {
    mensagem.innerText = 'Você acertou!!!';
})

btn2.addEventListener('click', function() {
    mensagem.innerText = 'Você errou, tente novamente...';
})

btn3.addEventListener('click', () => {
    mensagem.innerText = 'Você errou, tente novamente...';
})