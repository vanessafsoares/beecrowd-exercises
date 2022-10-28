var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = input.split(" ").map(item => parseInt(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior")