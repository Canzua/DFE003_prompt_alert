
const number = prompt('Oi, por favor insira um número que eu te falo quanto é o dobro Lo)');
const doble = number * 2;

alert("O dobro do número informado é: " + doble);

const restaurantBillAmount = prompt('Agora é a hora de acertar a conta, qual o valor do jantar?' );
const billAmountNumber =  parseInt(restaurantBillAmount);
const rate = 10;
const callRate = ((rate * billAmountNumber) / 100);
const total = (billAmountNumber + callRate);

alert("O valor total do jantar, incluindo a taxa de atendimento, é: R$ " + total);

