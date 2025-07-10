const quadrado = document.getElementById("quadrado");

quadrado.addEventListener("mouseover", function () {
    quadrado.style.background = "rgb(0, 132, 255)";
});

quadrado.addEventListener("mouseout", function () {
    quadrado.style.background = "pink";
});