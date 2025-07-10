const nome = document.getElementById("nome").Value;
const classe = document.getElementById("classe").Value;
const força = document.getElementById("força").Value;
const imagem = document.getElementById("imagem").Value;

const novoPersonagem = {
    nome: nome,
    classe: classe,
    força: Number(força),
    imagem: imagem
} ;