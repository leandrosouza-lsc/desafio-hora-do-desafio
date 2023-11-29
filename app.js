let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function euAmoJs(){
    alert('Eu amo JS');
}

function nomeCidade(){
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function fazerSoma(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado da soma é: ${resultado}`);
}