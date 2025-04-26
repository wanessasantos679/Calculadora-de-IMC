function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
  
    if (!peso || !altura) {
      resultado.textContent = "Por favor, preencha todos os campos.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let mensagem = '';
  
    if (imc < 18.5) {
      mensagem = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = "Você está com o peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
      mensagem = "Você está com sobrepeso.";
    } else {
      mensagem = "Você está obeso.";
    }
  
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>. ${mensagem}`;
  }
  