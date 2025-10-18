alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 31);
let tentativas = 3;

while (tentativas > 0) {
    console.log(`Número secreto: ${numeroSecreto}, Tentativas restantes: ${tentativas}`)  // linha para ajudar nos testes
    let palpite = parseInt(prompt("Digite um número entre 0 e 30:"));
    if (palpite === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto.");
        break;
    } else {
        tentativas--;
        if (palpite < numeroSecreto) {
            alert("Você errou! O número é maior. Tentativas restantes: " + tentativas);
        } else {
            alert("Você errou! O número é menor. Tentativas restantes: " + tentativas);
        }
    }
}

if (tentativas === 0) {
    alert(`Suas tentativas acabaram! O número secreto era: ${numeroSecreto} :(`);
}