alert("Boas vindas ao jogo do número secreto!");
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
}
