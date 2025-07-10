const btnAzul = document.getElementById('azul');
const btnAmarelo = document.getElementById('amarelo');
const btnVerde = document.getElementById('verde');

btnAzul.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(138, 228, 255)';
});

btnAmarelo.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(249, 249, 170)';
});

btnVerde.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(179, 252, 179)';
});


