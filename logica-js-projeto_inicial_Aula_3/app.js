/*alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 31);
let tentativas = 1;

while (palpite !== numeroSecreto) {
    console.log(`Número secreto: ${numeroSecreto}, Tentativas restantes: ${tentativas}`)  // linha para ajudar nos testes
    let palpite = parseInt(prompt("Digite um número entre 0 e 30:"));
    if (palpite === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto.");
        break;
    } else {
        tentativas--;
        if (palpite < numeroSecreto) {
            alert("Você errou! O número é maior. Quantidade de tentativas: " + tentativas);
        } else {
            alert("Você errou! O número é menor. Quantidade de tentativas: " + tentativas);
        }
        tentativas++;
    }
    if (tentativas === 100) {
        alert(`Suas tentativas acabaram! O número secreto era: ${numeroSecreto} :(`);
        break;
    }   
}*/

// Desafio 1 - Contador de 1 até 10

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafio 2 - Contador de 10 até 1
let contadorDecrescente = 10;
while (contadorDecrescente >= 1) {
    console.log(contadorDecrescente);
    contadorDecrescente--;
}

// Desafio 3 - Contagem regressiva personalizada
let limite_inferior = parseInt(prompt("Digite um número para iniciar a contagem regressiva:"));
while (limite_inferior >= 0) {
    console.log(limite_inferior);
    limite_inferior--;
}
alert("FIM!");

// Desafio 4 - Contagem progressiva personalizada
let limite_superior = parseInt(prompt("Digite um número para iniciar a contagem progressiva:"));
let contador_progressivo = 0;
while (contador_progressivo <= limite_superior) {
    console.log(contador_progressivo);
    contador_progressivo++;
}
alert("FIM!");

