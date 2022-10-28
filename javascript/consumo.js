var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const distanciaTotal = parseInt(lines[0]);
const totalCombustivel = parseFloat(lines[1]);

console.log(lines);
const consumoMedio = distanciaTotal / totalCombustivel;
console.log(consumoMedio.toFixed(3) + " km/l");