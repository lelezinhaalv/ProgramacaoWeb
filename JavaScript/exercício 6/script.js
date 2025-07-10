function somar() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }
    
    const resultado = num1 + num2;
    document.getElementById('resultado').textContent = `Resultado da soma: ${resultado}`;
}

function subtrair() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }
    
    const resultado = num1 - num2;
    document.getElementById('resultado').textContent = `Resultado da subtração: ${resultado}`;
}

function dividir() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }
    
    if (num2 === 0) {
        document.getElementById('resultado').textContent = "Não é possível dividir por zero.";
        return;
    }
    
    const resultado = num1 / num2;
    document.getElementById('resultado').textContent = `Resultado da divisão: ${resultado}`;
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }
    
    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = `Resultado da multiplicação: ${resultado}`;
}
