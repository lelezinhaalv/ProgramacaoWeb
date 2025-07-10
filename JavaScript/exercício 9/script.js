function mostrarMensagem() {
    const hora = new Date().getHours();
    const horaFormatada = hora.toString().padStart(2, '0') + 'hrs';
    
    let saudacao;
    if (hora < 12) saudacao = 'Bom dia!';
    else if (hora < 18) saudacao = 'Boa tarde!';
    else saudacao = 'Boa noite!';
    
    document.getElementById('mensagem').textContent = `${saudacao} (${horaFormatada})`;
}
