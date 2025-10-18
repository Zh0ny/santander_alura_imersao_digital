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
        alert("Você errou! Tentativas restantes: " + tentativas);
    }
}

if (tentativas === 0) {
    alert(`Suas tentativas acabaram! O número secreto era: ${numeroSecreto} :(`);
}
alert("Boas vindas ao nosso site");
let nome = "Lua";
let idade = 25;
let numero_de_vendas = 50;
let saldo_disponivel = 1000;
console.log(`Nome: ${nome}, Idade: ${idade}, Vendas: ${numero_de_vendas}, Saldo: ${saldo_disponivel}`);
alert("Erro! Preencha todos os campos");
let mensagem_de_erro = "Erro! Preencha todos os campos";
alert(mensagem_de_erro);
nome = prompt("Digite seu nome:");
idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18) {
    alert("Pode tirar a habilitação.");
} 
