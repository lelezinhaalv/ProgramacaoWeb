function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const statusIdade = document.getElementById('statusIdade');

if (idade >= 18) {
    statusIdade.textContent = 'Você é maior de idade.';
              
} 

else {
    statusIdade.textContent = 'Você é menor de idade.';
           
}
}