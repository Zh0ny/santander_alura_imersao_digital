
/*
//Desafio 1 - Dia da Semana
input_usuario = prompt("Qual é o dia da semana?");

function normalize(str){
    return String(str || '')
        .normalize('NFD')                 
        .replace(/[\u0300-\u036f]/g, '') 
        .toLowerCase()
        .trim();
}

const days = ['segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado','domingo'];
const daySet = new Set();

for (const d of days) {
    const n = normalize(d);
    daySet.add(n);             
    daySet.add(n.split('-')[0]);
}

console.log(daySet);    
const isNormalized = normalize(input_usuario).replace(/\s+/g,'-');

const base = isNormalized.split('-')[0];

if (!daySet.has(isNormalized) && !daySet.has(base)) {
    alert("Dia inválido!");
} else if (base === 'domingo' || base === 'sabado') {
    alert("É dia de descanso!");
} else {
    alert("É dia de trabalho!");
}

//Desafio 2 - Positivo ou Negativo
const numero = parseInt(prompt("Digite um número:"));
if (numero > 0){
    alert("Positivo");
} else if (numero < 0) {
    alert("Negativo");
} else {
    alert("Neutro com respeito a adição e subtração");  
}

//Desafio 3 - Pontos
const pontos = parseInt(Math.random() * 201);

if (pontos >= 100){
    alert(`Parabéns, você venceu! sua pontuação foi: ${pontos}`);
} else {
    alert(`Que pena, tente novamente para ganhar! sua pontuação foi: ${pontos}`);
}

//Desafio 4 - Mensagem para usuário
let saldo_da_conta = parseFloat(Math.random() * 10000001).toFixed(2);
alert(`Seu saldo é de R$ ${saldo_da_conta}`);

//Desafio 5 - Boas-vindas
let nome = prompt("Digite seu nome:");
alert(`Seja bem-vindo, ${nome} !`);
*/