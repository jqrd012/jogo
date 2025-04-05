let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!'; 

function console01() {
    console.log('O botão foi clicado!');
}
function alerta() {
    alert('Eu amo JS');
}
function prompt01() {
    let cidade = prompt('Fale uma cidade no Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function soma() {
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let resultado = num1 + num2;
    alert(`A soma é ${num1 + num2} = ${resultado}`);
}